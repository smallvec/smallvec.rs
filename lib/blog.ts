import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
};

const blogDirectory = join(process.cwd(), "content", "blog");

function parsePost(slug: string, source: string): BlogPost {
  const match = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)([\s\S]*)$/);

  if (!match) {
    throw new Error(`Blog post "${slug}" is missing its frontmatter.`);
  }

  const metadata = Object.fromEntries(
    match[1].split(/\r?\n/).flatMap((line) => {
      const field = line.match(/^([\w-]+):\s*(.*)$/);
      return field ? [[field[1], field[2].replace(/^['"]|['"]$/g, "")]] : [];
    }),
  );

  if (!metadata.title || !metadata.date || !metadata.description) {
    throw new Error(`Blog post "${slug}" needs title, date, and description frontmatter.`);
  }

  return {
    slug,
    title: metadata.title,
    date: metadata.date,
    description: metadata.description,
    content: match[2].trim(),
  };
}

export function getBlogPosts(): BlogPost[] {
  return readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.slice(0, -3);
      return parsePost(slug, readFileSync(join(blogDirectory, file), "utf8"));
    })
    .sort((first, second) => second.date.localeCompare(first.date));
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return getBlogPosts().find((post) => post.slug === slug);
}

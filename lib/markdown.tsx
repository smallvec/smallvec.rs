import type { ReactNode } from "react";

const inlineToken = /`[^`]+`|\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|__[^_]+__|\*[^*]+\*|_[^_]+_/g;

function renderInline(source: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let tokenIndex = 0;

  for (const match of source.matchAll(inlineToken)) {
    const token = match[0];
    const start = match.index ?? 0;
    if (start > cursor) nodes.push(source.slice(cursor, start));

    let node: ReactNode = token;
    const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

    if (token.startsWith("`")) {
      node = <code key={`${keyPrefix}-${tokenIndex}`}>{token.slice(1, -1)}</code>;
    } else if (link && /^(https?:\/\/|\/|mailto:)/.test(link[2])) {
      const external = /^https?:\/\//.test(link[2]);
      node = (
        <a
          href={link[2]}
          key={`${keyPrefix}-${tokenIndex}`}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {link[1]}
        </a>
      );
    } else if (token.startsWith("**") || token.startsWith("__")) {
      node = <strong key={`${keyPrefix}-${tokenIndex}`}>{token.slice(2, -2)}</strong>;
    } else if (token.startsWith("*") || token.startsWith("_")) {
      node = <em key={`${keyPrefix}-${tokenIndex}`}>{token.slice(1, -1)}</em>;
    }

    nodes.push(node);
    cursor = start + token.length;
    tokenIndex += 1;
  }

  if (cursor < source.length) nodes.push(source.slice(cursor));
  return nodes;
}

function isBlockStart(line: string): boolean {
  return /^(#{1,6}\s|```|>\s?|[-*_]{3,}\s*$|\s*[-*+]\s|\s*\d+\.\s)/.test(line);
}

export function Markdown({ source }: { source: string }) {
  const lines = source.split(/\r?\n/);
  const blocks: ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith("```")) {
      const codeLines: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        codeLines.push(lines[index]);
        index += 1;
      }
      index += 1;
      blocks.push(<pre key={`block-${blocks.length}`}><code>{codeLines.join("\n")}</code></pre>);
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      const content = renderInline(heading[2], `heading-${blocks.length}`);
      const key = `block-${blocks.length}`;
      const level = Math.max(2, Math.min(4, heading[1].length));
      blocks.push(level === 2 ? <h2 key={key}>{content}</h2> : level === 3 ? <h3 key={key}>{content}</h3> : <h4 key={key}>{content}</h4>);
      index += 1;
      continue;
    }

    if (/^[-*_]{3,}\s*$/.test(line)) {
      blocks.push(<hr key={`block-${blocks.length}`} />);
      index += 1;
      continue;
    }

    if (line.startsWith(">")) {
      const quoteLines: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith(">")) {
        quoteLines.push(lines[index].trim().replace(/^>\s?/, ""));
        index += 1;
      }
      blocks.push(<blockquote key={`block-${blocks.length}`}>{renderInline(quoteLines.join(" "), `quote-${blocks.length}`)}</blockquote>);
      continue;
    }

    const unordered = /^\s*[-*+]\s+(.*)$/.exec(lines[index]);
    const ordered = /^\s*\d+\.\s+(.*)$/.exec(lines[index]);
    if (unordered || ordered) {
      const listItems: string[] = [];
      const pattern = unordered ? /^\s*[-*+]\s+(.*)$/ : /^\s*\d+\.\s+(.*)$/;
      while (index < lines.length) {
        const item = pattern.exec(lines[index]);
        if (!item) break;
        listItems.push(item[1]);
        index += 1;
      }
      const items = listItems.map((item, itemIndex) => (
        <li key={`item-${itemIndex}`}>{renderInline(item, `list-${blocks.length}-${itemIndex}`)}</li>
      ));
      blocks.push(unordered ? <ul key={`block-${blocks.length}`}>{items}</ul> : <ol key={`block-${blocks.length}`}>{items}</ol>);
      continue;
    }

    const paragraph = [line];
    index += 1;
    while (index < lines.length && lines[index].trim() && !isBlockStart(lines[index].trim())) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push(<p key={`block-${blocks.length}`}>{renderInline(paragraph.join(" "), `paragraph-${blocks.length}`)}</p>);
  }

  return <>{blocks}</>;
}

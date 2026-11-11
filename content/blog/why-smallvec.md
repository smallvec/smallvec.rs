---
title: Why SmallVec?
date: 2026-11-11
description: A quick look at the idea behind a small vector and when it can be useful.
---

## A little less allocating

Most vectors keep their elements in a heap allocation. SmallVec can keep a small number of elements inline, right alongside the vector itself.

That can be handy when collections are usually short, while still allowing them to grow when they need to.

## A familiar interface

SmallVec aims to feel like a regular Rust vector, with an inline-capacity choice that fits the data your program works with most often.

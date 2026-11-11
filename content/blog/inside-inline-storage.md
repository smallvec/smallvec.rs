---
title: A note on inline storage
date: 2026-11-04
description: What “inline” means in SmallVec, in a few lines.
---

## Near the value

Inline storage means the initial elements live in the `SmallVec` value itself. For short collections, that can avoid a separate heap allocation.

If the collection grows beyond its inline capacity, SmallVec can move the elements to allocated storage and keep growing from there.

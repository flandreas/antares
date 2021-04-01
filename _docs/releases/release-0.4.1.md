---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: April 1, 2021

Fixes some critical bugs.

# Bugfixes

* **#59: Unexpected error when starting simulation:** This error could occur
  when using a newly created circuit in another circuit without restarting Antares.
  The problem was caused by a severe bug in the library management subsystem, which
  is also the cause of some other unexpected errors.

* **#65: General error while opening circuit:** This error could occur when saving
  a circuit after doing complex copy/paste actions, particularly copy/pasting only
  parts of complex wire nets, which could lead to corrupted circuit files.

* **#66: Unexpected error when trying to create a new library:** When trying to
  create a new custom library, an unexpected error occured, preventing users
  entirely from working with their own custom libraries.

* **#67: Byte indexes in circuit ports not entirely visible:** When using binary representation in circuit inputs/outputs with large bit width, Antares draws a byte index at the right side of every byte row. These byte indexes were obscured by the arrow-like shape of the circuit port, because there was not enough space to draw the indexes.

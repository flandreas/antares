---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: July 13, 2025

Some bugfixes, especially for the severe bug #968 that lead to many unexpected errors in "Undo" after opening memory contents in a dialog.

# Features

None.

# Improvements

None.

# Bugfixes

**#967: Reference color box of 'Lookup table' not correctly updated when moved:** Also, the location of the external label wasn't updated either. This has been fixed.

**#968: Error in 'Undo' with memory component 'Content View' involved:** In certain situations, if the "Content view" of a memory component (RAM, ROM, LUT..) was opened as a dialog, and an "Undo" operation was performed, an unexpected error could occur.

**#969: Error when removing a comment in memory contents:** Under certain conditions, an error could occur if you removed a comment from a memory cell.

**#970: Error when running simulation with broken subcircuit reference:** This has been fixed.




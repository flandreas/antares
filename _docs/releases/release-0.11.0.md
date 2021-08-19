---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: August 19, 2021

Release 0.11.0 contains a couple of new features and a fix of a severe
bug that could lead to errors when undoing "Split Wire" operations.

# Features

* **#214: Lower entry barrier for first-time users:** Added some tooltips
such as "Press ALT to create wire junction". These beginner tooltips can
be disabled in the user preferences. The "Missing application signature" part
of the issue is still pending.

* **#215: Export/Import of Libraries:** Like it was already possible for projects,
you can now also export and import libraries from/to ZIP files.This now allows
users to import libraries such as the DIP library from the [Antares Assets Project](https://github.com/flandreas/antares-assets).

* **#216: Improve Pin-Pin Snapping:** The component snapping feature has been
improved to only snap matching pins of two components, while also respecting
their relative locations.

* **#217: New Component "Bit Extender":** A new component has been added to
"Arithmetic" folder of the standard libraries that extends a narrow bit-width
signal to a wider bit-width signal while preserving the signal's sign (MSB).

# Bugfixes

* **#213: Splitting wires can ruin layout of existing wire:** When repeatedly splitting wires, the layout algorithm could ruin the layout of the existing wire
being split. This has been fixed, at least for known scenarios.

* **#218: Error after Undoing "Split Wire":** A severe bug in the undo/redo system
could lead to an unexpected error when undoing "Split Wire" operations.

---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: April 6, 2022

The main reason for this release is a fix of a severe bug #341 in the simulation engine that could lead to infinite oscillation cross-coupled bi-directional circuits ports are used, such as like in the "Bus Transceiver" library component.

In addition to that, some minor bugs have been fixed as well, and some smaller features have been added, including the new "Bus Transceiver n Bit" component in the standard library.


# Features

* **#338: Rotate Label in Symbol Editor:** Allow the user to rotate a label in the symbol editor.

* **#339: Save Button in Symbol Editor:** Like in the circuit editor, also added a save button in the toolbar of the symbol editor.

* **#343: Close non-circuit desktop views with File->Close or Cmd-W:** You can now also close non-circuit desktop views like truth tables, boolean expressions and memory contents with menu File->Close or Cmd-W, if they own the keyboard focus.

* **#345: Bus Transceiver n Bit:** In addition to the existing 4 and 8 bit variants, a generic n bit variant of the Bus Transceiver component has been added to the standard library.

# Bugfixes

* **#341: Bus Transceiver - Strange Behaviour":** Fixes a severe bug in the simulation engine that could lead to infinite oscillation cross-coupled bi-directional circuits ports are used, such as like in the "Bus Transceiver" library component.

* **#344: Missing row headers in truth table of boolean expressions view":** Truth tables in
the boolean expressions view didn't show a row header for all table columns. This has been fixed.

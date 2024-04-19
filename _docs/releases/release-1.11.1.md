---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: April 19, 2024

Fixes some severe bugs


# Bugfixes

* **#711: VHDL export shows obfuscated names:** If the VHDL export fails because a component doesn't support HDL, the dialog now displays the proper component type name.

* **#712: Can't edit custom symbol pins anymore:** When selecting a pin in the symbol editor, the pin's properties were not displayed anymore, preventing the user from changing pin properties. This has been fixed.

* **#714: "Undo" broken after opening RAM/ROM:** If a user opened a RAM or ROM's content view, subsequent undo/redo operations could lead to an error. This has been fixed.

* **#715: RAM can ignore writes:** The RAM component ignored writing a 0 value in certain circumstances. This has been fixed.

* **#721: Error in "Undo" if moving wire segment is involved:** Moving wire segments could lead to errors in subsequent undo/redo operations. This has been fixed.

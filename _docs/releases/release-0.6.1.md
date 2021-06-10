---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: June 10, 2021

Fixes some critical bugs.

# Features

* **#145: Square LEDs:** LED and RGB LED now have a property "Square" that controls
whether the LED bulb is drawn using a square shape instead of the standard circular shape.

# Bugfixes

* **#130: Error when starting simulation:** Due to a severe bug in expanding
subcircuits, an error could sometimes occur when starting simulation.

* **#132: Wrong calculation of XOR with more than 2 inputs:** An XOR gate
with more than 2 inputs produced a wrong result. It now correctly calculates
the "odd function".

* **#133: Wrong calculation of XNOR with more than 2 inputs:** An XNOR gate
with more than 2 inputs produced a wrong result. It now correctly calculates
the "even function".

* **#138: Odd behaviour of momentary switch:** When performing certain mouse
operations on a button (switch with "toggle=false"), the button could lock
into a wrong state.

* **#142: Negation bar missing in symbol view explorer tree:** If port names
contained negated characters, the negation bar was missing in nodes of the tree.

* **#143: Application hangs due to wiring algo going wild:** When moving
components connected with wires using layout "None", the auto-layout algorithm
did sometimes produce wrong results, which could also render the application
non-responsive.

* **#145: RGB LED uses wrong format:** The RGB LED interpreted color codes
of the form "BBGGRR". This has been changed to the more standard form "RRGGBB".

* **#146: Can't edit ROM values any more:** Due to a regression problem, contents
of ROM couldn't be edited any more by the user.

* **#147: Input not touchable:** When placing circuit port very close in the symbol
editor, some of the ports couldn't be selected any more in the symbol editor.

* **#150: Strange behaviour with pull resistor on simulation start:** Wires
connected to pull resistor did sometimes not receive the expected inital state
when the simulation was started.

* **#159: Delay Component does not work as described:** The delay component
now outputs the very signal it received, even if the input did change during
propagation delay.

* **#160: "Internally" name in button not always working when symbol is placed:** Fixed
a bug in symbol controls logic that could lead to unexpected property changes of
controls in symbols.

* **#163: Polyline in circuit editor has no properties:** This has been fixed.

* **#165: Flat curve cannot be selected anymore:** Due to a bug in calculation
of the "Curve" component's sensitive area, a curve component couldn't be selected
any more if it consisted only of a pure horizontal or vertical line.

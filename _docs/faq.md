---
layout: single
title: "FAQ"
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
---

### How do I create a wire junction?

Move the mouse over an existing wire, press ALT and the left mouse button, and drag the mouse to create the new wire.

### How do I zoom the view?

Scroll with the mouse wheel.

### How do I pan the view?

Press/hold middle mouse button and move the mouse.

### How to I create non-orthogonal wires?

First create an orthogonal wire. Then change the wire's "Layout" property to "None". Now you can select the wire and move the line segment's end point.

### Why do I not see signal flow animations?

Signal flow animations are only shown if the simulation speed is in the slowest category "Explore", and only if menu "Simulation -> Animation" is selected.

### Why is "Single-Step Mode" not working?

Besides selecting the button "Single-Step Mode" in the simulation toolbar, make also sure
that the menu "Simulation -> Soft Breakpoints" is selected. Without that menu option, the
simulation running in "Single-Step Mode" ony pauses in hard breakpoints produced by
the "Break" component.

### How do I choose the circuit to be automatically opened when I open a project?

Open the project, select the circuit in the explorer's tree, right-click to open the
popup menu, and select "Open when loading".

### Why are explorer popup menu items sometimes disabled?

Certain operations on top level (e.g. "Duplicate..") can only be executed if there are no unsaved circuit changes. Save your circuit changes and then perform the operation.

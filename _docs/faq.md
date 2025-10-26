---
layout: single
title: "FAQ"
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
---

## General

### How do I zoom the view?

Scroll with the mouse wheel.

### How do I pan the view?

Press/hold middle mouse button and move the mouse.

### How can I avoid tiny texts/ icons on HDPI screen with Linux?

To avoid very small texts and icons when using Antares on Linux with HDPI screens (and certain window managers), you can tweak the starter script. For details, checkout this [issue](https://github.com/flandreas/antares/issues/699).

### Is there a dark mode?

Yes. Settings -> Rendering -> Theme -> Darcula.

## Editing

### How do I create a wire junction?

Move the mouse over an existing wire, press ALT and the left mouse button, and drag the mouse to create the new wire.

### How to I create non-orthogonal wires?

First create an orthogonal wire. Then change the wire's "Layout" property to "None". Now you can select the wire and move the line segment's end point.

### How to I format text?

See the section in the [user manual](/user-manual/english//circuits/text-style.html).

### How do I choose the circuit to be automatically opened when I open a project?

Open the project, select the circuit in the explorer's tree, right-click to open the
popup menu, and select "Open when loading".

### Why are explorer popup menu items sometimes disabled?

Certain operations on top level (e.g. "Duplicate..") can only be executed if there are no unsaved circuit changes. Save your circuit changes and then perform the operation.

### Where are the 74xx DIL packages?

A library containing some 74xx DIL packages can be downloaded from the [GitHub assets project](https://github.com/flandreas/antares-assets). Go to `libraries/SN74xx`, download `SN74xx.zip`, and import it into your local Antares installation.

## Simulation

### Why is the simulation so slow?

There are various settings that influcence the simulation speed. For maximum speed, make sure that
- Menu "Simulation" -> "Deep Simulation" is NOT selected
- The "Simulation Speed" slider is set at the right end of the scale

### Why do I not see signal flow animations?

Signal flow animations are only shown if the simulation speed is in the slowest category "Explore", and only if menu "Simulation -> Animation" is selected.

### Why is "Single-Step Mode" not working?

Besides selecting the button "Single-Step Mode" in the simulation toolbar, make also sure
that the menu "Simulation -> Soft Breakpoints" is selected. Without that menu option, the
simulation running in "Single-Step Mode" ony pauses in hard breakpoints produced by
the "Break" component.

### Why is my custom flip-flop oscillating?

Simulation of sequential circuits is sensitive to logic gate's propagation delay, which is 20 ns by default. To avoid oscillation, you have several possibilities:
- Choose a different propagation delay for both of the gates in the flip-flop
- Select menu "Simulation" -> "Noise" -> "Random noise" to let Antares vary the propagation delays randomly

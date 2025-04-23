---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: April 23, 2025

Maintenance release.

# Features

**#47: Renaming circuit when clicking breadcrumb:** Double-click on the head breadcrumb to rename the currently open main circuit.

**#555: Click in knob popup to change value:** Components like "Clock" display a knob popup that allows the user to change a value during simulation by rotating the know using "click-drag" gestures. Support also mouse clicks on the knob popup to set a value.

# Improvements

**#898: Default value for a circuit's propagation delay (scripted):** A subcircuit's propagation delay property is now recalculated using the built-in "Calculate propagation delay" function whenever the circuit is saved, unless the user has provided a custom value. In earlier versions, the default value 0 was used for shallow (scripted) simulations, possibly leading to circuit behavior different from deep (non-scripted) behavior.

**#905: FSM: Multi-bit output:** The previous implementation only supported 1-bit outputs. You can now also specify a list of outputs, e.g. "A=2, B=1".

**#910: Make it easier to start with Antares:** The automatically created "My first project" now contains a "First circuit" containing some introduction information and explanation.

**#911: Make it easier to use the oscilloscope:** Bug #912 surely was the main reason why users weren't able to product a reasonable waveform. Also changed the default mode to "real-time", and added a help link to the oscilloscope manual page in Help -> Selected component.

# Bugfixes

**#907: Missing UI updates after renaming circuit with Explorer->Rename:** This has been fixed.

**#909: Text too dark with style "Text" in dark mode:** This style's text color is now the same as the color in style "Figure" (for dark mode).

**#912: Clocked oscilloscope displays incorrect curves:** The curves for the non-clocked probes showed "pikes" which were incorrect. This bug was introduced when implementing the analog variant of the oscilloscope.

**#913: Exception while renaming a project:**. In certain situations, an error occurred when renaming a project.

**#914: 'New circuit' allows entering non-valid rich-text name:** This is now caught and rejected.

**#915: Cannot restart Antares after changing font in preferences:** This has been fixed.



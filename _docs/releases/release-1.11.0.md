---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: April 5, 2024

Besides the usual smaller features and bugfixes, the main new feature of this release are global tunnels.

# Features

* **#236: Display port names in transistors:** Transistors now display port names (G, S, D) if the option in the user settings is enabled.

* **#626: "Bus register" with WR input and EN output (tri-state):** New circuit added to the standard library.

* **#693: Explain zoom/pan gestures during simulation:** While in edit mode, the status bar at the bottom of the main windows says "Scroll to zoom. Press/hold middle mouse button to pan". The same is now also displayed in simulation mode.

* **#694: Explain grayed-out scripted subcircuit during simulation:** If you have a scripted subcircuit, and you run the simulation in shallow mode, Antares renders the subcircuit grayed-out to indicate that it can't display signal states, because the subcircuit's elements are not simulated. The execution script simply recalculates the outputs based on the input values. This might be confusing to some users. Antares now displays an explaining text at the top of the window if "Show tips for beginners" user preference is selected.

* **#698: Tunnels for global signals:** Tunnels now have a property "Global". When set, tunnels can communicate not only within the circuit in which they are contained, but with all tunnels of the entire project that have the same name.

# Improvements

* **#689: Increase max. remark length in rating:** The remark field in the "Rating" dialog didn't allow more than 20 characters. This has been increased to 200 characters.

* **#696: Label in "Priority Encoder" symbols:** Added label "PRIO" to the "Priority Encoder" symbols.

* **#704: Adding ports to connected components can change connections:** When adding or removing ports in a subcircuit that is already used in main circuits, wires could unexpectedly be connected to other pins afterwards. This was caused by the "Generate symbol" algorithm, which now tries to maintain pin-to-wire connections in such situations.

# Bugfixes

* **#663: Explorer tree items right-cropped on Windows 200% display:** The tree items were cropped on the right side with certain resolutions on Windows. This has been fixed.

* **#685: Cannot remove pin name from component:** Under certain circumstances, it was not possible to remove a pin name from a component. This has been fixed.

* **#686: Object order messed up when copy-pasting rectangle and text:** The stacking order of components after copy-pasting was not properly maintained. This has been fixed.

* **#695: Unexpected error when zoom factor becomes too small:** With "Zoom to fit (100%)", Antares tries to automatically adjust the zoom factor so that the entire circuit fits into the current size of the view. If you made the view very small, an unexpected error could occur. This has been fixed.

* **#700: "Counter n Bit" doesn't wrap around at 2^n-1:** The scripted library component "Counter n Bit" now returns to 0 after having reached its max value.

* **#701: Unexpected error when pasting component into library view:** This has been fixed.

* **#705: Unexpected error with tunnels when starting simulation:** When you opened a subcircuit containing tunnels from a main circuit and then started the simulation, an unexpected error occurred. This has been fixed.

* **#706: Junping signal flow animation after setting speed to zero:** Signal flow animations can be brought to a halt when setting system speed to 0 during simulation. However, when then increasing the speed again, the signal flow animation executed a jump along the wire they were travelling. This has been fixed. They now just continue from the location where they came to a halt.

* **#707: Pasting a circuit with oscilloscope probes lead to error:** The oscilloscope component and its probe components are now declared as non-copyable.

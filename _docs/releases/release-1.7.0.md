---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: September 30, 2023

Release 1.7 brings besides some smaller features a lot of bug fixes, especially the fix for the severe bug #648, which could lead to corrupt circuit files when undoing wire junctions, and bug #613, which prevented you from changing properties of "Input/Output" components.

Also worth mentioning is the new feature #641: Antares now highlights coinciding pins not connected by a wire, a situation that can occur after copy/paste or after moving components with arrow keys, and that could lead to confused users and circuits not working as expected.

# Features

* **#624: External label for 'Lookup Table' component:** The lookup table component can now have an external label. Also required for upcoming VHDL export.

* **#631: 16:1 multiplexer, 1:16 demultiplexer:** The standard library now contains a 16:1 multiplexer and a 1:16 demultiplexer, in addition to the already available version with smaller bit width.

* **#633: Change LED colour in symbol controls:** If a subcircuit contains e.g. red LEDs, and you add these LEDs as controls to the subcircuit's symbol, you can now change the colours in the symbol when using the subcircuit in another circuit by "Edit symbol" in the host circuit.

* **#641: Missing connection after copy/paste if pins coincide:** When copy/pasting components, it can occur that pins of pasted components coincide with pins of other components. Since Antares doesn't automatically create wires in such situations, and the pins are therefore not connected, this could lead to confusion of users and circuits not working as expected. Antares now highlights coinciding pins that are not connected by a wire with little red dots.

* **#644: Numeric keypad input for DIP switches:** You can now also use the numeric keypad on your keyboard to operate DIP switches during simulation.

* **#645: Avoid double bit width annotations:** If the wire between two multi-bit pins is small, their bitwidth annotations are close together, resulting in visual clutter. Antares now hides one of them in such a situation.

# Bugfixes

* **#613: Error when changing 'Input/Output' property:** When trying to change any property of an "Input/Output" in the properties window, nothing happened, and below the property window, a red message "Expected '('" appeared. This has been fixed.

* **#616: Missing pin names in ROM and RAM:** ROM and RAM should display the names of their pins, i.e. A, D, CS etc. This has been fixed.

* **#627: Wire distortion when creating horizontal junction:** In fact, this problem could occur when creating a junction at a corner of a wire, and the mouse position was slightly below the corner. The algorithm now tries to snap exactly to the corner location.

* **#629: Wrong carry bit calculation in 'Full Adder 4 Bit (Fast Carry)':** Circuit used an inverter instead of a buffer.

* **#630: Multiplexer Issues:** 4:1 and 8:1 multiplexer produced wrong results in "shallow simulation" mode.

* **#632: Missing redraw of 'Representation during simulation' feature:** The signal path e.g. drawn on multiplexer symbols didn't refresh sometimes with simulation speed "Use".

* **#634: Simulation error with pull resistor on bus with wire tap:** An unexpected error occurred during simulation of a circuit with a 8-bit bus an 8-bit pull resistor. The error was caused by a 4-bit wire tap on the same bus, running into a bit width negotiation issue with the pull resistor.

* **#635: Error in 'Reset Symbol' on subcircuit symbol:** When trying to reset a customized subcircuit symbol to the predefined symbol, an unexpected error occurred.

* **#636: Port control in 'D Latch' symbol shows !Q instead of Q:** This has been fixed.

* **#638: Missing re-layout after changing 'Logic' property of tri-state buffer:** When changing the "Logic" property of a tri-state buffer with connected wires from "Negative" to "Positive", the negation circle disappeared, but the wire dit not experience a re-layout, resulting in a gap.

* **#639: Cannot load circuit containing subcircuit with changed pin name (after 'Edit Symbol'):** When editing a subcircuit's symbol in a host circuit by "Edit Symbol", the host circuit could not be opened if pin names in the subcircuit were changed in the meantime. This has been fixed.

* **#643: 'System malfunction' dialog when opening circuit after deleting subcircuit pin:** Deleting pins in subcircuit is a standard, albeit not common usage scenario. Antares should not raise a 'System malfunction' issue in this situation. This has been fixed.

* **#646: Bit width annotations overlap with wire arrow head (and partially with negation circle):** This has been fixed.

* **#648: Undoing wire junction creation can lead to corrupt circuit:** Under certain circumstances, a bug in the undo/redo system could lead to corrupt circuits when undoing the creation of a wire junction.
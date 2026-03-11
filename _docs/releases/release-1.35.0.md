---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: March 11, 2026

Many features, improvements and bug fixes, most of them came up while me trying to do "nand2tetris" with Antares.

# Features

**#1123: Docking:** In the former version, new views (sub circuits, memory content views etc.) were always opened in the right half of the main window, where all of them are stacked vertically. Now Antares allows the user to place the views himself, especially by adding new columns that take advantage of nowadays wide screens.

**#1158: Option in RAM component for separate data pins:** One for writing and one for reading, instead of the current bidirectional pin.

**#1164: Duplicate test case:** Context menu action in "Test cases" to duplicate an existing test case. Useful if you have many similar tests, like when building a CPU and having a test for each of 10 different jump instructions.

**#1165: Move test case to another position by drag&drop:** Allow changing the order of a circuit's test cases using drag&drop.

**#1169: Monochrome mode in "Video RAM" component:** Used e.g. for building the nand2tetris project. Also support a variable RAM data bit width, so that e.g. a 8 bit video RAM can display 8 monochrome pixels per memory cell.

**#11712: New property "Closed on start" on switch components:** If set, the switch is closed when the simulation starts. In the former version, a switch was always open by default.

# Improvements

**#1145: Cleanup "Flip-Flop" library:** Add some missing (Neg) variants and fixed some names and descriptions.

**#1147: Reject "Analyse circuit" of sequential circuit:** Checks if a circuit is purely combinational, and rejects "Analyse circuit" attempt with an info dialog.

**#1149: Allow input/output names "X" and "Z" in test vector scripts:** When writing test cases for circuits with inputs named "X" or "Z", Antares rejected the script complaining something like "Expecting ID". This was because the parser treats "X" and "Z" in the header row like "Don't care" and "Undefined", which is only required in the statement rows. Change the parser such that "X" and "Z" in the header row are allowed.

**#1150: Test case execution can fail due to "Too many iterations":** The execution of a test case can fail because too many iterations are necessary if the tested circuit is complex. Currently, there is a hard-coded limit of 1'000 iterations for executing a test vector until the circuit must have become stable. If that limit is reached, Antares displays a "Technical error. Consult the log file" message. Improve this as follows:
- Display a more descriptive message like "The circuit didn't settle after 1'000 iterations. Check for unwanted cycles in your circuit, or consider increasing the number of iterations".
- Introduce a new property "Number of iterations" with default 1'000 the user can increase in such a situation.

**#1153: Pasting location:** When a circuit element was copied and pasted, the element got pasted close to its original location. Then it has to be moved to the desired new location. This new location could be far from the original location (eg. several screen scrolls apart). This made matters inconvenient. Improved as follows:
- If the paste location is within the visible area (how it is currently implemented):
  - First paste is placed with little offset
  - n-th subsequent paste is placed with B-A offset to support the "array" use case
- If the paste location would be outside the visible area:
  - If the mouse pointer is inside the visible area: Paste is placed at mouse location
  - If the mouse pointer is outside the visible area:
    - First paste is placed at the center of the visible area
    - n-th subsequent paste is placed with little offset to previous paste

**#1161: Draw 1-bit signals in signal colors even with representation "Hexadecimal":** With issue #1103, the default signal representation for new inputs/outputs was changed from "Binary" to "Hexadecimal". This was to avoid that user who aren't aware of the "Signal representation" property end up with huge input/output components when using large bit widths. The drawback of this approach is that now by default 1-bit pin controls in symbols use the white/gray color scheme associated with "Hexadecimal" instead of the dark green/light green color scheme associated with "Binary". This happens in symbol controls, but also in all components that use "Number digits display", such as "Probe". Change the policy such that the dark green/light green color scheme is used for 1-bit signals even if the signal representation is not "Hexadecimal".

**#1163: Support probes as outputs in test cases:** When writing test case scripts, it is currently only possible to use output values from circuit output components. Sometimes, especially when testing complex circuits, you want to write tests for expected values that are not related with circuit outputs, but represent some "intermediate / internal" values. Introducing a circuit output just for testing would unnecessarily change the circuit's external pin interface. Therefore, support also using probes as testable output signal sources.

**#1168: Poor performance on Raspberry Pi 5 (Trixie) - workaround:** Improved Java VM parameters for Linux.

**#1173: "Too many iterations" in test result not clearly indicated:** If a test vector execution is aborted due to "Too many iterations", the corresponding row in the test results panel has a grey background instead of green or red. This was not obvious to the user. Antares now tells the user that he could try to increase the test case's property "Number of iterations" to fix the problem.

**#1174: Set focus on "Text" field in translatable property dialogs:** Properties "Name" and "Translations" are translatable and open a popup dialog where the texts can be entered in all supported languages (unless your language is English, in which case only English is displayed). By default, the focus is set on the dialog's OK button. Set the focus instead on the text field.

**#1176: Names of new inputs/outputs with adding copy/pasting:** Consider a circuit with an input named "I".
- Adding a new input by drag&drop results in a new input named "I2"
- Copy/pasting the existing input results in a new input named "I (2)"
The second scenario is not correct. Antares is basically capable of detecting patters of names with trailing numbers, and composing new a name by incrementing the number, like "I" -> "I2". However, this works only if the name has a number to begin with. If it doesn't, like in "I", the result is "I (2)". This was introduced with #590. Along with this change, the default name of new inputs was set to "I1" in order to make incrementing numbers work. With #925, the default name was changed back to "I", because I've forgot about #590, and there was no unit test that linked the default name with creating new names. Now, change the system so that the approach "I" -> "I2" -> "I3" etc. is supported for both adding by DnD and copy/pasting.

**#1177: Suppress current flow animation in scripted analog subcircuits:** Have an analog circuit (like an analog NAND implementation) with an execution script. If you use it in a digital circuit as subcircuit, run the main circuit in "Shallow simulation mode" (i.e. using executions scripts where available), and open the analog subcircuit in a separate view, it plays the current flow animation. Current flow animation are now suppressed in this scenario, because voltages and currents aren't calculated in this mode, and the displayed animation is then anyway wrong, and unnecessarily consumes system resources.

# Bugfixes

**#1173: Error in recording use case when clicking on keyboard popup of input:** Example: 16-bit circuit input with "Hexadecimal" representation. The first click brings up the keyboard popup, the second clicks sets one of the 4 nibbles.
When running the use case, an error occurred while processing the click in the keyboard popup. This has been fixed.

**#1142: Wire tool denies net with 1 output and 2 inputs:** This has been fixed.

**#1146: "Analyse circuit" doesn't evaluate propagation delay expressions:** This is why if you tried to analyse the "SR Latch" circuit from the standard library, Antares came to the conclusion that the circuit is oscillating and aborted after 1'000 iteration. Without expression evaluation, both NOR gates have propagation delay 0, and oscillation is the inevitable consequence. This has now been fixed.

**#1148: Error when creating test for analog circuit:** Tests for analog circuits are not yet supported. At least disable the functionality for analog circuits so that no unexpected errors occur.

**#1151: Missing scrollbar in "Test cases" list:** This has been fixed.

**#1152: Cannot edit library/project folder name:** Context menu -> Properties brings up a dialog, but the "Name" property was read-only. A bug in how the authorisation system was applied here. This has been fixed.

**#1154: Error when dropping oscilloscope probe on wire (name too long):** When you drop an oscilloscope probe on a wire, Antares tries to automatically derive the name of the probe from components connected to the wire onto the probe is dropped. However, the length of a probe name is limited to 3 characters, so that it fits into the probe's UI figure. The algorithm for deriving the probe's name doesn't respect this limit, and an unexpected error occurs. This has been fixed.

**#1155: Error in simulation with 64-bit values:** Occurred during simulation when trying to extract a 64-bit subword from a 64-bit signal. Due to a programming error, this operation did not accept arguments bigger than 63. This has been fixed.

**#1157: Dangling signal flow animations when stopping simulation in subcircuit:** In certain situations, signal flow animation graphics were not removed when the simulation was stopped. This could then lead to an error when editing a wire with such an gangling graphic.

**#1159: "Save changes?" after opening RAM content dialog during simulation:** In certain situations, changes in the RAM contents piled up undoable commands if the RAM contents was open, although RAM didn't even save its contents to the circuits file. This has been fixed.

**#1160: Port control in symbol not updated when circuit input/output properties change:** f you have a circuit with an input or an output, and you have added its control to the circuit's symbol, and you change
- the bit width
- the symbol representation properties, the control in the circuit's symbol editor is not updated.

**#1167: Error when creating circuit from truth table:** In certain situation an unexpected error could occur when creating a circuit (AND and OR gates) from a truth table. The error occurred if the number of OR terms was zero (exact scenario not known). This has been fixed.

**#1170: Adder n Bit - Wrong output on subtracting two equal numbers:** The problem was caused by scripting used by the generic n-bit circuit. The scripted output signal was not truncated to the output pin's bit width. If that output signal is consumed by a built-in component like "Circuit input", it is correctly displayed as 0. However, if it was consumed by another purely scripted component like the "Comparator n bit", truncation didn't take place. This has been fixed.

**#1172: Error when changing circuit type in "Extract as subcircuit..":** The action "Extract as subcircuit" uses the same parameters dialog like action "New Circuit", including the option "Type" for choosing "Digital" or "Analog". Switching the type during "Extract as subcircuit..." is not possible. The parameters dialog now disables the "Type" option and displays the type of the origin circuit.



---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: July 18, 2026

Various bugfixes, improvements and new features.

# Features

**#1205: Support 'Rich Text' in text components:** Extended the text component to support rich text, such as "!(myText)" for overlines. New boolean property "Rich text" of the text component for backward compatibility. If checked, the entered text is interpreted and rendered as rich text. If not checked, the entered text is rendered with all formatting annotations.

**#1206: Magnitude-based property value entry:** The digital clock component allows to enter magnitude-based values in the "Period/Frequency" property, such as "100us" for microseconds or "3s" for seconds. Supports also the same for the various analog components, such as "10K" for "Resistance" in the resistor component or "200 n" (and "200 nF" as well) in the capacitor.

**#1215: 'Max. number of signal values' in individual oscilloscope:** Antares has a default parameter for how many signals an oscilloscope row can store. The default is 500, but this can be changed in Preferences -> Oscilloscope -> Max. number of signal values. There are cases where you'd like to adjust this for an individual oscilloscope, especially if you've decreased the analog circuit's property "Simulation time step" e.g. to 0.001 in order to see more details of the signal curve. The oscilloscope component now has its own "Max. number of signal values", initially set to the system's default.

**#1216: Scroll horizontally in oscilloscope signal rows:** Press left mouse button and drag to the left. Allows to bring sections of the signal curve into the visible range after they passed by the left border (either by time passed or after changing the scale).

**#1220: Variable capacitor and inductor:** Just like with variable resistor: Interactively alter the capacitance of a capacitor and the inductance of an inductor during simulation.

**#1222: Clear oscilloscope signal history during simulation:** Added a button to the oscilloscope to clear the signal history during simulation.

# Improvements

**#1211: Improvements in File -> Open Recent:** Various fixes and improvements:
- Bug: Item is not in menu after it has been manually closed
- Bug: An error could occur when executing the action
- Also support other items types like "FSM" or "Truth table", not only "Circuit"
- Indicate the type of item in the menu name, i.e. "Circuit 'A'" instead of "Project element 'A'"
- Clear the menu after the current project / library has been closed

**#1217: Property 'Signal curve style' in oscilloscope:** Two options:
- Rectangular: This is the default. Two consecutive signal points are connected by two orthogonal line segments.
- Diagonal: Two consecutive signal points are connected by a diagonal line

Digital circuits support only "Rectangular", analog circuits support both options. Linear analog circuit (e.g. resistor networks) are better suited for "Rectangular", while analog circuits with non-linear components (e.g. LC oscillators) can benefit from the "Diagonal" option.

**#1218: Support underscores in script expressions:** If you name an input pin "A_B", it is rendered as an A followed by B as subscript (see "Rich text feature"). However, such pin names could not be referenced in expressions, such as in execution scripts or in circuit parameter expressions. Note that allowing also other special characters like "A^B" (superscript) in expressions would be more difficult, as they collide with other usages in the script grammar, e.g. "^" for the mathematical power operator.

**#1224: Increase dark mode contrast:** Upgraded to the latest FlatLaf version 3.7.2, which increases dark mode contrast by making white text brighter.

**#1226: Add parallel output pin to 'Shift Register Parallel-In':** Both 4 and 8 bit variants.

# Bugfixes

**#1207: Wrong scale value position in analog oscilloscope:** The scale mark "5 V" for the red signal curve was drawn at the wrong position.

**#1212: Error when trying to drag breadcrumb item in separate viewer:** This has been fixed.

**#1213: 'Undo' can undesirably alter a circuit's original state in the project:** When the user opens a circuit for editing, Antares creates a working copy of the circuit to be edited. When the user saves the changes, the project's version of the circuit is replaced with the working copy, and the changes are made persistent in the file system. When the user closes the changed circuit and answers the question "Do you want to save?" with "No", the project's version of the circuit should remain unchanged. However, due to a bug in using the undo/redo subsystem, undoing one of the changes might have altered the project's version of the circuit. This often went unnoticed, because the user usually does save the changes.


**#1214: Distorted wire layout when connecting to a wire's corner:** See scenarios in GitHub issue. This has been fixed.

**#1219: Wrong status 'Symbol generated' in symbol editor after 'Save':** This has been fixed.

**#1221: Error when editing ROM contents:** Entering a space character in memory cells could lead to an error.

**#1223: Error with 'Extract as subcircuit..' in analog circuit:** After extracting a subcircuit B from an analog circuit A and then trying to create a wire to a pin of the replacing subcircuit symbol in A, an error occurs. Antares currently doesn't support adding subcircuits to analog circuits. "Extract as subcircuit.." in an analog circuit ignores this restriction and therefore produces an illegal situation. "Extract as subcircuit" must be disabled in analog circuits.

**#1225: Wrong simulation behaviour of 'Shift Register Parallel-In 8 Bit':** The standard library circuit "Shift Register Parallel-In 8 Bit" behaved wrong in simulation. It connected its two inner 4 Bit subcircuits in the wrong order.





---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: September 20, 2025

This release features a new library component "7-Segment with decoder", along with some features regarding circuit parameters required for this new component. Also lots of various improvements and the usual bugfixes.

# Features

**#1018: Standard library component '7-Segment with decoder:** Currently, if you want to add a 7-Segment display to your circuit, you'd often also add the corresponding "BCD 7-Seg Decoder" (or its hex variant) and wire it up with the 7-Segment display, maybe also adding a splitter if the data signal comes from a bus. This can be tedious, and it consumes a lot of space in the circuit. Add a new component to the "Output" folder of the "Standard library" that combines these two component into a single one.

**#1019: Parametrise a constant's value:** Use circuit parameters to specify the value of a constant. Required e.g. by #1018.

**#1025: New circuit parameter type 'Light color':** Used to parametrise the light color properties of components in a subcircuit. Will be used e.g. in the new "7-Seg with decoder" circuit in the standard library to set the color of the 7-Segment display from outside the subcircuit.

# Improvements

**#1001: Display 'attention drawer animation' only in single-step mode:** If simulation speed is in range "Explore", and option "Simulation -> Animation" is enabled, Antares plays an animation with a growing orange circle whenever a new bit flow animation is started at a component's output pin. Play the attention drawer animation only in single-step mode, where a new signal at an output pin sits there and waits until the user resumes the simulation.

**#1004: Indicate signal flow direction in 'Transceiver' symbol:** The standard label in "Transceiver" library circuits is "<>". Use the "Representation during simulation" feature and the Antares DSL function "setLabel()" to adjust the label during simulation such that it denotes the signal flow direction according to the DIR pin.

**#1006: 'Locate circuit' in explorer should also locate the selected subcircuit:** The button "Location circuit" selects (and scrolls to) the currently open circuit in the explorer tree. Extend this function such that if a subcircuit is selected, pressing the button locates the corresponding library/project entry in the explorer tree.

**#1007: Handling bidirectional pins in test scripts:** When writing test case scripts, you can new extend the input and output names with either ">" to designate an input or with "<" to designate an output. See the GitHub issue for the rationale behind this improvement.

**#1009: Option to disable scenario text display during simulation:** If a circuit contains scenarios, its texts are displayed during simulation if the simulation speed is "Observe" or slower. With speed "Use" they are not displayed. Menu Simulation -> 'Show scenario texts' allows you to disable scenario text display altogether.

**#1010: Draw background of analog input/output with signal color:** If the voltage at an analog input/output exceeds the TTL threshold voltage (currently 2 V system constant), draw its background in light green, else in dark green. Similar to like the digital input/outputs are drawn.

**#1011: Click on disabled clock to toggle output signal:** If a clock's "Enabled" property is not selected, the clock's output remains always 0 during simulation. For testing and debugging a circuit, it can be useful to manually clock through a scenario. Change the clock's behaviour such that clicking with the mouse on a clock toggles its output if the clock is disabled.

**#1015: Display 'Deny connection' annotation in auto-connector:** When dragging components, Antares constantly checks whether the component's pin could be connected to the pins of other components, and displays the green connection highlighter if that's the case. Whether a connection is possible depends on the type of pins. If a connection for two coinciding pins is not possible, display the red cross, the "Deny connection" indicator already known from the wiring tool.

**#1016: Usability of 'Parameter Definition' dialog:** In the current implementation of the "Parameters Definitions" dialog, the buttons "Add", "Remove" and "Apply" are all on the same row, and the form with the fields are below the buttons. This is confusing, as it is not obvious that after having entered the data of a "Added" parameter definition, the user has to press "Apply" to commit the changes to the table. Place the "Apply" button below the data entry form.

**#1017: Length cast operator in Antares DSL:** As described in the "Antares scripting" chapter of user manual, the results of expressions are truncated to the length of the left-most operand. If this is not desired, such an in an 8-bit multiplier whose results are 16-bit values, you could use the trick O = (1 * A) * (1 * B) which first converts the values to long, which aren't limited to the circuit input's bit width. To make this more explicit, Antares DSL now has an explicit length cast operator "$". The execution script of the above example (8-bit multiplier) can now be formulated as O = A$16 * B$16.

**#1020: Disable snapping when resizing component with ALT:** f you move a component with the mouse while pressing ALT, snapping the component's location to the grid (or to other components, depending on the settings) is temporarily disabled. Allow the same for resizing or shaping components by moving its handles.

**#1022: Descriptions in parameter definitions:** Allow the user to write a description when definition a new circuit parameter in the "Parameters Definition" dialog. The need for this arose from the new feature #1019 "Parametrise a constant's value". Without a description of such parameters, it would be difficult for users to set the right value when specifying the parameter in a subcircuit.

# Bugfixes

**#1002: Missing rich-text rendering in column headers of 'Log' sidebar:** This has been fixed.

**#1003: Wire connecting wires with multiple output pins:** Antares now prevents you from creating a wire that connects two wires with output ports asserting signals to it.

**#1005: 'Calculate propagation delay' fails if circuit has no output-only pin:** The algorithm starts with circuit output pins and works back towards the circuit inputs to find the longest path. If a circuit has no output-only pins (like in the standard library's "Bus transceiver n Bit" circuit), Antares refuses to do the calculation by saying "no inputs or no outputs". Bidirectional pins are now also considered valid output pin starting points.

**#1008: Newly added circuit input/output doesn't maintain rotation:** When dragging a circuit input/output from the library into a circuit, you can rotate the component while dragging using META-R. However, when releasing the component, it lost the rotation you've chosen and was added with default rotation zero degrees.

**#1012: Keypad popup doesn't offer X and Z for certain representations:** For representation "Decimal" and "Octal", the keypad popup didn't offer the X and Z keys.

**#1013: Handles in selected components even if circuit is read-only:** Certain components like rectangles or polylines showed small handles when being selected. These allow the user to shape the component, e.g. resize the rectangle or move polyline points. These handles were shown even if the drawing is read-only.

**#1014: Error when opening script editor in 'Bit width' property field:** When entering an invalid value in a bit width editor and then pressing the button "Edit script", an error occurred.

**#1021: Click on keypad popup not applied if mouse is moving:** A click on a key in a keypad popup was only applied if the mouse didn't move at the same time. The user got the impression that mouse clicks were lost, and he had to click multiple times.

**#1023: Error when trying to move circuit from project to library:** If you move a circuit from a project to a library, Antares checks whether the circuit contains any references to project circuits, which would become stale. If Antares does detect a stale reference, an unexpected error occurs instead of a regular error message informing the user about the situation. This was caused by a bug in the exception handling.

**#1024: Focus border in 1-bit circuit input hardly visible:** For 1-bit circuits input having value 1 during simulation, the focus border is hardly recognisable (white on bright green). Now uses the text color for drawing the focus border.

**#1026: Error when displaying toast (Translucency not supported):** The toast Antares uses to display messages like "Circuit saved" uses a fade-in / fade-out effect based on translucency. Not all OS support this. If they don't, an error occurs. Antares now detects this situation and displays a toast without the fade-in / fade-out effect.

**#1027: Error in signal flow animation:** Depending on the geometry of a wire, an error can occur during signal flow animation rendering.

**#1028: Error 'Cannot mirror...' with broken subgraph reference:** If your circuit contains a sub circuit, and you delete the referenced sub circuit before you open the main circuit the next time, the sub circuit symbol gets replaced with a red "Broken sub circuit reference" symbol. However, if you've mirrored the sub circuit symbol when the reference was still valid, Antares throws an error "Error while loading: cannot mirror.." when loading the main circuit, because the "Broken sub circuit reference" is not mirrorable.




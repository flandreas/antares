---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: October 29, 2026

Various bugfixes, improvements and new features.

# Features

**#1240: Community projects & project browsing in Antares Web:** The landing page of [Antares Web](https://app.antarescircuit.io/) now displays recently uploaded community projects. Projects can now be browsed, and its circuits can be opened and simulated.

**#1245: Select "Workspace" from previous selections:** Store up to 6 previously used workspace location and allow the user to select one of them in the "Open workspace" dialog. The button "Select..." and its file chooser still remain.

**#1246: "Location" property for components:** Display the x,y coordinate of component locations in the "Properties" window. Allows the user to edit the location (undoable/redoable).

**#1252: Breakpoint in "Use case" after each script line:** If a use case is executed in "Single step mode", the execution is now paused after each script line, after which execution can be resumed by clicking on the "Resume" button. This enables single-stepping through a use case. Note that breaking at "each line" is only possible if the individual lines are all timed differently. If you have 3 lines in your script, and each of them has the same execution time, they are all executed at the same time, and you will only experience a single breakpoint.

**#1256: Subcircuit execution script DSL functions time() and propDelay():** New functions in Antares scripting DSL.

**#1260: Tip of the day:** A new "Tip of the day" dialog is now available in the "Help" menu. Automatically displayed when the application starts, unless the user has disabled this feature.

**#1262: Analog "A/C Voltage source" component:** New component in the "Analog" library.

**#1263: Analog "OpAmp" component:** New component in the "Analog" library.

# Improvements

**#1241: Clarify scenario condition evaluation:** Scenario detection during simulation happens whenever a component has been recalculated by the simulator and potentially has produced new values on its output pins. This is why scenario condition expressions must be formulated on circuit inputs or output pins of any circuit elements. Using input pins in condition expression often won't produce the intended effect, especially in analog circuits. This has now been clarified in the documentation.

**#1243: Add circuit "T Flip-Flop (Neg)" in standard library:** New library circuit.

**#1251: Output "undefined" when running test cases for execution scripts:** Previously, the test case runner for circuit execution scripts treated "undefined" bits when setting values of output pins by keeping the bits that are already present. This is the correct behaviour for bi-directional pins, but prevented applying Z to output-only pins. Discovered while trying to write an execution script for the "Bus register" circuits in the standard library.

**#1254: Display "undefined" state Z in oscilloscope signal curve:** Before the digital oscilloscope signal curve displayed Z as 0. Improved this by displaying a level between 0 and 1 using a dashed line.

**#1259: More descriptions in Standard Library circuits:** Especially in the "Flip-Flops" folder.

**#1261: Avoid bumps in analog current flow animation:** Especially when the current direction reverses. Also made the dots slightly larger.

**#1264: Property editor for certain magnitude value types should allow negative values:** Voltage, current.

**#1267: Improve oscilloscope time scale:** The oscilloscope's current time scale tries to display relative time, where 0 moves with the head of the signal curve to the left, and then tries to stay there once the head has reached the left border. But this doesn't work correctly, and the whole dynamic is confusing for the user, rendering it mostly useless.

New approach: Triggered sweep
- The scope is divided into e.g. 10 fixed-sized divisions
- The center grid line is labeled 0.0 ns
- Negative numbers to the left, positive numbers to the right
- The grid time labels are updated accordingly if the horizontal axis gets scaled
- If the simulation is paused (or always?), the user can grab the center grid line and move it horizontally, e.g. to measure the period of a sine wave, or the distance between two signal peaks
- Drag the vertical line "0 ns" e.g. to the peak of the sine wave 
- Drag one of the other vertical lines e.g. to another peak. This leaves the "0 ns" in place, but changes the distance of the lines. 
- Now, the period of the wave of 2.42 us can be easily determined.

**#1268: Add "in" expression to execution script DSL:** Allows to write boolean expressions like "a in (1,2,3)" to be used e.g. in if-statements like "if (a in (1,2,3)) {}". Used in scenarios of the CPU circuit in "Tanenbaum" example that display "Fetch, Decode, Execute" information as scenario texts during simulation.

**#1269: Additional logic operations in script DSL:** xor, nand, nor, xnor.

# Bugfixes

**#1242: "Power-on reset" displays wrong value in signal flow animation:** A 1-bit Power-on reset component with logic "Positive" displays "0xFF...FFE" instead of 0. This has been fixed.

**#1244: Symbol property "Symbol generated" gets lost when saving:** Regression of #1237 "Save can undesirably alter a circuit's original state in explorer".

**#1247: Cannot delete scenario step in context menu:** Missing context menu action on "Scenario step" item in scenario tree. Instead, "New scenario step" (disabled) was offered, which was also wrong here.

**#1248: "+" button in "Use cases" sidebar not always enabled when it should be:** The "+" in the "Use cases" sidebar was not always enabled when the "File -> Use cases -> New use case" was enabled.

**#1250: Error in DSL execution script with 'Z' characters:** Using an expression with 'Z' as 'undefined' value led to an error. Could also be reproduced in the circuit "Function" expression editor's "Test" action.

**#1253: Menu "Simulation -> Pause" didn't change to "Resume" in a breakpoint:** The tooltip of the "Pause" button in the simulation toolbar did. The menu does now too.

**#1255: Start-up behaviour of neg. edge-triggering is broken:** The start-up behaviour of the component "Pulse Generator (neg)" in the Standard Library was broken. This led to FF with neg. edge-triggering producing many state changes during start-up. The root cause of the problem were Z values present at the "Pulse Generator (neg)"'s input for a long time during start-up. "Pulse Generator (neg)" now uses a pull-down resistor and a power-on reset to enforce the output to stay at 0 during start-up.

**#1257: Simulation time in status bar is not completely accurate:** The simulation time displayed during simulation at the right of the status bar was slightly out of sync. It got updated at the end of a simulation step instead of when the simulation time is actually incremented. This is why the displayed value was slightly smaller than the effective one when single-stepping through the simulation.

**#1265: Suboptimal wire layout when connecting to wire corner in "Set points" mode:** See a scenario description in the Github issue description.

**#1266: Inconsistent wire layout behaviour:** See a scenario description in the Github issue description.

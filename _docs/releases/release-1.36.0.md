---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: April 5, 2026

Besides many improvement and a couple of bugfixes, the most notable one is a dramatic improvement of the performance of the boolean equation solver used for creating circuits from boolean expressions or truth tables. Many thanks to user serotonindude for providing this improvement.

# Features

None.

# Improvements

**#1179: Avoid 'Error' output signals in ROM and LUT if address input is undefined:** If the address input A is undefined (aka "High impedance") when CS is asserted, the ROM produces an "Error" signal at output D. This creates the challenge for designers to fine-tune the timing of the signals arriving at A and CS, which is neither realistic nor desired in any way. A real ROM chip would probably just produce random outputs. Now, the user preference "Undefined gate input behaviour" (Default "Read as 0") is also userd for the ROM and LUT component.

**#1181: Use the same connection point highlighter for the destination as for the origin:** The shape of the green connection point highlighter depends on the current "Connect method":
- "Auto-layout" uses a circular shape
- "Set points manually" uses a rectangular shape
Currently, the distinctive shape is only used when starting a connection. At the destination (either a pin or a wire), the circular shape is always use.

This is now more consistent by using the rectangular shape at the connection destination if in mode "Set points manually".

**#1182: Optimize column width in text case results table:** The columns in the test case results table were all set to the same default size. Now, the size of each column is adjusted to its widest cell, while never making it narrower than the header.

**#1183: Improve performance of Boolean Equation Solver:** The boolean equation minimizer, used to transform boolean equations to circuits, had performance issues. It went slow as soon as more than 11 variables were used.
Optimized the code of the Quine-McCluskey algorithm which is used in Antares.
It can now easily handle 18 variables in reasonable time. Since the complexity of the algorithm is O(n^3) for the number of variables it still got it's limits. If more variables would be needed, one would have to use an heuristic algorithm instead, which might not find the fully minimized equations, but will do the job fine in an acceptable amount of time.

**#1184: Increased maximum number of inputs of Logic Gates to 16:** This one is related to #1183, as more variables also usually mean more inputs to the AND- and OR-Gates. So I've increased the supported amount of inputs for the logic gates from 8 to 16.

**#1185: Add labels to many components:** Some components like LED allow to specify a name that is displayed as an external label. Many components didn't yet. Now, (almost) all components allow to enter a name, which is then displayed as a label.

**#1186: Avoid 'Error' output signals in LUT if address input is undefined:** See #1179.

**#1189: Don't fill gate shapes if 'Gate Mnemonic' is enabled:** Depending on the currently selected theme, the mnemonics are hardly recognisable. Especially the bright green on the blue background of the "Winter" theme. Don't fill gate's background during simulation.

**#1191: Apply custom colors to some remaining colors:** Most components already support the "Color" property where the user can override the standard color of the current theme. Some component didn't yet. No all do.

# Bugfixes

**#1180: Error in 'Undo' after diving into subcircuit:** Editing the main circuit, diving into the subcircuit, and then executing 'Undo' could lead to an error. The undo/redo actions are now disabled if the current view is read-only, which is the case after diving into a subcircuit.

**#1187: Inconsistent state when clicking on oscilloscope probe without dragging:** Have an oscilloscope with a signal probe that is still installed in the oscilloscope. Click on the probe without dragging it, and release the mouse button. No undoable command gets created, and if you now execute "Undo", the oscilloscope might be removed, while the probe still hangs around, leading to all sorts of problems and errors down the road from here.

Additional improvement: Cancel dragging if user presses ESC.

**#1188: Error when clicking on key in input's keyboard popup during simulation:** This has been fixed.

**#1190: Mnemonic for 'Tri-state buffer' is vertically displayed:** This has been fixed.





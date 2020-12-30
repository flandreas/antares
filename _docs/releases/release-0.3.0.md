---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: December 30, 2020

Just before this very special year ends, a new Antares release is available.
Its most important new features are the "Dark Mode" (#6) and the "Break Component" (#33).

# Features

* **#6: Dark UI theme:** When using a dark Antares theme (such as "CRT"),
the UI now also uses the dark UI theme. A new dark theme "Darcula"
has been added.

* **#27: Texts don't have border or fill by default:** Texts added using the
text tool now don't have borders and are not filled by default.

* **#28: Descriptions in rectangular components:** Rectanguar components like
rectangles and circles now have a description property. The description is displayed
as a tooltip if the mouse is moved over the displayed text of the rectangle.

* **#29: Open circuit in navigator with ENTER key:** Pressing the ENTER key
in the navigator allows to open the circuit currently selected in the tree.

* **#30: Rotate ports and pins:** In addition to set the orientation of ports
(inputs, outputs and input/outputs in the circuit editor) and pins (in the symbol editor),
ports and pins can now also be rotated by 90 degrees counterclockwise using the
keyboard or the menu item.

* **#31: Menu items for switching views:** New menu items for switching between
circuit editor and symbol editor.

* **#32: Wire description and tooltip:** The author can now set a description
for wires, which is then shown in a tooltip. During simulation, the tooltip
also shows the wire's current signal.

* **#33: Break component:** Introduced a new break circuit component with one input.
If the input is asserted, the simulation is suspended if it runs in single step mode.
This can be used for example in a microprocessor circuit to implement a
"single machine instruction" mode if a breakpoint is activated whenever the
microprogram returns to address 0.

* **#34: Choose bit width in Delay component:** The author can now set the
bit width attribute of delay components.

* **#36: Draw inactive Controls as "disabled":** Controls are interactive elements
from sub circuits that are placed on the symbol of the sub circuit.
If flat simulation is used AND the sub circuit uses a script, the models of the
controls are never really updated during the simulation. Such Controls in symbols
can confuse the user, for example when the display (the initial value) 0000
as the content of a register, although this doesn't reflect the real value.
Therefore, those controls are now drawn as "disabled".

* **#37: Library folder "Frequently used"**. Both built-in libraries now
have a folder that contains frequently used built-in components such as
switch and LED as well as some basic logic gates.

* **#38: Help menu for online manual:** The menu item "Documentation" in the
new "Help" menu opens the online manual in a browser window.

# Bugfixes

* **#22: Don't highlight memory cell if CS not asserted:** If a ROM or a RAM is not selected
(i.e. the CS input is not asserted), the memory contents view now highlights
the currently addressed cell.

* **#23: Inconsistent editability of memory contents:** Memory contents can now be edited
even when opened during simulation. Don't allow to edit RAM while in edit mode
(as it is reset when simulation is started). Same editability of memory contents
in popup and in desktop subview.

* **#24: Gap between wire and OR gate with American symbol style:** This has
been fixed.

* **#25: Incorrect layout after closing main view with sub views:** When opening
a subcircuit and closing/reopening the main view, it was positioned as there
was an open subview. This has been fixed.

* **#26: Repainting errors in text components:** If the text of a text component
(or a rectangular component containing text) was larger than the surrounding box,
repainting errors occured when moving the component. This has been fixed.

* **#35: Copy/Paste in symbol editor broken:** Copy/Paste in the symbol editor
was broken with version 0.2. This has been fixed.

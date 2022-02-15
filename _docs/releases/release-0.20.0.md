---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: February 15, 2022

Besides some bugfixes, improved simulation speed, and the new "Double-Throw Switch"
component, the most awaited feature is probably #309, which allows you to define a
circuit output as "Tri-State Output", allowing its corresponding sub circuit symbol pin
to be connected to wires with other outputs.

# Features

* **#169: Double-Throw Switch:** A new component allowing the user to switch a
wire on one side of the switch to one of two wires on the other side.

* **#304: Rework Memory Editability:** The question which memory component content (ROM, RAM) can be edit by the user in which situation has been clarified and properly implemented in the code.
  - ROM can only be edited if Mode=Edit and Location = Main View
  - RAM can only be edited if Mode=Simulation, independent of Location
  - Memory content can be viewed in all dimensions
  - Memory content can be exported in all dimensions
  - Memory content can only be imported from file or cleared if editable

* **#308: Simulation Speed x2:** By optimizing the core simulation logic really for the first time and picking some low hanging fruits, the simulation speed could be increased by the factor 2. Note that due to some cache warming going on, the first run is still slightly slower
than subsequent runs.

* **#309: Connect multiple outputs of circuits with tristate pins:** Circuit outputs now have a new property "Tri-State Output".
If set, the corresponding pins in sub circuit symbols can now be connected to wires
that already contain other output pins. It is still up to you as a circuit designer to make
sure that the circuit's logic doesn't produce conflicting signals on such wires.


# Bugfixes

* **#303: Opening ROM in Circuit results in Error:** When opening a ROM component
for editing memory cells resulted in an error if the ROM wasn't part of the top-level
circuit. This has been fixed, along with some other issues with editing memory contents.

* **#310: Error in selection-aware actions after "Undo":** Actions like "Delete" or "Rotate"
didn't update their enabled state when the user undid any action. Execution such actions
could lead to an error if nothing was selected in the circuit.

* **#311: Reduced sensitive area at sub circuit pin:** In certain situations, the sensitive area at a sub circuit's pin was reduced, making it more difficult for users to connect these pins with wires. The green connection highlighter didn't exactly appear at the location the user was expecting it. The problem occurred when deleting wires that were connected to sub circuit symbols.

* **#313: Wires without asserted signal are initially 0:** Wires without asserted signals
are now set at simulation start to "undefined".

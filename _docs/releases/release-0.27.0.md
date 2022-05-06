---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: May 6, 2022

Release 0.27.0 fixes a lot of smaller bugs and brings a couple of minor usability features, especially regarding moving components. Also check out the new ["Key Binding"](/user-manual/english/misc/key-bindings) documentation page.

# Features

* **#350: Orthogonal Move:** Move objects orthogonally when pressing SHIFT while dragging with the mouse.

* **#355: Disable Snap while Dragging:** Temporarily disable snapping to grid/components while dragging components if the user presses ALT.

* **#356: Key Binding Documentation:** A new page in the user manual lists relevant key bindings for the most relevant user interactions, both on MacOS and on Windows.

* **#370: Involve component snapping when creating wire junctions:** If component snapping is enabled, involve it when the user creates a new wire junction off an existing wire. This helps e.g. when branching horizontal wires from a long vertical, where each horizontal wire is to be connected to a destination component.

* **#372: Choose pin positions of Terminal component:** Let the user choose whether the pins of a terminal component are located at the left or the right edge of the symbol. Pins at the right border are better suited to combine a terminal with a keyboard component.

# Bugfixes

* **#352: Label change when execute simulation:** In subcircuit symbols with more than one label, some labels can unexpectedly change during simulation.

* **#353: Textbox title horizontal alignment resets to "Left" on reopening circuit:** A bug in the save logic of the textbox component prevented the property "Horizontal Alignment" from being properly saved.

* **#354: Renaming circuits doesn't update already placed circuit names:** Renaming a circuit that is a subcircuit in another Circuit didn't update that subcircuits name, and its tooltip
still showed the old name.

* **#357: Omit dive animations on Windows (no CMD key):** On Windows, you can now press CTRL to omit the animation when diving into a subcircuit with double-click, or when returning from the subcircuit by clicking on the breadcrumb.

* **#358: Error when starting simulation with empty oscilloscope:** After adding an oscilloscope to a circuit and starting the simulation, an error occurred if the oscilloscope didn't have at least one signal row.

* **#359: 'Issues' view not cleared when another circuit is opened':** Issues belong to the current main circuit. Therefore, clear the contents of the issues view (e.g. errors from the last simulation run) when another main circuit is opened.

* **#360: Remove 'Check' function from ROM 'disassembler' property':** The disassembler property is a script property, but the type of the script is a collection of regular expressions and not an Antares DSL script. The default check functions is based on a parser for the Antares DSL syntax. Checking RegEx syntax is not yet supported and probably never will be. Therefore, the "Check" button has been removed from the "disassembler" script property dialog.

* **#361: Connection tool sticks to pins:** When creating a new wire towards a component with multiple output pins, and dragging the destination of the new wire onto one of these output pins, the green connection highlighter wouldn't move to another pin of the same component unless the user moved the mouse outside the combined bounding box of all pins.

* **#362: Selected components should not be drawn below non-selected components:** This seems to be a regression; earlier version did draw selected components above non-selected ones. Probably changed while trying to avoid that selected subsystem rectangles cover everything else. This behavior was particularly annoying when selecting and dragging wires.

* **#363: Error when selecting text in non-editable circuit:** When selecting a text component in a circuit the user does not own (and the circuit is therefore non-editable), an unexpected error occurred.

* **#364: Missing authorization enforcement of drag&drop in explorer:** Antares did not yet enforce authorizations of a user's drag&drop operations in the explorer tree. As a consequence, a user could move a circuit from her private project into the standard library, which should not be allowed, because the standard library is read-only for end users.

* **#365: Wrong sort orter of 'Ports' in symbol editor tree:** After opening a circuit, the sort order of the ports in the folder "Ports" of the container editor tree is wrong. It should be in the order the ports have been added to the main circuit. Before, it was in reversed order.

* **#366: Property 'Style' of wires not preserved with copy/paste:** When copy/pasting a wire with style "Block", the pasted wire still has style "Line". The same also hold for all other properties of a wire that apply to all segments of that wire, such as 'Custom Color'.

* **#367: Changed port description not available in referencing circuit until restart:** This has been fixed.

* **#371: Port lines of subcircuit symbols are drawn above symbol shapes:** This is apparent during simulation, where wires can be drawn with signal colors. The behavior should be the same like with built-in components, where wires never overlap border shapes of symbols.

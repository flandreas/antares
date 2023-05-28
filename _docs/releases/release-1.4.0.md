---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: May 28, 2023

Various bugfixes and new features.

# Features

* **#524: Component 'Real Switch' is too small:** Compared to other components, the real switch 
  was too small and has been made larger. If you use it in your circuit, you will have to move it 
  slightly to re-layout connected wired.

* **#545: CAD-style selection:** You can now press the ALT key when selecting components with 
  the selection tool to select components that are only partially contained.

* **#547: Usability of disabled 'New Circuit' action:** In certain situation, the "New Circuit" 
  actions where disabled, e.g. when there were unsaved changes. This could be confusing to users 
  who wanted to create a new circuit, but didn't understand why the "New Circuit" action was 
  disabled. The action is now always enabled, and it shows a corresponding dialog when one of 
  the conditions is not met.

* **#553: Localize open circuit in explorer:** Provide a button in the explorer that localizes the currently focused circuit in the explorer's tree. Localization is done by scrolling to the corresponding tree node, thereby auto-expanding folders, and possibly selecting the tree node.

* **#554: Rotate components in other direction:** You can now use ALT+CMD+R to rotate components in reverse direction.

* **#556: Rotate/mirror 'Curve' components:** This is especially useful for curves that are 
  part of custom subcircuit symbols.

* **#559: Enable 'Open in new window' also during simulation:** The context menu "Open in new 
  window" on explorer tree nodes and subcircuit symbols in open circuits is now also enabled in 
  simulation mode.

* **#561: Improve demultiplexers in 'Plexer' standard library:** Added execution scripts for 
  faster execution, 'Data input' property on AND gates, and "Representation during simulation" 
  property to display data flow path during simulation.

* **#570: Display tool usage help in status bar:** Different tools require different state-dependent actions from the user. Display helping information in the toolbar about the next action of the user.

* 
# Bugfixes

* **#543: ANSII-style resistor is drawn in 'figure' style color:** It is now drawn in 'line' 
  style color.

* **#544: Not working animation and changes in branches in slow simulation:** Components that 
  can be clicked on during simulation are now drawn as 'disabled' while they are waiting for 
  their re-simulation.

* **#546: Panning cancellation results in scrolling:** When using alt + scroll to pan the screen 
  and letting go the alt key while the scroll has not yet finished, it started zooming until the 
  rest of the scroll has finished. This has been fixed.

* **#551: Wrong positioning of gate pin in p-type transistor (Bulk symbol):** The gate pin is 
  now aligned with the source pin for p-type transistors.

* **#552: Wrong signal colours of S and D pins in p-type transistors:** During simulation, 
  source and drain pins of p-type transistors were painted in the signal colours of the opposite 
  pin. This has been fixed.

* **#558: Missing root node icon in 'Hierarchy' tree:** This has been fixed.

* **#560: Missing circuit name negation replacements:** In certain location such as the explorer 
  tree view, circuit name negations using the !() notation have not been replaced by overlines. 
  This has been fixed.

* **#562: Error while stopping simulation of circuit with generic parameters:** This has been fixed.

* **#563: Wire arrow head can overlap external pin name labels:** This has been fixed.

* **#564: Wrong decoder behaviour in flat simulation:** Due to bugs in the execution scripts, 
  the decoders didn't calculate the correct output.

* **#566: Panning with ALT + scroll gesture doesn't work on Windows notebook trackpad:** ALT on 
  Windows transfers focus to the main menu. Changed modifier for Windows to CTRL.

* **#567: Cannot mirror custom symbols containing 'Circuit Symbols':** If a custom subcircuit 
  symbol contained one of the new "Circuit Symbols" in the container editor, such as "AND" or 
  "OR" shape, the subcircuit symbol coult not be mirrored. When trying to set the "Mirror 
  Horizontally" property of such a subcircuit, the error message "Cannot mirror horizontally" 
  appeared in red text. The same happened when trying to mirror vertically. This has been fixed.

* **#568: Polyline tool is 'dead' after cancelling polyline creation with ESC:** This has been 
  fixed.

* **#569: Properties window is not updated on undo/redo:** When changing a property of a 
  selected component and then execution "Undo", the properties window still showed the changed 
  property. The properties window is now updated when component change their properties due to an 
  "Undo" operation.

---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: July 21, 2022

This release is a pure bugfix release that fixes some important bugs, especially a
particularly severe one in the undo/redo system, and a bug that rendered moving
items within the explorer tree unusable.

# Bugfixes

* **#369: Ctrl+Z sometimes changes things that it shouldn't:** Due to a severe bug in the undo/redo system, undoing and redoing actions could lead to unexpected behaviour, distorted circuits or even errors. This has been fixed.

* **#424: Wire layout gets distored when creating junction:** If a wire leading to a south-oriented input pin was split by creating a junction, the layout of the remaining part of the split wire got distorted. This has been fixed.

* **#425: Error in undo/redo of moving wire segments:** Depending on the scenario, a bug in the undo/redo code for moving segments could lead to an error, e.g. when ALT-pressing on a wire and immediately releasing the mouse button (i.e. clicking on a wire with ALT pressed) after a wire segment has been moved.

* **#426: Cannot copy/paste subcircuit with edited symbol:** If a subcircuit whose symbol has been edited in its host circuit using "Edit Symbol" (popup menu) and then copied to the clipboard, an error "Can't paste content from clipboard" was displayed when trying to paste it.

* **#427: Custom subcircuit label disappears if subcircuit has custom symbol:** If the symbol of a subcircuit has been edited within its host circuit using "Edit Symbol", and the symbol also has a custom label set in the properties of the subcircuit, that custom label disappeared if the host circuit is reloaded.

* **#428: Moving items in explorer tree doesn't update tree:** The items were moved on the persistence level, but the tree wasn't updated after the move. The new tree structure wasn't updated until the project/library was reloaded.

* **#430: Properties window disabled after stopping simulation:** After the simulation has been stopped and Antares has returned to edit mode, the properties window showing the circuit properties was disabled (read-only). The user had to select a component and then click on the background to make the circuit properties editable.

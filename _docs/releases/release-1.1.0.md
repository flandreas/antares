---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: October 9, 2022

Besides the usual bugfixes, release 1.1.0 some new features like the new "Power-On Reset" component or a welcome dialog with a link to our new introduction YouTube video. You also find a link to this video on our ["Quick Start"](/docs/quick-start/index.html) page.

# Features

* **#453: Show label of open subcircuit view in breadcrumb entry:** When opening a subcircuit in an additional view, the view has a breadcrumb at its top border, with an entry showing the type of the subcircuit, e.g. "Register 16 Bit". With complex circuits like CPUs, there are many sub circuits of the same type, but with different meanings, often denoted by labels. The breadcrumb entry now also displays the label.

* **#455: Menu shortcuts for "Soft Breakpoints" and "Single-step mode":** When debugging complex circuits like CPUs, you often use the "Break" component to fast-forward to critical points in time, and then switch on "Soft Breakpoints" to trace individual signals until the investigated problem occurs. There is now a new menu item "Single-step mode" and an menu shortcut for "Soft Breakpoints".

* **#467: "Active" property for 7-segment and 16-segment displays":** Determines whether inputs of segment displays are "active low" or "active high".

* **#468: New "Power-On Reset" component:** A new component in the standard library with one output that goes to 1 immediately after simulation start, stays there for its propagation delay duration (configurable), and finally goes back to 0 to stay there.

* **#471: Search field in project/library dialogs:** Added a search fields in the dialogs where the user opens a project or a library.

* **#476: User preference for separate color for non-zero multi-bit signals:** During simulation, Antares currently draws non-zero multi-bit signals in a different color (gray) than zero multi-bit values (white with dark themes or black with light themes). The frequent change between white and gray colors during fast simulations could be perceived as too "flickery". A new user preference has been added to disable this behaviour.

* **#477: Show "Welcome" dialog when starting Antares for the first time:** In particular, this new dialog contains links to useful introduction information, in particular a link to the new introduction YouTube video.

* **#480: Tunnel name dropdown menu with all existing names:** Added a dropdown menu to the Tunnel name property that contains all distinct names of all tunnel components in the current circuit.

* **#481: Expand Cmd-selection of wire across tunnels:** When Cmd-selecting a wire, which selects all wire segments of the entire net, the resulting selection now also includes tunnels and their wires.

# Bugfixes

* **#466: Error when quitting Antares with open main Library:** When quitting Antares while the main open library is a library and not a project, an unexpected error occurred. This has been fixed.

* **#469: "D Latch" in standard library stores inverted value":** If D is 1, Q was 0 instead of 1. This happened because the output line crossing has been copy/pasted from the edge-triggered D flip-flop, and has now been fixed. Breaking change.

* **#470: Error when executing menu "Use Cases -> Duplicate":** This menu should have only be enabled if a use case in the "Use Cases" sidebar was selected. When executed without a selection, an error occured. This has been fixed.

* **#472: Expression in circuit generated from truth table contains illegal output name:** When creating a circuit from a truth table, Antares also creates an execution script in Antares DSL for the generated circuit, which is used in shallow simulation mode. If the circuit contained a negated output name such as "!Q", the generated script contained an assignment of the form "not Q = ...", which is syntactically invalid. This has been fixed.

* **#478: Circuit not closed if contained in library being un-imported:** If the currently open circuit was part of a an imported library, and that library was un-imported from its importer, the circuit should've been closed, but wasn't. This has been fixed.

* **#479: Un-importing library prevented by standard library references:** Antares now replaces indirect imports to standard libraries with direct imports if an intermediate custom library is un-imported.

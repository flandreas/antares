---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: May 4, 2021

The new release 0.5.0 is characterized by a complete revision of the mechanisms for signal propagation in circuits. This revision was necessary to support true bidirectional splitters. The standard library now contains the new component "Bidirectional Splitter", which is useful in bus applications.

In this context, the following additional changes were made.

**Propagation delay of pure net components**

All pure network components (wires, splitters, combiners, subcircuit ports) now have propagation delay 0, i.e. signals are propagated in these components during the current simulation cycle.

**Behaviour in case of signal conflics**

Previously, the simulation was stopped when Antares detected a conflict on a net during signal propagation. Now the simulation is only paused so that the user can analyze the current state of the simulation and find the cause of the conflict. In addition, it is now possible to define even more finely how Antares should behave when a conflict occurs, including the definition of a bus contention "grace period" within which signal conflicts are ignored.

See the [User Manual](/user-manual/english/simulation/simulation.html) for a description of these new features.

**Signal conflict info in wire tooltip**
The wires of a net for which Antares has detected a conflict during signal propagation is still displayed in red. Additionally, the wire's tooltip now contain detail information about the conflict.

**Displaying "undefined" states**
Wires are now only displayed in blue if all bits are undefined. Previously it was sufficient if at least one bit was undefined. Components such as inputs/outputs that display signals as HEX characters used to always display "Z" if at least one bit of the nibble was undefined. Now "Z" is only displayed if all bits are undefined. If at least one bit, but not all bits of the nibble are undefined, "z" is now displayed (a small "z").

# Features

* **#57: Bi-directional Splitters/Combiners:** Antares now contains a new build-in component "Bi-directional splitter" that supports true bi-directional signal propagation in both directions. The standard library has also been extended with a new "Bus Transceiver" (both as 4 bit and 8 bit variants) that makes use of the new bi-directional splitter.

# Bugfixes

* **#64: Documentation: Symbol for Logic Gate NOT is wrong in overview:** The former version showed a NOR gate instead of the NOT gate.

* **#70: Wrong 'undefined' signals at startup:** When starting the simulation, various components like splitters and circuit ports showed an initial 'undefined' state when they really shouldn't have. This has been fixed along the reworking of the signal propagation algorithms.

* **#71: Change RAM cell values during simulation:** Various issues have been fixed that occurred when interactively changing the value of a RAM cell during simulation.

* **#72: When deleting all wires leading to a junction, the junction can't be deleted anymore:** This bug occurred only when deleting wires using the context menu.

* **#73: Error when changing port type in subcircuit:** An unexpected error occurred when dvining into a subcircuit whose port type has been changed in the meantime.

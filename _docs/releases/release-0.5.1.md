---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: May 16, 2021

Fixes some critical bugs.

# Bugfixes

* **#74: Missing special chars in Explorer Properties title:** Circuit names
containing parenthesis were displayed without the parenthesis in the title of
the properties panel.

* **#77: Wire is accidentally disconnected:** When moving small components like
constants, connected wires were often accidentally disconnected. Reconnecting
requires now pressing ALT, and the reconnect tool shows a different "reconnect"
highlighter.

* **#78: Faulty wire/component connections lead to loss of everything created afterwards:**
A severe bug in the undo/redo system could lead to saving an old snapshot state instead of the current drawing.

* **#82: Simulation stopped working altogether:** When asserting an undefined address A to
a clocked RAM, an error occured when asserting the CLK input, leading to an instable state
of the simulation.

* **#84: Bus Transceivers outputting wrong values:** A severe bug in the new
bi-directional splitters could result in wrong values being produces by various components,
for example the new "Bus Transceiver" component that uses bi-directional splitters.

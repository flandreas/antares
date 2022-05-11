---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: May 11, 2022

Release 0.27.1 fixes two severe bugs introduced with 0.27.0, especially
the unexpected error that could occur when dragging components within a circuit.

# Bugfixes

* **#375: Error while dragging components:** In certain situations, an unexpected error could occur when dragging components within a circuit.

* **#377: Error while diving into subcircuit with running signal flow animation:** In
certain situations, an unexpected error could occur when diving into a subcircuit
while signal flow animations were running in the main circuit.

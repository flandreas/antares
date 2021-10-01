---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: October 1, 2021

This bugfix release fixes a severe bug in how bi-directional ports of
subcircuits behave during simulation.

>**NOTE:** The fix for this bug required changes that might influence the
timing behaviour of existing circuits. For example, we had to do some
changes in the example project "Tanenbaum Microcomputer" to make it work
again.

It was also necessary to adjust the propagation delays of the circuits
in Antares' "Standard Library". These propagation delays come into play
when using "Shallow simulation" mode.

The simulation model should now be more accurate and closer to reality,
even if this could mean that you have to adjust your existing projects
regarding timing aspects.

# Bugfixes

* **#227: Wrong signals from bi-directional subcircuit ports:** When a
bi-directional port of a subcircuit has received a defined value from outside,
and this value has then been replaced by "undefined", this port didn't
react any more to non-undefined signals from the subcircuit.

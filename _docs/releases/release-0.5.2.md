---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: May 20, 2021

Fixes some critical bugs.

# Bugfixes

* **#95: How to make diagonal wires like in the SR latch:** A severe bug in the
properties system prevented the user from displaying properties of
wires (in the circuit editor) and ports (in the symbol editor), thus
disabling an entire part of Antares' functionality.

* **#98: User Folders cannot be renamed:** Due to a bug in the authorization
system, a user could not change the name of a folder in his own project.

* **#103: How can the simulation cache be cleared?:** The probe component
kept and used state information from previous simulation runs. This has
been fixed.

---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: October 4, 2021

This bugfix releases fixes a severe bug in the signal propagation system
and a UI-related bug that could prevent circuits from displaying any
simulation state.

# Bugfixes

* **#229: Circuit doesn't show simulation state:** Circuits didn't show
their simulation state (wire colors etc) if a subcircuit had previously
been opended and closed again.

* **#227: Wrong signals from bi-directional subcircuit ports:** A bug in the signal
propagation prevented signals from subcircuits to propagate
through bi-directionals pins even if the signal from outside was undefined.

---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: June 27, 2022

Release 0.29.2 fixes a severe bug introduced in 0.28.0 related with the new auto-generation of circuit symbols. The bug could lead to loosing
the blue-crossed origin indicator or even to corrupt circuit files.

# Bugfixes

* **#401: Auto generating symbols incompatible with alredy existing symbols:** Upgrading to a new Version with auto-generating Symbols leads to Crashes when working with Symbols that have been created in previous Versions. Maybe this is related to the Blue Circle with a Cross that doesnt exist anymore in Antares Versions > 27.

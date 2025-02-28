---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: February 28, 2025

Various bug fixes.

# Bugfixes

**#882: Crash when calculating propagation delay in 1.16.0:** An unexpected error occurred if the user opened the dialog "Calculate propagation delay". This has been fixed.

**#883: Crash when trying to delete the folder of a newly created library:** This has been fixed.

**#884: With no project open, viewing global tunnels causes a crash:** This has been fixed.

**#885: Crash when clicking the edit button on a blank bit width property:** This has been fixed.

**#886: Error when parsing boolean expression:** Parsing certain expressions like "O2 = A" could cause an unexpected error due to a missing translation that report an illegal syntax. This has been fixed.

**#888: Error when creating circuit from truth table:** When creating a circuit from a "Truth table" desktop object, an unexpected error occurred. This bug was introduced in release 1.17.0 with feature #333 that changed the way desktop views are opened.

**#889: macOS .dmg not correctly signed:** macOS installer images were not correctly signed anymore since the last major release, leading to a warning while trying to install on macOS, or even refusal to install on macOS Sequoia. This has now been fixed with this release.

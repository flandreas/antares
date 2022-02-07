---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: February 7, 2022

Besides the new feature "Reconnect wire to existing wire", this release fixes
two severe bugs.

The first performance bug prevented users from simulating very
large and deeply nested projects, because loading and linking of lots of subcircuits
prior to simulation start seemingly stalled Antares. This has now been fixed: A test project
with almost 100'000 sub circuit instances now takes about 10 seconds to start
on our test machine.

The second severe bug in the "ROM Contents View" could lead to data loss when
manually editing ROM data cells. This has been fixed as well.

# Features

* **#5: Reconnect wire to existing wire:** Antares now allows to drag the open end
of a wire onto another existing wire to create a junction.


# Bugfixes

* **#297: Exporting ROM content and reimporting doesn't work:** ROM content data
sometimes couldn't be exported and imported again. Even worse, due to the ROM content
window not correctly using the undo/redo system, any manual changes of ROM content
might not have been correctly stored.

* **#299: Typo:** A small typo in the german translation for "Concentrator" has been
fixed.

* **#300: External pin labels not correctly rotated:** The label of a component pin whose label position is "Externally" was in some situations not correctly rotated when the component was rotated.
*
* **#302: Bad performance when starting simulation of complex circuits:** Starting
simulation of complex and deeply nested circuits could take so long that those
circuits effectively couldn't be used for simulation. In one very large test project,
that time was brought from "infinite" (meaning hours) down to 10 seconds.

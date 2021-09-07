---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: September 7, 2021

Besides some bug fixes, release 0.12.0 also contains some features you have
been waiting for, especially colored subcircuit symbols and the possibility
to move folders within a project or library.

And: You can now open multiple circuits at the same time for viewing and simulation.

# Features

* **#52: Gate symbol types in library tree:** The logic gate symbols in the
library tree now change according to the symbol style setting in the
user preferences (ANSI/IEEE).

* **#161: Order of Folders in Explorer:** You can now move
folders in the explorer using drag&drop. Note that moving a folder from
a project to the library (or vice versa) is still not yet supported.

* **#220: Open circuit in additional windows:** You can now open multiple
circuits from the project/library in additional windows (only for viewing and
simulating, not for editing). This features was mainly necessary for the upcoming
Antares web version, where it is necessary to have multiple independent
simulation contexts within the same web page, but it might also be useful
in Antares Desktop.

* **#221: Improve Tooltip Placements:** Prior to this release, tooltips on
circuit components have always been placed at the bottom right side of components.
If components where located near the right border of the view, these tooltips
were only partially visible. The tooltip placement algorithm has been improved
to make tooltips always entirely visible.

* **#225: Choose color of subcircuit symbol:** It is now possible to change
the color of a subcircuit's symbol you've added to your circuit.

# Bugfixes

* **#90: Changed label of subcircuit is not read:** A bug prevented Antares
from correctly overwriting and saving/loading custom labels on subcircuit
symbols. This has been fixed.

* **#164: Explorer side bar width not correctly restored:** Antares did sometimes
not correctly restore the widths of the sidebar areas (Explorer, Usecases..),
resulting in the drawing area sometimes not being accessible any more.
This has been fixed.

* **#184: Folders Duplicating and Corrupting Circuits:** A severe bugfix in the
core system delivered with one of the previous releases, as well as additional
changes in the folders system should now prevent this bug from occuring again.

* **#222: 1-bit Random component always low:** A bug in the Random component
always produced the output "1" if its bit width was set to 1 bit. This has been
fixed.

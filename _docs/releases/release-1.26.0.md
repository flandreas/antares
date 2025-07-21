---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: July 21, 2025

Maintenance release.

# Features

None.

# Improvements

**#980: Display 'Pin ID' in tooltips also over named pins:** In the former version, Antares included the ID a component's pin in the tooltip only if the pin was unnamed. Pin IDs are needed when you write a scenario condition that depends on the current value in a component's pin.

**#981: Display 'Deny' indicator when trying to create illegal wires:** For example, when trying to create a net connecting multiple outputs. Display a red cross over the target pin instead of the green connection point highlighter while dragging the wire endpoint.

# Bugfixes

**#983: Exporting memory contents (LUT, ROM etc.):** An unexpected error occurred after selecting the target file with the file chooser. Introduced with 1.25.0. This has been fixed.

**#984: Error in redoing 'Join wires':** In certain situations, undoing a 'Join wires' action could lead to an error. This has been fixed.





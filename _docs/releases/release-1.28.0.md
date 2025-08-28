---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: August 28, 2025

Maintenance release.

# Features

None.

# Improvements

None.

# Bugfixes

**#993: Error when cancelling 'Create polyline':** The same problem also occurs with the other tools like "Rectangle" etc. This has been fixed.

**#995: Signal flow animations not properly cancelled when simulation is stopped:** Even after simulation is stopped, new signal flow animations were started behind net junctions. This could be observed with a very small simulation speed in a circuit like "Shifter 8 Bit" which has a cascade of junctions. Could lead e.g. to redrawing errors in edit mode.

**#996: Error when connecting components in analog circuit:** When connecting components in analog circuits, an error occurred due to the "Auto adjust bit width" trying to get involved, although it shouldn't in analog circuits.

**#997: Error in analog simulation with 0 resistance:** An analog circuit containing a resistor with 0 Ohm produced an error during simulation.

**#998: Project property 'Owned by me' isn't stored anymore:** The property "Owned by me" in the project/library properties dialog wasn't stored if you selected the checkbox and close the dialog with OK. This bug was introduced while fixing #990.

**#999: Renaming project/library doesn't enlarge node in explorer tree:** This has been fixed.

**#1000: Tooltip 'Press ALT to create junction' on wire terminator circle:** Don't show this tooltip on the wire terminator circle.



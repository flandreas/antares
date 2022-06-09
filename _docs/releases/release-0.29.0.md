---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: June 9, 2022

Starting with this release, you can now search for components in a circuit. Press
Alt-Ctrl-F (or Alt-Cmd-F on Mac) to display the search bar. If you enter a search term characters in the search field, Antares selects the components that match that search term.

![Search](/assets/images/user-manual/circuits/search-in-circuit.png)

See the new section ["Searching in Circuits"](/user-manual/english/circuits/circuits) in the user manual for a more in-depth description of this new feature.

Also worth mentioning are the new "Transmission Gate" component and a new feature in the tunnel component allowing you to indicate signal flow directions in tunnels.

> :warning: **Breaking Change #392**: The 'D Flip-Flop PRE/CRL' circuits in the standard library have been changed to edge-triggered behaviour. Adjust your circuits if they use these components.

# Features

* **#387: New component 'Transmission Gate':** Added a new component "Transmission Gate" to the "Standard" Library. The component is not a built-in component, but a sub circuit consisting of an NMOS and a PMOS transistor working in parallel. The custom symbol consisting of 4 triangles. The circuit supports a generic parameter for bit width.

* **#388: Property for controlling external label distance of pins:** External labels could overlap a symbol's box if the border of the box doesn't only consist of horizontal or vertical lines, such as in multiplexer shapes or the new transmission gate symbol. Introduced a new pin property to be used in the symbol editor to request a larger label distance.

* **#393: Search in circuit:** If the user presses Alt-Ctrl-F (or Alt-Cmd-F on Mac), Antares displays a search fields at the top of the circuit view. With every key stroke, Antares executes a search in the circuit and selects the matching circuit elements.

* **#394: New menu 'File->New Circuit':** Added a menu item for creating a new circuit to the "File" menu. Only enabled if the currently selected explorer item is a directory (project, library, folder).

* **#395: Choose signal flow direction in tunnel components:** With the arrow-shaped tunnel symbol, the pin was always located at the tip of the arrow. This might lead to some confusion when used for outgoing signals - the arrow seemed to imply an incoming signal. Antares now lets the user specify the signal direction of a tunnel component (input, output, input/output). This rotates the arrow triangle accordingly, or draws a bi-directional arrow head in case of input/output signal flow direction.

# Bugfixes

* **#383: Pull resistor doesn't respect property 'Color':** Fixed.

* **#384: Discarded changes can stick around for some time:** If the user closed a circuit and confirmed that he DOESN'T want to save the changes he's made, these changes could nonetheless stick around for some time in the running application. For example, if he then opened another circuit, those unwanted changes could be reflected in references to the changed sub circuit. This was only a problem in cached heap data; persistent data was not affected.

* **#385: 'Pause on Issue' doesn't pause, but activates 'Single-step Mode':** This has
been changed such that the pause/resume toggle button is selected and the user visually sees that the simulation is paused.

* **#386: 'Pause Simulation' remains active across multiple simulation runs:** With certain scenarios, this could lead to confusing the user. The simulation is now
never paused when simulation is started.

* **#391: Controls in mirrored symbols are not correctly positioned:** Fixed.

* **#392: 'D Flip-Flop PRE/CRL' in standard library missed edge-triggering:** Both
'D Flip-Flop' components with PRE/CRL input (positive, negative) were missing edge-triggering behaviour. This has been changed. This is a breaking change if you are using these components in your circuits.

* **#396: Edge triggering annotation doesn't use symbol's custom color:** Fixed.

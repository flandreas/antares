---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: March 18, 2021

Besides many smaller features and bugfixes, the 0.4.0 release contains in particular the new quasi-analog components "Pull Resistor", "Transistor", "Ground" and "Power", as well as new icons with higher resolution.

# Features

* **#39: Preference setting for switch propagation delay:** A new prefence setting allows to configure the default propagation delay of switches.

* **#43: Improve unexpected error windows:** The dialog now contains a link to the GitHub error tracker and an button for copying an error description to the system clipboard, which can then be pasted into a bug issue description.

* **#45: Sharper icons:** All icons have been reworked and now contain higher resolution variants to support HiDPI displays. Special thanks to JanisFle for providing all these new icons!

* **#50: Pull resistor:** New component type "Pull Resistor" introduced. See the user manual for a description.

* **#51: Transistor:** New component type "FET Transistor" introduced. See user manual for a description.

* **#55: Ground and Power:** New component types "Ground" and "Power" introduced. See user manual for a description.

* **#56: Check for updates:** When starting Antares, it now makes a HTTP GET call to the Antares website to check if there is a new version available, and shows an info dialog if so. The user can choose to ignore this version, which avoids this dialog on the next start.

* **#61: Make circuit InOut "floating" by mouse click:** When interacting with circuit inputs during simulation, the user can now set a "Z" state by holding the ALT key while clicking with the mouse, or by entering "Z" on a focused input digit.

* **#62: Measure eff. clock frequency:** Clock components now track their effective frequency during simulation and display it in the tooltip.

* **#63: Direction annotation in Splitter/Combiner:** The splitter and combiner components look quite the same, which can be confusing, especially when they are rotated. To help distingiush them, they now contain a small arrow annotation that show the signal flow direction.

# Bugfixes

* **#40: Default light color property isn't applied:** The circuit's "Default light color" property wasn't correctly applied to its light emitting components.

* **#42: Error when starting simulation:** An unexpected error could occur when
* starting the simulation while a component containing "controls" was still selected.

* **#48: Unexpected error when dragging wire:** Due to a bug in the wire layout algorithm, an error could occur when dragging wire segments so that wire segments receive length 0.

* **#49: Properties not visible with intial settings:** The default sizes of parts of the workbench window were such that the property panel was not visible, leading to confusing users. When Antares is started for the first time, the application window now occupied the entire screen space.

* **#53: Unexpected error when creating a new project:** Due to a bug in the multi-language system, an error occured when creating a new project.

* **#54: Cannot connect 2 tri-state buffer outputs to the same net:** Antares didn't allow to connect the outputs of 2 tri-state buffers to the same net. This has been fixed.

* **#58: Comparator 32 Bit should be labeled Comparator 8 Bit:** Fixed.

* **#60: Cannot branch off wires from existing wire:** Due to a rounding problem, Antares did not always correctly recognize horizontal or vertical wire segments, which is a prerequisite for branching off new wires. This has been fixed.

---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: July 12, 2022

Besides the usual bugfixes, release 0.30.0 also contains a couple of interesting new features.

![New features](/assets/images/release-0.30.0.png)

The new standard library component "Wire Tab" allows to to extract single bits from a bus. Much like a splitter, but lighter, and always bi-directional.

The probe component in the standard library has now options to configure a fixed point representation of a digital signal. This can be useful when developing arithmetic circuits.

There also some improvements in dark mode support on all platforms.

> :warning: **Breaking Change #419**: The behaviour of "Multiplexer n Bit" with undefined signals has been changed. Adjust your circuits if they use this component.

# Features

* **#399: Dark mode splash screen:** In the previous version, Antares always displayed a splash screen with white background. It now displays a dark splash screen if host OS runs in dark mode.

* **#402: Extract single bit from bus:** The new standard library component "Wire Tab" allows you to extract single bits from a bus. Much like a splitter, but lighter, and always bi-directional.

* **#405: Always draw last timeline tick in oscilloscope:** Antares used to draw only  timeline ticks (e.g. saying "5" for 5 nanoseconds) if there was a signal change in the first channel. This could lead to situations where there is only a single timeline tick, giving the user no chance so the the timing scale. The timeline mark at the end of all channels is now always drawn, even if there is no signal change in the first channel.

* **#407: Select imported project in 'Project' dialog list:** When importing a project into an Antares installation that already had many projects, the imported project wasn't selected after importing, giving the user a hard time to find it in the list in order to open it.

* **#408: Own imported projects:** When you imported a project owned by somebody else, ownership was NOT transferred. The imported project was still owned by its author. You could view and simulate an imported project, but you couldn't change it. This was to prevent accidental changes of somebody else's project, especially if the other person still evolves his project and you plan to re-import newer versions of the project. However, if a user is aware of this situation, he might want to edit the imported project nonetheless. The is now an action in the project properties dialog to change ownership of a project.

* **#411: Fixed point Qm.n format visualisation:** It would be nice if there would be a Probe to make Fixed-Point Formats readable. So the User has to choose the Input-Bitwidth and has to set m and n and the Probe converts the hex-Value to a readable float-Value.

* **#415: Right click on side bar items opens menu of the currently selected item instead of the item clicked:** Right click on side bar items now also selects the items and shows the popup menu of this item.

# Bugfixes

* **#397: Light title bar despite macOS dark mode:** Even if Antares was running on macOS with "Dark Mode" enabled, the title bar was displayed in light appearance. This has been fixed.

* **#398: Missing Antares icon in installer window:** The installers for Antares displayed the default Java Duke icon instead of an Antares icon. This has been fixed.

* **#406: Keys in input keypad popup don't work any more:** When clicking on a digit in a input component (decimal representation) to display the keypad popup, and then clicking on the keys to enter values, those values were not properly consumed as input signal values. This has been fixed.

* **#410: Property validation error can prevent saving changes:** Under certain circumstances, property validation errors were not properly handled and could cause corruption of the undo/redo system, resulting in the undo/redo system refusing to accept any more changes, and the user would not be able to save any further changes. This has been fixed.

* **#412: Wrong simulation in didirectinal splitter with unconnected pins:** Signals passing through a bi-directional splitter in one direction could reappear after signals passed through the opposite direction, if pins were unconnected. This has been fixed.

* **#413: Error when choosing style "Block" on non-orthogonal wire:** This has been fixed.

* **#414: Circuit input/output doesn't return to 'undefined':** If the topology of a wire changed (e.g. due to a real switch being opened), a top-level circuit input/output didn't properly return to "undefined" Z state. This has been fixed.

* **#417: Vertical sidebar tabs sometimes become horizontal:** The implementation of the vertical sidebar tabs have been completely reworked. Please report back if the problem should still appear.

* **#419: Multiplexer n Bit works differently than other multiplexers:** n Bit Multiplexer output Z when Z or no inputs are connected, while regular multiplexers output 0. This has been fixed. n Bit Multiplexer now behave like the fixed bitwidth versions.

* **#421: Handles of wires with layout "None" are barely visible:** Under certain circumstances, the handles of wires with layout "None" were displayed with an arbitrary stroke. This has been fixed.

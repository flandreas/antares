---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: November 24, 2023

Besides many bug fixes and some minor new feature, the main feature of this release is the possibility to export an Antares circuit (and its sub circuits) to VHDL. While exporting, you can also generate a VHDL test bench from one of the circuit's test cases.

Note that VHDL export is still in experimental mode. It has been tested with a variety of circuits from Antares' standard library, and the generated files have been successfully processed with "ghdl" and "gtkwave" (on macOS), but there will still be bugs and missing features. Give it a try and report back issues you've encountered while using this feature!

See the corresponding chapter in the ["User Manual](/user-manual/english/circuits/vhdl-export) for a description of how to export your circuits to VHDL.

# Features

* **#510: VHDL Export:** Export an Antares circuit as VHDL file, including creating of a VHDL test bench from one of your Antares test cases.

* **#642: Rotate controls in symbol editor:** Controls like switches and LED's that you've added to a circuit's symbol can now also be rotated.

* **#669: Label for 'Clock' component:** Clocks can now have a label. This was mainly required for VHDL export.

* **#674: Help button in script dialog:** The scripting dialog opened from various script properties now contains a help button linked with the corresponding user manual page that explains the syntax to be used in this script.

* **#675: Improvements in scripting dialog:** Various improvements and bug fixes in the scripting dialog, such as caret location display, fixed missing location indication in syntax error messages, and fixed layout problem when resizing the dialog.

# Bugfixes

* **#665: Inconsistent value representation in subcircuit pins:** When hovering over a subcircuit's pin during simulation, Antares shows a tooltip with the current signal at that pin. The value representation (binary, hex etc.) was not always according to the specified representation in the corresponding subcircuit input/output component.

* **#666: No hourglass pointer when loading large circuit upon start on Antares:** When starting Antares, the most recently used project circuit is automatically re-opened, which can take some time if the circuit is large. Antares now shows a hourglass mouse pointer while loading.

* **#667: Wrong dark mode error icon in 'Issues' table:** The error icon in the "Issues" table was the one from light theme, but should be the darker one from dark theme, just like the one in the tab header. This has been fixed.

* **#668: Various visual issues with 7-segment display:** Various issues especially with the "medium" size display, such as segment width, grid alignment, and using the correct size when using in as symbol control has been fixed. You might have to slightly adjust existing circuit designs after upgrading to this version.

* **#670: Freeze in 'Rating' dialog with proxied internet connection:** When using Antares behind a web proxy, Antares did freeze while quitting, unfortunately without first saving user preference changes. Fetching rating aspect from the remote service now leads to a timeout after 10 seconds. See the new "Network" page in the user preferences to specify another timeout value.

* **#671: Design error in sub circuit doesn't get propagated at simulation start:** If you start simulation of a circuit with a sub circuit having design errors, such errors are now also propagated to the user and displayed in the "Issues" tab at the bottom of the main window.

* **#672: Bit width parameter not stored in gates if default is 1:** If a generic sub circuit had a bit width parameter with default 1, and components in this sub circuit were configured with variable bit width (=BW), that configuration was not stored properly. This has been fixed.

* **#673: Missing signal representation prefix in 'Test results' view:** Signals (expected / actual) in the 'Test results' view were missing proper prefixes like '0b' or '0x', which is why they could be confused with decimal values.
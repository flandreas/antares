---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: July 18, 2025

Mainly bugfixes, especially for the severe bug #979 "Error when joining open wires", which could leave the circuit in an inconsistent state, but also the feature #946 "Import truth table from CSV file". 

# Features

**#946: Truth table - Output columns upload:** Import the contents of a truth table from a CSV file.

# Improvements

None.

# Bugfixes

**#971: Error in rating when displaying 'Thank you!':** Missing translation. This has been fixed.

**#972: Wire in 'Block' style rendered solid in error state:** Is now rendered more subtle like for the other signals, with only the border drawn in red color.

**#973: Signal value in 1-bit circuit input drawn in wrong color:** If the "Representation" property was set to hexadecimal, the signal text was drawn in black instead of white (signal 0), and the opposite for signal 1.

**#974: Wrong text color for error state with light mode:** The "X" error state text is now rendered in white color, not black. This is not only more readable, but also matches the error icons in the surrounding UI, like in the "Issues" tab.

**#975: Error when ascending from subcircuit:** After diving into a subcircuit and then ascending, an error could occur under certain circumstances. This has been fixed.

**#976: Error when executing Library -> Edit Library:** In context menu on custom library node in explorer -> "Edit Library"
an unexpected error occurred. This has been fixed.

**#977: 'Preferences' in 'Library->Properties' is editable although user is not owner:** The preferences tab is now read-only if the user has no write permissions.

**#978: Error when exporting circuit with broken subcircuit reference:** If you have deleted one of your subcircuits, and you tried to export a circuit that still reference this subcircuit, an unexpected error occurred. Antares now catches this situation and displays a more comprehensible message.

**#979: Error when joining open wires:** If you joined two open-ended wires, an error occurred, which could leave the circuit in an inconsistent state. This has been fixed.



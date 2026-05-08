---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: May 8, 2026

Besides the usual bugfixes and improvement, Antares is now open source under the Apache 2.0 license. You can get the source repo on [GitHub](https://github.com/flandreas/antares-source).

# Features

**#1193: Make Antares Open Source:** The Antares source code is now open under the Apache 2.0 license.

# Improvements

**#1199: Tooltip of subcircuit with very short name is distorted:** The tooltip now has a minimum width that is consistent with the upwards-pointing arrow.

# Bugfixes

**#1194: Error when deleting subcircuit from circuit (after "Extract circuit"):** This has been fixed.

**#1195: Prevent deletion of library circuit if still used in currently open circuit:** Allowing this led to errors, e.g. when diving into the subcircuit that is still there in the main circuit (or any circuit currently open in a secondary view). This is now disabled.

**#1196: Error in "Undo" after "Extract as subcircuit...":** The action "Extract as subcircuit" could lead to an error if followed by undoing and/or redoing changes. "Extract as subcircuit" is a complex action, as it alters both the current project/library and the current circuit.

Turn the action into a "not undoable" one, including automatically saving the changed circuit. Display a warning to the user before the action is performed. Note that the user can always use "Show change history.." and "Restore" to roll back to the previous state.

**#1197: Error in symbol editor after pasting broken subcircuit reference (from different project):** This has been fixed.

**#1198: Rich text doesn't support "bold" with single-character text:** Due to a bug in the rich text parser, single-character text designated as "bold" wasn't rendered in bold. This has been fixed.

**#1200: Error when analysing a circuit with an oscilloscope:** This has been fixed.

**#1201: Error when importing image with unsupported file type:** Missing translation for error message.

**#1202: Error when analysing circuit with broken subcircuit reference:** The error is now caught, and a dialog says "Circuits with broken subcircuit references can't be analysed".

**#1203: Error with clock in "Hz" unit:** If you had a clock with its "Period / Frequency" property set to e.g. 1 Hz, and you changed its period to e.g. 2M milliseconds during simulation (the knob doesn't yet support Hz), and you've quit Antares without stopping the simulation, and you've answered "Do you want to save" with "Yes", an error occurred, and the circuit became corrupt.

**#1204: Error with "File->Statistic..." on FSM drawing:** This action expects a circuit drawing. When executing on an FSM drawing, an error occurred. The action is now disabled for FSM drawings.





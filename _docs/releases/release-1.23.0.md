---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: July 11, 2025

Bugfixes.

# Features

None.

# Improvements

None.

# Bugfixes

**#953: Error in 'Hierarchy' side tab when expanding tree nodes:** Cause: The “Hierarchy” side tab still displays the project. Expanding the tree nodes leads to accessing a subcircuit that does not exist anymore in the context.

**#954: Pins in symbol editor must not be allowed to be pasted/duplicated:** If you tried to duplicate or copy/paste a pin in the symbol, an unexpected error occurred. Pins in the symbol editor always have to reflect the state of circuit the symbol represents. Duplicating pins is now disabled.

**#955: Error when pressing 'Apply' in 'Parameters' dialog:** This has been fixed.

**#956: Cannot clear property 'Label' of memory (e.g. ROM):** When clearing the property "Label", the memory should display the default label, such as "ROM 4x16". Instead, the error msg below the properties windows said "no translation available" if the current language is not English. In English, the custom label reappeared, which was also wrong.

**#957: Error in exporting circuit as SVG:** In certain situations (target directory read-only), an unexpected error occurred. Now a regular error is displayed. Also fixed an error that occurred if the circuit contained an image component.

**#958: Error on first start if default workspace directory doesn't exist:** If the default workspace directory is read-only, Antares now displays a regular error dialog instead of an unexpected error.

**#960: Error in 'Open workspace' if changes are not saved yet:** Missing translation entry.

**#961: Error with 'Undo' while creating a new wire:** "Undo" changes the current circuit on which the tool for creating new wires relies on. This could lead to all sorts of problems. Undo/Redo are now disabled while any tool to which SelectionTool delegates to is active.

**#962: Error when creating oscilloscope in main circuit during simulation:** In #948, the View->Oscilloscope action should have been disabled when in execution mode, because otherwise this leads to errors when hovering with the mouse over the oscilloscope component. However, the fix only applied to subcircuits, not for the main circuit.

**#963: Error while creating an 'adjusted' wire:** If you press ALT while hovering over a pin to start creating a wire, Antares starts creating an "adjusted" wire, which allows you to define intermediate points (instead of getting an automatic layout) by clicking with the mouse. In certain situations, moving the mouse while the wire is under construction could produce an unexpected error.

**#965: Error in text component when deleting the entire text:** This has been fixed.

**#966: Error when double-clicking on test result after project/library has been closed:** Double-clicking on a test result would normally re-run the test. However, the circuit on which the test runs is not available anymore after the project/library has been closed. If a project/library from which test results were produced is closed, the "Test results" tab are now cleared.










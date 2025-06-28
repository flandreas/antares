---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: June 28, 2025

This is a maintenance release with fixes for important bugs, especially for #945, which could freeze Antares when saving a circuit that uses bidirectional pins. Many thanks to user gt6796c who reported this and contributed to fixing and testing the fix.

# Features

None.

# Improvements

None.

# Bugfixes

**#944: Error when changing simulation speed with signal flow animation:** In certain situations, changing the simulation speed during simulation while signal flow animations are ongoing could lead to an error.

**#945: Antares locks up on "Save":** When saving a circuit with bidirectional pins, Antares could freeze when saving the circuit. This was caused by a bug in automatically calculation the propagation delay of the circuit when saving. This feature can now also be disabled using the new user preference Circuit -> "Calculate propagation delay upon save".

**#947: Cannot import project with included custom library:** After exporting a project that includes a custom library, the project could not be imported again even if the included library was present in the local environment.

**#948: Error when creating oscilloscope in subcircuit during simulation:** Creating a new oscilloscope in a subcircit during simulation could lead to unexpected errors when hovering over the oscilloscope component. Creating oscilloscopes in simulation mode is now disabled.

**#949: Error in undoing circuit changes after FSM has been used:** If the user has worked on an FSM drawing, and then switched to working on a circuit drawing and undoing changed there, an unexpected error could occur.

**#950: Moving wire segment creates unnecessary undoable "Move component" command:** This has been fixed.

**#951: Repainting error with selected unconnected wire:** The bounding box of the selection model was wrong. This has been fixed.

**#952: Unexpected error in 'Analyse circuit' if circuit oscillates:** The "Analyse circuit" function performs a simulation run for every possible input combination. If the simulation doesn't settle after 1'000 iterations, the circuit is considered as "oscillating". In this case, the simulation threw an error that was not property handled. Antares now displays a proper message like "Circuit is oscillating".








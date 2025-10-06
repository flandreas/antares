---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: October 6, 2025

Maintenance release with bugfixes and improvements.

# Features

None.

# Improvements

**#1031: Several issues in 'Edit Library' dialog:** See the GitHub issue for details.

**#1034: Don't load library tree in 'Symbol comparison' side-tab if not visible:** The "Symbol Comparison" side-tab loaded its library tree every time another current library/project was opened, even if the side-tab was not open, or the symbol editor was not active. Applied lazy-loading.

**#1037: Display origin indicator of ghost in 'Symbol comparison' side-pane:**

**#1038: Option in 'Open Workspace' to open the system default workspace:** Provide an option in the "Open Workspace" dialog that allows the user to open the default workspace, the one that was automatically created when the Application was installed. The user might not know this path, and it depends on the OS.

**#1040: Omit snapping to grid with ALT when moving components with arrow keys:** If you move components with the mouse and press the ALT key at the same time, snapping to the grid is omitted. Do the same for moving components with the arrow keys.

# Bugfixes

**#1029: Error when adding an analog switch as control to symbol:** This has been fixed.

**#1032: Symbol editor displayed without a main circuit:** The symbol editor displayed the symbol of the former circuit even if it has already been closed.

**#1033: 'Symbol comparison' side-tab in symbol editor vanishes:** If you closed a circuit, closed the project, and opened the project again, the "Symbol comparison" side-tab in the symbol editor had vanished.

**#1035: 'Symbol comparison' ghost not removed when side-bar is closed:** It is now removed when the side-bar is closed (and re-opened).

**#1036: Some components are not drawn 'ghosted' in 'Symbol comparison':** In particular LED, switch and LED matrix. This has been fixed.

**#1039: Error when opening workspace: 'Unable to determine if root directory exists:** At some user, the mentioned error occurred when opening a workspace. It is unclear what caused this problem. Maybe a mounted directory. At least, catch FileSystemExceptions and show a regular error dialog, instead of letting an UnexpectedError happen.

**#1041: Error when deleting connected pins in 'Edit Symbol...':** Antares now disallows deletion of pins in "Edit Symbol...".

**#1043: Possible error when clicking on email link in 'Welcome dialog':** The "Welcome" dialog (and others) displays a HTML text that contains links to web pages and also a href:mailto element. If the user clicks on these links, the corresponding external applications are started (system's default browser, system's mail tool). If starting these external applications is not supported on the user's computer, an unexpected error occurs. Catch these situations and display a proper error message.

**#1044: Error when importing library into empty (initial) work space directory:** If you imported a library by double-clicking a library file on your computer's desktop, Antares started and tried to import the library. Import was successful, but storing the library failed because the library directory in Antares' app data directory was not correctly set-up for this scenario.

**#1045: Certain actions enabled on (read-only) built-in libraries:** This has been fixed. These actions are now disabled in the popup menu.

**#1048: Error loading circuit with overwritten label in subcircuit reference:** If you deleted the mail label from a symbol after having overwritten it in a circuit that uses the subciruit, an error occurred.

**#1049: Error when clicking on ?Default light color' in circuit properties:** Regression introduced with #1025 "New circuit parameter type 'Light Color'". This has been fixed.

**#1052: Error when connecting components with 'Auto adjust bit width':** Memory components like LUT or ROM perform a validation check when changing the bit width of the data pin. If you connected that pin while auto-adjust bit width was active, an error could occur. Antares now performs the validation before trying to commit the new wire, and displays an error if necessary.

**#1053: Editing memory content doesn't enable 'Save' when leaving cell with mouse click:** If you left the edited cell by clicking with the mouse on another cell, Antares didn't create an undoable command and hence the 'Save' button didn't become active. This has been fixed.

**#1054: Error in simulation with empty oscilloscope:** An oscilloscope without any rows could lead to an error during simulation.

**#1055: Error with popup menu action 'Open subcircuit:** After using this menu action during simulation, it was still enabled after the simulation had been stopped, even if the subcircuit was not selected. This lead to an error when executing the action. The menu item now gets properly disabled in this scenario.

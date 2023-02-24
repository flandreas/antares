---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: February 24, 2023

Various bugfixes and new features.

# Features

* **#518: Improve simulation speed slider behaviour:** The previous way simulation speed was
  controlled by the speed slider leads to abrupt, unnatural changes of simulation speed. This has been improved as follows:
    - No abrupt change between maximum speed and the values in the upper "use" speed range
    - Linear distribution along all three speed ranges
    - Minimum speed range should temporarily halt the simulation
    - New user preference for setting the slope of the speed change function

* **#519: Option for repeatedly reading ROM contents from external data file:** The user can
  load the contents of a ROM component from an external file. That data content is then stored
  within the circuit file, and the reference to the external file is lost. If the user edits the
  external file with another tool, he has to re-import the contents of the file into the ROM
  component whenever he has changed the external file. This was tedious.

  Antares now keeps the reference to the file and provides a new option in the ROM component than
  re-reads the file contents every time the simulation is started.

* **#525: Timer know should be un-zoomable:** The timer know is now always drawn in the same size,
  independent of the current zoom factor.

* **#525: Selection box should also select partially contained components:** The current implementation of the selection box selects only components that are completely contained in the box. Antares has now a new user preference to choose between this existing behaviour and a new
  behaviour that also selects only partially contained components.

* **#527: Duplicate components**: If the user presses CMD-D, the selected components are duplicated. Shortcut for copy/paste.

* **#530: Create subcircuit from selected components of a circuit:** Some users start by creating large designs within a single circuit and then want to extract parts of it into sub circuits. Antares now lets the user select components and extract them into a new circuit. Switches and LED's are replaced by inputs/outputs, and the extracted components in the main circuit is automatically replaced with the newly created subcircuit.

* **#531: Automatically importing project .zips:** Changed the file extension of exported
  projects to e.g. "myProject.antares" (internally still a zip file). If the user has associated
  that file extension on his OS with the Antares application, double-clicking on such a file
  automatically starts Antares and imports the double-clicked project file (after asking "Do you
  want to import 'myProject.antares'?"). On macOS, this also works if Antares is already running.

* **#533: Change inputs of unconnected components during simulation:** Some users want to
  quickly test with a component from the library without the need to fully connect it with
  switches and LEDs. They can now simply click on non-connected inputs to change their input
  signals.

* **#537: Popup menu on multi-component selection:** Antares' popup menu on components offer
  actions like "Cut", "Copy", "Delete" etc. This popup menu was only available if a single
  component was selected. It is now also available if multiple components are selected.

* **#540: Expand 'Frequently used' library folder on first start of Antares:** When a user
  starts Antares for the very first time, the "My first project" is automatically created and
  opened. However, there might be users who can't figure out where to find components to add to
  the "My first circuit". Antares now expands the "Frequently used" folder in the Explorer's
  "Standard Library".

* **#541: Help links to build-in components documentation:** Various places including the
  explorer's preview window or the selected component's popup menu now contain actions for
  requesting help for a component, which opens the system's web browser with the corresponding
  manual page.

# Bugfixes

* **#512: Open subcircuit reference gets lost with undo/redo:** When opening a subcircuit in an
  addition view, Antares highlights the subcircuit symbol in the origin circuit with the same
  reference color that is used as border color in the new view. If the user performed a sequence
  of edit operations followed by undo, it could happen that this reference between the subcircuit
  and the new view got lost.

* **#513: Switch to symbol editor when making Antares window very small:** If preference "View -> Navigation -> Switch mode using zoom factor" is set, Antares automatically switches from the circuit editor to the symbol editor if the user makes the zoom factor very small by zooming out using the mouse wheel.

  This mode switch also happened if the user made the Antares window very small, resulting in a
  very small zoom factor, given that the previous zoom operation was one that actives auto-zooming,
  such as "View -> Zoom to fit". This has been fixed.

* **#514: Keys in Antares.ini are not sorted:** Sorted Antares.ini content now greatly facilitates
  certain debugging tasks.

* **#515: Save should not be enabled during simulation:** The save actions are now disabled
  during simulation.

* **#516: Panels in left-side part of symbol editor are not property aligned:** This has been fixed.

* **#522: Importing libraries is not working:** Due to a bug in Java's file dialog, an error
  could occur when importing libraries on Windows, depending on the user's Windows "Quick
  Access" files. This has been fixed by a workaround. Please report back if the problem should
  still occur.

* **#534: Error when clearing RAM with undefined address:** During simulation of ROM, when
  setting CRL to 1 while A is undefined, an unexpected error occurred. This has been fixed.

* **#535: RAM and ROM pins are drawn above the symbol border:** This has been fixed.

* **#538: ROM/RAM show content dialog when clicked with right mouse button:** This has been fixed.

* **#539: Tooltip appears even if context menu is open:** This has been fixed.
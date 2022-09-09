---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: September 9, 2022

After seven years of intense development, Antares finally reaches release 1.0!
This release contains some major new features, which will be described below, but
also some important bug fixes.

> :warning: **Breaking Change #460**: The fix of bug #460 can lead to signal controls in the symbol of your subcircuits being dislocated in y direction. You will have to correct these dislocations manually. We apologize for the inconvenience.

# Overview

## The release number

The fact that we are going from 0.31.0 to 1.0.0 does not necessarily mean that it's a ground-breaking jump in functionality, or that Antares development has finally completed. Going to 1.0.0 was primarily induced by adding a signature to the installer for macOS, because Apple notarization, which is part of the code signing procedure, doesn't allow version numbers starting with zero.

However, release 1.0.0 does contain some big, necessary features that have been waiting in the backlog for a very long time, primarily "App Signing" and the support for multi-library import into a project.

## Signed installers

The annoying security warning users saw on all platforms when installing Antares embarrassed us all for a long time, and we finally took the time - and the money for the certificates - to sign the installers.

On macOS, all warnings should now be gone, and your Mac will allow you to install Antares without any complaints. On Windows, you will still see a blue question screen, but that is not as frightening as the former warning was. To get rid of this screen as well would require a much more expensive certificate that we can't affort yet.

## Linux installer

Since Antares deals with a pretty technical topic, we thought that there might be some potential users with Linux PCs, and because setting-up a Linux installer is quite similar to the other ones, we did it. But we have no experience as Linux users, and we are not sure whether the provided `.rmp` package is the preferred way of doing things on the Linux platform. We tested on Ubuntu, and everthing looked fine, but we invite you Linux people to give feedback if you have problems with using Antares on Linux.

## Projects importing multiple libraries

This is probably the most awaited and most useful new feature for a long time. You can now build your own library and add it to your project along with libraries from other people, such as the 74xx library that you can download from the Antares Assets GitHub project.

This feature required massive changes in Antares' core, so there might still be some bugs in this area. Please start proceeding with care when using this feature, and report any bugs you find in this area.

## Wired OR

The necessity for the new wire logic mode "Wired OR" (in addition to the already existing "Conflict" mode) arose when we tried to build the circuits from the Book "But How Do It Know" by J.Clark Scott. In this book, where Mr. Scott builds an entire computer from scratch, the concept of "tri-state" is completely omitted, and the circuits are based on wired-or logic instead. In order to build these circuits in Antares, we had to introduce the new "Wire Logic" property for circuits.

## Open circuit in multiple windows

With 0.31.0, you could already open other circuits from the explorer tree in individual windows, but now you can also open subcircuits from the currently open library or project in separate windows.

This proved to be useful when working on and debugging large projects like microcomputers, where you want to inspect e.g. the CPU circuit and its control logic circuit at the same time. Since both circuits are complex, this new feature now allows you to open them in separate windows and place these windows in separate screen of your work place, where you can maximize the windows to see all the details you need for debugging.

## The future

So, now that we have release 1.0.0 of Antares, what is going to come next?

There will surely still be some bugs, potentially also new ones we've introduced with this release, which we will be happy to fix after you've reported them. And we are always happy to hear your feature requests and other ideas and ways of how we can improve Antares.

Beside that, we are going to focus again on the upcoming web version of Antares, which will allow you to create an online account and publish your circuits into it, from where you can build online web pages that contain your circuits in an interactive and simulated way.

# Features

* **#86: Sign Installers:** The installers for macOS and Windows are now signed with a proper developer certificate to get rid of security warnings during installation.

* **#212: Multiple open libraries:** Libraries as well as projects can now be based on multiple libraries and not just a single one as in the previous version. Just select the desktop node of a library/project in the explorer, execute the popup menu action "Add Library.." and choose the library to add.

* **#422: "Wired OR" to make book "But How Do It Know" possible:** Circuits have now a new property "Wire Logic" you can use to define whether different signals should be regarded as conflicts, or whether they should be OR-ed together. Wired-OR enables you e.g. to build the computer in the book "But How Do It Know" by J.Clark Scott.

* **#423: Allow changing "Position Bit 0" for Splitter, Combiner, Bidirectional Splitter:** It is now possible to change this property even if ports are already connected. However, depending on the current wires, their layout will get distored and must be adjusted afterwards.

* **#433: Select all parts of a wire net:** If you press CMD while selecting a wire, all wires of the same net are now selected. This can be helpful when building large circuits with long wires and many junctions.

* **#434: Improve size of connection highlighters:** The green connection highlighters are now independent of the current zoom factor, which makes them still visible even with small zoom factors. In addition, their size has been increased to make the better visible with 100% zoom.

* **#435: Vertical label of "internal" ports in subcircuit symbols:** In the symbol editor now provides a new value "Aligned with pin" for the property "Label orientation" if "Label Position" is internal. This support better usage of real estate within a symbol.

* **#436: Documentation of Antares -> Preferences:** Antares' user preferences are now documented in the ["User Manual"](/user-manual/english/misc/preferences).

* **#437: Validation Feedback in Preferences Dialog:** If the user entered a value that violates a validation condition of a particular preference field, Antares silently reset the field to the former value. Similar to what is already supported in the circuit's properties view, the validation failure is now displayed.

* **#439: Operate Joystick component with keyboard keys:** During simulation, if the joystick component has the input focus, the user is now to move the joystick knob with the arrow keys left, right, up and down.

* **#442: New component "D Latch":** A new "D Latch" component was added to the "Standard Library".

* **#443: New theme "Desert":** A light, warmer theme in yellow/sandy coloring has been added to the available sets of themes.

* **#446: Apply circuit's "Start-up Duration" to soft breakpoints as well:** The property "Start-up Duration" has been introduced a couple of releases ago to avoid useless signal flow animations while the simulated circuit settles into its initial state after simulation has started.

  Working on complex circuits like the microcomputer in the book "But how do it know?" showed that applying this property also to soft breakpoints can be useful while debugging early versions of such a complex circuit. Debugging often involves single-stepping right from the simulation start, and stepping through all the circuit setup soft breakpoints until the simulation reaches the interesting stages proved to be annoying.

* **#451: Linux Installer":** You can now download an Antares installer for Linux, technically an .rpm package. Tested on Ubuntu 22.

* **#452: Open subcircuit in separate window":** You can now open a subcircuit in a separate window. This is useful when working on complex projects to take benefit of multi-screen setups. Note that this only works in edit mode, not yet during simulation, because the popup-menu mechanis relies on selected components. But you can open a new window in edit mode and then start the simulation.

* **#454: Store column width of memory contents view:** The memory contents view allows the user to display and edit memory contents. The single column layout can be used to enter comments for every memory cell. The width of this comment column should be larger by default, and width changed by the are now stored.

* **#456: Choose main application font in preferences:** Antares uses a logical font family name for the main application font. This logical font is mapped by the runtime to a physical font of the operation system. Mapping on macOS results in an acceptable font on macOS, but IMHO not on Windows and Linux. Therefore, you can now choose the main UI font in the preferences and pick one that works well on your system.

* **#459: Keep current ROM/RAM contents cell highlighed even with CS=0:** A ROM/RAM component can display a portion of its memory contents in the symbol. If the component is active as of input CS, the contents cell being active as of input A is highlighted.

  If CS is low, the highlighting disappeared. This was annoying in microcomputer circuits, where the user would expect the cell to keep being highlighted that corresponds with the "Instruction Address Register" or "Program counter", even if the ROM currently isn't active. In these cases, the cell is now highlighted with a non-filled rectangle.

* **#462: 16-Segment Display":** The new component "16-Segment Display" has been added to the built-in libraries, including a new "ASCII-16Seg Decoder" that decodes many ASCII values to the proper 16-Segment code.

# Bugfixes

* **#431: Multiple questions "Do you want to save?" when changing the project:** If you had unsaved changes in your current circuit, and you tried to open another project, Antares asked to whether you want to save your changes. However, this question was asked multiple times. This has been fixed.

* **#438: Signal flow animation is slower on wires with more segments:** Signal animations traverling along wires with more segments are now equals fast like signals on wires with less segments. However, it seems like more junctions still lead to slightly different travel times.

* **#440: Circuit input "shake animation" can distort digit position:** If you enter an invalid character/key in a focused circuit input during simulation, it plays a short "shake animation" to indicate the invalid input. If you entered another invalid input, another shake animation was started, leading to an random final location of the digit view being shaken. This has been fixed.

* **#441: More validation of numerical component properties:** The user can change properties of selected components in the properties windows. Certain properties, especially numerical ones, didn't have enough validation conditions established yet. For example, it was possible to enter a negative "Propagation Delay", which must be prohibited.

* **#444: Oscilloscope probes are displayed even if "Show Oscilloscope" is off:** When opening a circuit containing an oscilloscope, but that has been saved with "Show Oscilloscope" turned off, the oscilloscope probes were displayed nonetheless. This has been fixed.

* **#445: Error when ALT-clicking on wire in read-only circuit:** When clicking on a wire with ALT pressed on a read-only circuit (e.g. on one of the standard library), an unexpected error occured.

* **#447: Cannot edit comments in ROM popup with "1 Columns" layout:** Double-clicking on a ROM opens the memory popup that allows the user to edit the data contents of the ROM. When choosing "1 Column" as layout, the comment column is display, which would allow the user to enter a comment for every memory cell. However, this didn't work correctly: The column was not editable, and if it was, the comment would not have been propertly saved in the ROM.

* **#448: Mirrored components get dislocated when editing custom symbol:** When editing the symbol of a subcircuit using popup menu -> "Edit Symbol" that is mirrored (using properties "Mirror Horizontally" or "Mirror Vertically"), the location of the subcircuit symbol was at an unexpected location after closing the "Edit Symbol" popup.

* **#448: Circuit symbol is unexpectedly re-generated:** If symbol generation is activated in the user preferences, and the user has manually edited the generated symbol, it could happen that the symbol was re-generated unexpectedly. Did only occur after opening more than one main circuit in a row.

* **#450: "Quit" doesn't work anymore on macOS after declining once:** If you had unsaved changes and pressed Cmd-Q to quit on macOS, and you pressed "Cancel" in the "Do you want to save" dialog, the "Quit" menu afterwards didn't work correctly anymore.

* **#457: Re-displayed oscilloscope can overlap circuit:** Newly created oscilloscopes are automatically placed below the circuit's bounding box. If a user then hides the oscilloscope, adds new components at the place where the oscilloscope was, and finally re-displays the oscilloscope, it overlaps the circuits bounding box. When displaying the oscilloscope, Antares now checks whether it overlaps the circuit, and repositions the oscilloscope below the circuit.

* **#458: File->Close in separate circuit window closes view in main desktop instead:** This has been fixed.

* **#460: Controls with signal display are misplaced in subcircuit symbols:** When dropping a control with a signal display (Circuit In/Out, Probe) into a sub circuit's symbol, it was misplayed by 14 pct up in y direction.

  Since users corrected this misplacement manually after it occurred, the fix of this bug will be a breaking change, because users will have to fix the placement of those controls in their circuit's symbols.

* **#461: Undo/Redo in "Edit Symbol" of subcircuit symbol doesn't work:** Could lead to unexpected errors or inconsistent states. This has been fixed.

* **#463: Clearing explorer search field expands entire tree:** When using the search field in the explorer view, Antares filters the tree to match the search criteria and expands to tree to all found leaf nodes. When clearing the search field, the same happend, but without any filtering performed. This lead to a fully expanded explorer tree, which was be annoying. Now, when clearing the search field, the tree gets fully collapsed and then expanded only to the currently open circuit (if any).

* **#464: Loading exported "Bundles" can lead to unconnected subcircuits:** You can export a single circuit within a "bundle".zip that contains all non-standard referenced subciruits. When loading such a bundle into another project, wires leading to subcircuits referencing the other circuits were sometimes not correctly connected. This happened because of a dependency on the order in which the circuits was contained in the bundle: If a circuit was loaded whose referenced subcircuits have not yet been loaded, the corresponding wires could not be connected.

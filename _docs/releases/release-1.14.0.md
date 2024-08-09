---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: August 9, 2024

Besides the usual bugfixes and minor features, this release brings the bigger features "Overview of global signals" and "Non-volatile RAM". There are also some improvements in Antares Web, like image thumbnails in the projects overview page.

We've also completed a couple of Antares Web issues with this release, but we've encountered technical issues during deployment to the cloud. We hope to fix them in the next couple of days. We expect new Antares Desktop release to still work with the current Antares Web backend. If you encounter problems, let us know.

# Features

* **#735: More circuit/project settings rather than user preferences:** Circuit simulation depended on certain user preferences. If a project was exported and then imported by another user with different preferences, the circuit might not have behaved as expected. Those user preferences now exist also as library/project properties. When creating a new library/project, they are initialized from the user preferences, but then consumed from the library/project, especially after export and import by another user. You can also update these properties in the "Project properties" dialog.\
 These user preferences have been treated:
  - Allowed net contention duration
  - Default propagation delay (ns)
  - Undefined gate input behavior
  - Switch propagation delay

* **#709: Overview of global signals:** Displays a list of all global signals (i.e. global tunnels) in all circuits of a project, including in which circuits they are used by tunnels, and lets the user open a circuit directly from this list. The user can also drag a tunnel into the edited main circuit. Open this dialog via the context menu of the "Desktop" node in the explorer tree.

* **#763: Preference for disabling tooltips:** Users complained that Antares shows too many tooltip, disturbing experienced users.
  - Gate truth tables now only shown if user preference "tips for beginners" is set
  - New user preference "Component tooltips" in "View"to disable component tooltips

* **#764: Pan with SPACE + left click:** There is now a new value "SPACE + left click" in the user preference "View -> Zoom / Pan -> Pan method".

* **#769: Bit extender with 1 bit output:** The "Bit Extender" component in the standard library now also allows 1 bit output.

* **#774: Default value for pins:** The component "Circuit Input/Output" now has a new property "Start value". This value is used at simulation start if the circuit is the root circuit.

* **#770: Export circuit as raster image (gif, png, jpg):** In addition to SVG, you can now export circuit images also as GIF, PNG or JPG.

* **#786: Non-volatile RAM (NVRAM):** The RAM component has received a new property "Non-volatile". When set, RAM content is ketp across multiple simulation runs.The RAM content is persistently stored outside the circuit file, i.e. in a new subdirectory in the user's working directory. This new storage is organised hierarchically and based on component instances: If a RAM component is contained in many user circuits, its non-volatile content is stored separately in each child instance of the corresponding root circuit. This can be used for things like flash memory, core memory, drum memory etc.

* **#788: RAM and ROM as symbol controls:** Adding RAM and ROM as controls to symbols allows the user to display and/or load memory contents even if the memory components are buried deep down in subcircuits. Especially useful in microprocessor projects featuring front-panels.

* **#794: Pan animation towards copy/pasted components:** When pasting components into a circuit (especially after copying from another circuit where the components are placed at odd locations, e.g. far away from 0,0), it could happen that the pasted components were not visible in the current zoom/pan area. The user was then confused and probably repeated the paste action, leading to a second set of the same components stacked upon the first set.\
To avoid this, Antares now performs a pan animation to the pasted components if their bounding box is not contained in the currently displayed area of the target circuit.

# Improvements

* **#750: Cleanup standard library structure:** The structure of the "Standard library" has been improved.

  - Net
    - Constant moved to Input
    - Probe moved to Output
    - Real Switches moved to Input
  - Register
    - New subdirectories
      - Register
      - Shift Register
      - Bus Register
  - Arithmetic
    - Moved generic “n Bit” circuits to subdirectory
  - Codec
    - Encoders right after Decoders, i.e. moved BCD decoders down
  - Flip-Flops
    - Moved SR to the top

# Bugfixes

* **#754: Hot key for 'Resume simulation' not active if component has focus:** During simulation, the action "Resume simulation" (used with single-step simulation) can be triggered with the hotkey SPACE. However, if a component like a switch or a circuit input currently has the focus, the hotkey was not active, because SPACE was consumed by the component. This has been fixed.

* **#768: Wrong label for D flip-flops:** Labels for the two D Flip-Flops in standard library were written PRE/CRL instead of PRE/CLR.

* **#771: Bit extender has undefined output at simulation start:** It wasn't recalculated depending on input during sim start. This has been fixed.

* **#775: 'Subsystem' rectangles missing in SVG output:** If a circuit contained rectangles of style "Subsystem" (the ones with the dashed border), and you exported the circuit as SVG, the subsystem rectangles were missing. This has been fixed.

* **#777: Inconsistent circuit state after failed copy/paste:** When pasting parts of another circuit into the current circuit, it could happen that the action failed (due to various reasons), and the state of the current circuit was inconsistent afterward. One reason why this could happen was when pasting components using generic circuit parameters (such as propagation delay expressions), but the current (target) circuit hadn't a parameter definition with that name. This situation is now handled in a more robust way (detect situation before actually pasting, show error dialog with more specific message).

* **#777: Simulation doesn't launch when initializing subcircuit input with DSL script:** Antares produced an unexpected error if you started a circuit with scripted subcircuits whose script was semantically not correct, e.g. referencing pins that didn't exist. This is now caught and property reported as an error in the "Issues" tab.

* **#780: Bit accessor DSL operator doesn't work on pins:** The bit accessor operator @ only worked on variables, but not yet on pins. This has been fixed.

* **#785: Transistor represented as open switches during simulation:** The "switch" representation of (digital) transistors during simulation didn't work correctly. This has been fixed.

* **#789: Width of 'Hierarchy' sidebar cannot be reduced:** Once the width of the "Hierarchy" sidebar on the left side of the main window has been expanded, it could not be reduced anymore. This has been fixed.

* **#790: DSL scripts produce unexpected error when comparing undefined values:** For example, the expression "0x?8 == 0" produced an unexpected error. This has been fixed by treating undefined signals according to the "Undefined gate input behaviour" user preference.

* **#791: False positive test results with undefined signals:** The rest runner for scripted circuits could sometimes regard tests as failed if undefined signals were involved. The test results view showed the same value for "expected" and "actual". This has been fixed.

* **#792: False positive test result with ports of type "inout":** Actual values of ports of type "inout" were not correctly read by the circuit test runner, leading sometimes to false positive test results. This has been fixed.

* **#793: Error while creating junction from small wire:** When creating junctions from small wires, an unexpected error could occur. The event handling code did not properly react to rules that try to enforce minimal wire lengths. This has been fixed.
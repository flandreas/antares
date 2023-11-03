---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: November 3, 2023

Besides many bugfixes, release 1.8.0 primarily contains the new features "Record mode for use cases" and "Circuit tests".

**"Circuit tests"** allow you to define test cases for each of your circuits. Write test vectors with input values and the corresponding output values. After running a testcase, Antares displays the test results and highlights input combinations leading to unexpected results.

![Circuit tests](/assets/images/user-manual/circuits/circuit-tests-overview.png)

See the corresponding chapter in the ["User Manual](/user-manual/english/circuits/circuit-tests) for a description of how to write test cases for your circuits.

With **"Record mode for use cases"**, you can define a use case by simply record mouse and keyboard clicks during a simulation run. This turned out to be very handy when building "Ben Eater's 8-bit computer" in Antares, because the test machine program had to be entered again after every new simulation start, requiring switching dozens of DIP switches and button presses. With this new feature, you can once record entering a machine program and then repeating it by simply running the use case. 

![Record usecases](/assets/images/posts/record-usecases-sample.png)

Checkout the chapter in the ["User Manual](/user-manual/english/usecases/usecases#recording) to see how to record your own use cases.

# Features

* **#625: Build 'Ben Eater 8-bit computer:** Successfully built using Antares. You can download the project from the "Examples" page.

* **#647: Record mode for use case creation:** You can now create Antares use cases by recording your mouse and keyboard clicks. Executing such a use case later will simply replay all those events during a simulation. Can e.g. be used for loading a machine program into "Ben Eater's 8-bit computer" by switching lots of DIP switches. See the ["User Manual](/user-manual/english/usecases/usecases#recording).

* **#655: Click on unconnected pin during simulation improvements:** Clicking on a multi-bit pin now opens the keyboard popup. Double-clicks on unconnected pins doesn't lead to diving into subcircuits any more.

* **#657: Circuit tests:** You can now write test cases for each of your circuit and let Antares run those tests in the background. See the ["User Manual](/user-manual/english/circuits/circuit-tests).

# Bugfixes

* **#640: Error when deleting wire:** In certain situations, an error could occur when deleting a wire originating from a junction. This has been fixed.

* **#649: Avoid rotating connected wires:** Prevents the user from selecting a single, connected wire and rotate it without also rotating connected components.

* **#651: DIP switch doesn't use 'Initial value' when restarting simulation:** This has been fixed.

* **#652: Error when searching in explorer:** When searching in explorer's search field and then deleting all content in the search field, an error occurred. This has been fixed.

* **#653: Use case tree not updated when changing use case name:** This has been fixed.

* **#654: Width of use case selector in toolbar depending on length of use case names:** The width of the selector now adjusts to "Run use case:" only, but the width of the popup is adjusted to the width of the widest use case name.

* **#656: Rich text format tags in export file names:** When exporting circuits (SVG, bundle) whose names contain rich text format tags such as slashes, those tags messed up the suggested file name, especially slashes lead to suggesting only the part of the name after the slash.

* **#658: Wrong test location in scripts:** Antares reported sometimes wrong text locations when validating Antares scripts. This has been fixed in many places.

* **#659: Execution script error in 'Shifter 8/16 Bit:** The execution script in subcircuits "Shifter 8 Bit" and "Shifter 16 Bit" of the "Standard" library didn't incorporate the carry-in bits correctly. Only occurred in simulation mode "Shallow".

* **#660: General error while opening circuit:** In certain situations, especially when switching between circuits from different projects and/or libraries, an "General error" could occur when trying to open a circuit. This bug was caused by the "Open recent..." feature.

* **#662: Wrong '8-3 Priority Encoder" implementation:** The circuit implementation of standard library's "8-3 Priority Encoder" produced a wrong result for input values larger than 4.
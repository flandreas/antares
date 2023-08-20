---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: August 20, 2023

Various bugfixes and new features, most notably "Subscript in component names (Rich Text)" and a fix for "Dead components", which was a result of the circuit model becoming inconsistent during certain user actions.

In order to be able to track down issues like #584 "Dead components", logging has been massively extended, and Antares now does additional checks to detect such situations, in which case it asks the user to export the entire system state and upload it to a support issue for further analysis.

> :warning: **Breaking Change #592**: Due to the extension of the rich text format, certain texts in existing circuits wont be displayed as expected, especially texts containing underlines and circumflexes. You need to re-format such texts as described in ["User Manual"](/user-manual/english/circuits/text-style).

# Features

* **#590: Input/output names when copying&pasting:** Inputs/output now maintain there base name when being copied and pasted. For example, an input named "O3" will become "O4" when copy/pasted, unless that name is not free any more, in which case it will be named "O3 (2)".

* **#592: Allow subscript in component name:** Naming has been extended to support rich text features like negation (overlines), subscript, superscript, bold and italic. See the new page in the ["User Manual"](/user-manual/english/circuits/text-style) for how to apply these rich text features.

* **#593: Connect wire with another wire:** Newly created wires can now be connected with other wires (given this won't violate the singe-input rules for wires).

* **#602: Allow in-place replacement of gates via context menu:** The context menu of logic gates now contains actions for converting them into other logic gates, e.g. an AND gate into an XOR gate. Restricted to the set of unary and non-unary gates respectively, i.e. a NOT gate cannot be converted into an AND gate.

* **#603: Allow input naming on gates:** You can now specify names of logic gate inputs, just the same way you already could for their outputs.

* **#610: Misleading 'Flat' statistics result:** When executing "View -> Statistics" on a circuit containing sub circuits, the result displayed in the "Flat" tab could be misleading. Users might expect to see the number of component just for the current main circuit. Extended the dialog by a third tab showing only the number of components in the current circuit.

# Bugfixes

* **#517: Distance between explorer tree items too large:** Icons in explorer tree had different sizes.

* **#557: Won't install in win11, win10 thinks it's a virus:** Won't fix. The problem is MS SmartScreen. Unless the app is signed with an EV certificate, which is expensive and only issued to registered companies, and even if an app is signed with a non-EV certificate, SmartScreen blocks the app until the app has built reputation of possibly thousands of downloads. Since app signing certificates have a validity of 1 to 2 years, and SmartScreen resets gained reputation to zero when the signature has changed, Antares will never be downloadable without SmartScreen warning. On Windows, certificates simply don't make sense for non-commercial application.

* **#584: Dead components:** Sometimes, components became dead during simulation, i.e. they didn't do anything anymore. The reason was that these components weren't propertly connected on the model layer. One source of this inconsistency we were able to track down was related to connecting open-ended wires to pins or other wires. There might be other sources, which is why we introduces consistency checks that escalate such problems and ask the user to upload the entire system state for analysis.

* **#605: Missing space in tooltip:** Rendering of tooltips was sometimes shaky, as blanks weren't always rendered correctly. Rich text rendering has been entirely reworked in #592.

* **#606: Real switch misbehaves on simulation startup:** There was a bug that real switches didn't reset to "off" on simulation start.

* **#607: Visual glitch when changing transistor type:** The layout of wires connected with transistors wasn't updated when the transistor's type was changed.

* **#608: Register n Bit not working:** The property "Always use function" of the scripted library component "Register n Bit" wasn't set, which is why the component did nothing during simulation in deep mode.

* **#611: Wrong 'Is already open' message when diving into subcircuit:** Under certain conditions, Antares said "Circuit is already open" when you tried to open a subcircuit in another view. This has been fixed.
---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: July 1, 2023

Various bugfixes and new features, most notably "Expose the project workspace" and "Avoid 
overlapping wires in layout algorithm".

# Features

* **#565: Enable dragging canvas by holding the ALT key:** Implemented a new user preference with 
  the option to choose "ALT + press/drag left mouse button", in addition to the default 
  "Press/drag middle mouse button". Also inverted scroll direction on trackpad.

* **#571: Display name of selected pin control in symbol editor properties:** When selecting a 
  pin control in the symbol editor, the user didn't know which input or output is related with 
  that control. The name of the pin is now displayed in the properties window.

* **#573: Avoid overlapping wires in layout algorithm:** The algorithm has been improved such 
  that it now tries to avoid overlapping wires, something often occurred e.g. when connecting a 
  splitter's pins with a combiner's pins. This feature is "experimental" and can be turned off 
  in the user preferences.

* **#578: Release JAR package:** The download page now also offers the Java JAR package for 
  downloading.

* **#579: Numeric keyboard not working on circuit input:** You can now also use the numeric 
  keyboard to enter signals in circuit inputs.
 
* **#581: Expose the project workspace:** You can now define the directory where Antares stores 
  your projects and custom libraries. This allows you to work with different repositories in parallel,
  or to store your data e.g. at a location treated by your automated backup procedure.

* **#586: Buffer and NOT gate miss input negation:** The input of buffers and NOT gates can now 
  also be inverted.

* **#591: Indicate that 'Bulk property editing' is limited to 8 components:** Instead of just 
  showing an empty property window, the title of the window now informs the user that Antares 
  does not support editing properties for more than 8 components in one operation.

* **#600: Mnemonic of buffer:** Buffer components now display a more accurate mnemonic, one that 
  is the inverse version of an inverter's mnemonic.

* **#604: Add input/output component to 'Input' and 'Output' folders of library:** Certain users 
  might have been confused when searching for the "Input/Output" component. Having to first add 
  an input (or an output) and then change the "Port type" property was not straight-forward.
 
# Bugfixes

* **#557: Won't install in win11, w10 thinks its a virus:** Certificate is now accepted by 
  Windows 11 as well.

* **#572: Error when opening circuit with broken subcircuit reference:** If a circuit contained a 
  reference subcircuit that has been deleted in the meantime, Antares displayed an unexpected 
  error. This problem was introduced with the new "Hierarchy" tree and has now been fixed.

* **#574: Switch propagation delay not applying:** All components with "manual switch" behaviour 
  are supposed to use the "Switch propagation delay" user preference (default 1000 ns), 
  including circuit inputs/outputs when clicked by the user. In 1.4, this preferences was not 
  used, and instead 1000 ns was always applied. This has now been fixed.

* **#576: Unexpected error when opening oscilloscope preferences:** This has been fixed.

* **#550: Translation of "Komparator n Bit:** Fixed English translation.

* **#587: Error when starting simulation:** This problem could occur in all circuits using bit 
  with expressions. Now fixed. 

* **#596: Cannot import SN 74xx.acl:** If the user didn't already create a custom library, 
  importing any library (e.g. the SN 74xx library from the "Assets" project) lead to an error 
  due to a bug in code that manages the data directory. This has been fixed.

* **#597: Library explorer allows dragging circuit into itself:** Antares now refused moving 
  components within a directory of the library explorer if the target location is the same as 
  the current location.

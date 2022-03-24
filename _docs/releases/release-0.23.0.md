---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: March 24, 2022

Release 0.23.0 brings a couple of useful new features. Besides the new component "Lookup Table", additional Bit Width 6 and 7, and some extensions in the new "Synthesis" module, Antares now supports a history of saved circuit versions, which you can browse and restore if necessary.

![Save History](/assets/images/user-manual/circuits/save-history-sample.png)

In addition to that, an annoying bug that prevented you from closing secondary views in the desktop view has been fixed.

# Features

* **#219: History of saved circuit version:** Antares now stores a side copy whenever you
save your circuit. You can display a list of these old version, preview the circuit,
and restore any of the old versions.

* **#312: Connect output pin to existing wire:** Antares now lets you connect an output
pin of a component to an already existing wire, while ensuring that at most one non-tristate output is connected to the wire's net.

* **#326: Generate execution script when generating circuit:** When generating a circuit from a truth table or an expression, Antares now also generates the Antares DSL execution script for that circuit in order to speed up shallow simulation.

* **#327: New component "Lookup table":** A new component has been added to the standard library. Similar to a ROM component, but without the CS input, and a more compact symbol. Used by Antares itself in #332.

* **#329: Add Bit Width 6 and 7":** Completes the set of bit widths <= 8.
Also used by Antares to generate circuits from boolean expressions using LUT's with up to 8 variables.

* **#330: Provide a "Save" button":** The drawing tools toolbar now contains a "Save" button whose "enabled" state helps the user to see whether there are unsaved changes.

* **#332: Generate circuit from expression/truth table using LUT:** When creating a
circuit in the synthesis modul, you can now choose whether the created circuit used AND/OR gates or a Lookup Table for every output.

* **#334: Display row number in Truth Tables:** Truth tables now display a row number at the beginning of each row, which helps when editing large truth tables.

# Bugfixes

* **#328: Cannot edit memory cells with Data Bit Width < 4":** Due to a bug in parsing user input, Antares rejected user input in the "Edit memory cell" UIs if the data bit width is smaller than 4

* **#328: "Close View" in Desktop doesn't work any more:** The explorer tree correctly doesn't didn't a "current circuit" any more, but the circuit view stayed open in the desktop. This has been fixed.

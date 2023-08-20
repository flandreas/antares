---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: December 1, 2022

Besides the usual bugfixes, this release contains some new features like a shape library in the symbol editor, a new circuit hierarchy tree view, support for changing the name of all tunnels with the same name, arbitrary bit width, changing properties of multiple selected components in one go, and a new "Verbose" gate symbol style.

# Features

* **#483: Shape library in symbol editor:** The symbol editor now contains a library of commonly usable geometrical shapes (rectangle, oval etc) and circuit symbols (AND, OR, NOT, multiplexer, ALU etc) to pick from when designing a custom symbol in the symbol editor.

* **#484: Add "Curve" tool to symbol editor:** The "Curve" tool known from the circuit editor has now also been added to the symbol editor.

* **#485: Add demultiplexer circuits to the Standard Library:** The Standard Library has been extended by a couple of demultiplexer circuits.

* **#492: Circuit hierarchy tree view:** The main window now contains a new left sidebar with a circuit hierarchy tree view that allows you to directly open subcircuits located deep down in the circuit hierarchy in a new view.

* **#493: Change names of all tunnels with the same old name:** When the user changes the name of a single tunnel, and there are other tunnels with the same old name, Antares now asks the user whether he wants to change the name of these other tunnels as well.

* **#498: Arbitrary Bitwidth for IO (and params):** All bit width properties of any component now support adding arbitrary bitwidth between 1 and 64. The commonly used bit widths are still offered in a dropdown menu.

* **#502: Help menu with link to YouTube channel:** Added a "Introduction Videos (YouTub)" item to the "Help" menu that directs the user's web browser to the Antares YouTube channel.

* **#503: Improve usability of the "File->Statistics" dialog:** The way information is presented in the statistics dialog has been simplified and clarified regarding "scripted" subcircuits and "built-in" vs "subcircuit" components.

* **#504: Scrolling in navigation breadcrumb:** If the navigation breadcrumb at the top of a circuit view becomes too wide for the available space, Antares now displays buttons that allow the user to scroll horizontally within the breadcrumb view.

* **#506: Edit property of multiple selected components in one go:** If you select multiple components of the same or simillar type, Antares now allows you to edit common properties of all these components in one go.

* **#509: New gate style "Verbose":** In addition to the existing gate styles "ANSII" and "IEC", Antares now supports another gate style "Verbose" whose box is the same as in "IEC", but the labels are more verbose (e.g. "AND" instead of "&"). This might be useful for beginners. Some have called this new feature "Noob mode".

* **#511: Display "drag" image when dragging components from explorer:** Standard drag&drop procedures require an application to display an image determined by the drag's origin to let the user know a drag operation has been started. This has now also been implemented in Antares.

# Bugfixes

* **#486: Wrong names of multiplexers in Standard Library:** Instead of e.g. "2x 4-4 Multiplexer", they are now called "2:1 Multiplexer 4 Bit".

* **#487: Repainting error in handles of wires with layout "None":** If a wire has layout "None", Antares draws rectangular handles at each corner of the wire. These handles allow you to freely position intermediate points of a wire. With certain (smaller) zoom factors, those handles were sometimes not correctly drawn. Parts of them could be cut-off due to an error in the bounding box calculation.

* **#491: Breadcrumb element too narrow for longer text:** Depending on the OS and the used font, the text in a breadcrumb element at the top of a circuit was sometimes be longer than the element itself. This has been fixed.

* **#496: Breadcrumb display is truncated:** When diving into multiple levels of a deep subcircuit hiearchy, the breadcrumb view above the main circuit was truncated around the middle of the main view width. This was a layout problem that is now fixed.

* **#496: Menu accelerator conflict ALT-CMD-F:** The menu accelerator ALT-CMD-F was both used for "Edit->Find" and "View->Zoom to fit (max. 100%)". "Edit->Find" now uses SHIFT-CMD-F.

* **#505: UI doesn't scale well everywhere with large UI font:** The user can change the UI font to a very large one. Some parts of the UI didn't adopt properly to such a large font. This has been fixed.

* **#507: Bit width annotations overlap in gate with more than 2 inputs:** If you have e.g an AND gate with 3 inputs, and you set the bit width to e.g. 8, every input pin displayed a bit width annotation "8", but since the pins are very close, the annotations overlapped with the neighbouring pin. Bit width annotations at inputs of gates are now only displayed if number of inputs <= 2, else only on the last input pin.

* **#508: Preference "Circuit -> Gate style" is not stored:** When changing the gate style e.g. to "IEC" and pressing "Apply" in the preferences dialog, the new value is immediately effective in open circuits. However, when closing Antares and restarting again, the old value "ANSI/IEEE" re-appeared. This has been fixed.

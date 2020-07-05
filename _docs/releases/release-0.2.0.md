---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: July 5, 2020

Along with lots of small features and bugfixes, this release contains a major rework of the entire
undo/redo system, which also required deep changes in the components attributes system.

Also note that Antares now shows an "Unexpected error" dialog whenever an error occured that was not
properly handled by the application logic. This helps me to catch otherwise undetected hidden bugs
and to make Antares more stable and robust. If you see such a dialog, please report it by
creating an issue on the [Antares GitHub page](https://github.com/flandreas/antares). If you can
reproduce the error, it would be helpful if you'd turn on debug level, reproduce the error,
and attach the log file to the created issue.

# Features

* **#8: Show scripts even if not circuit author.** The user was not able to inspect
scripts in circuits he is not the author of, because the script attribute in the attributes
view was read-only. This prevented the user from inspecting scripts in standard Library
circuits. You can now open the script dialog in read-only mode even when not being
the author of the circuit.

* **#9: Statistics for "deep" and "flat".** The statistics function in the "File" menu
now contains a second statistics view that counts the number of components regarding
a "flat" expansion of the circuit tree, which allows to see how using scripts
reduces the circuit tree in "flat" simulation mode.

* **#12: Choose user language in preferences.** The preferences dialog now supports to
choose the user language. Changing this preference requires restarting Antares.

* **#13: More port descriptions in standard library circuits.** A lot of the ports in standard
library circuits (although not all yet) have receive more descriptions, which helps
the user when using and connecting these subcircuits in his own circuits.

* **#14: Alignment attribute in text components.** Allows the user to set the horizontal and vertical
alignment of text components.

* **#15: I18N support in text component.** The text of text components can now be translated
in all supported languages.

* **#17: Draw text of selected rectangles.** The selection models of rectangles containing text
now also draws this text, which helps to distinguish multiple selected rectangles from each other.

* **#18: Customizable tunnel symbol.** The choice of the Antares tunnel symbol might be questionable.
There is now a alternative, more standard arrow-like symbol available. You can select in the preferences
which one is to be used.

* **#20: Highlight addressed cell in desktop memory view.** When opening a memory component
as top-level desktop view, the current address is now highlighted during simulation.

* **#Extend scripting DSL.** The Antares scripting DSL has been extended with the following functions.
See the user manual for an explanation of these new functions.
  * Word.subword()
  * Word.shiftLeft()
  * Word.shiftRight
  * CircuitElemModelBridge.load()
  * CircuitElemModelBridge.store()
  * CircuitElemModelBridge.hexWord()
  * CircuitElemModelBridge.undefinedWord()

# Bugfixes

* **#2: Undoing complex wiring can fail.** To fix this kind of problem, the entire
undo system had to be redesigned from scratch. Undoing and redoing edit actions
should now be much more robust.

* **#3: Splash screen not shown at start-up.** Antares always contained a splash screen,
but due to a packaging problem, it was not shown in release versions. This has been fixed.

* **#4: Cannot open certain library circuits**: Due to a bug in enforcing port name uniqueness,
  opening library circuits sometimes failed.

* **#7: Cannop open circuit after moving to another folder.** After moving a circuit in the explorer
from its current folder to another folder, the circuit couldn't be opened any more.
This has been fixed.

* **#10: Simulation not stopped when circuit is closed.** When closing the main circuit during
simulation, the simulation now gets stopped.

* **#11: Too short circuit input propagation delay when clicked.** When clicking a circuit input like a switch
during simulation, its standard short propagation delay could lead to not triggering edge-triggered input
ports. Circuit inputs now apply the propagation delay of switches (around 1000 ns) when clicked
with the mouse.

* **#16: Snapping of graphical component doesn't work.** The component-to-component snapping feature
didn't work properly for pure graphical components like rectangles. This has been fixed.

# Remarks

None.

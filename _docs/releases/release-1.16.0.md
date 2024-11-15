---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: November 15, 2024

Besides a couple of new components in the "Standard library", this release mainly features a lot of bugfixes, especially the severe ones #809 "Changing simulation speed can stall simulation" and #833 "Subcircuit not correctly simulated if already open at simulation start".

See also the new [tic-tac-toe](/docs/examples/tic-tac-toe/tic-tac-toe) example project.

# Features

* **#822: Library: More n bit multiplexers:** Added '4:1 Multiplexer n Bit' and '8:1 Multiplexer n Bit' to the Standard Library.

* **#827: Library: BCD counter with neg. async. clear:** Like SN74161.

* **#828: Library: JK flip-flop with async. neg. preset/clear inputs:** Added to the "Flip-Flops" folder in the Standard Library.



# Improvements

* **#809: Clean-up Standard Library:** Especially crop the open-ended wires in plexer/codec-type circuits.

* **#810 (Web): Panning with trackpad in Antares Web:** Panning using the trackpad in the web browser required to press CMD (activate wheel events), OPTION (switch from zooming to panning) and SHIFT. This only allowed to pan vertically. Now, in a web browser when using the trackpad, panning can be done by CMD + OPTION (on a Mac), or META + ALT (on Windows).

* **#812: Disable 'Zoom in' and 'Zoom out' actions if not in range:** Disable the "Zoom in" and "Zoom out" actions in the "View" menu if executing the action would push the zoom factor outside the min..max range.

* **#818: Don't show rating dialog when quitting Antares if no internet connection available:** If there is no internet connection, Antares showed the rating dialog, overlaid by an error dialog, because loading the rating aspects lead to an error. If there is no internet connection, Antares doesn't show the rating dialog anymore.

* **#820: Display subcircuit label in symbol editor tree:** The symbol editor tree now also displays the label (if any) of the corresponding subcircuit. This helps to add controls of subcircuits to the symbol if a circuit contains many subcircuits of the same type.

* **#823: Decrease label distance in bit width annotation:** The text of the bit with annotation was a little bit too far away from the wire. If pins of a subcircuit were close, it was not clear to which pin the annotation text belonged.

* **#826: Store height of bottom side bar:** When closing Antares, store the height of the bottom side bar (the one containing "Issues", "Log" and "Test results), so it can be re-established the next time Antares is started and the user opens the bottom side bar.

* **#834: Make the user manual more up-to-date:** Lots of typos, awkward formulations, and outdated content fixed.

# Bugfixes

* **#811: Changing simulation speed can stall simulation:**  If the simulation speed category was changed during simulation between "Observe" and "Explore", the simulation could be stalled due to a bug in how signal flow animations are handled. 

* **#761 (Web): Pan doesn't work in Chrome browser:** Panning a circuit by pressing middle mouse button & drag didn't work in Chrome browser. In Safari, it did.

* **#781 (Web): Web circuit viewer not zoomed to fit frame:** Web pages containing Antares Web circuit viewers embedded as frames didn't zoom to display the entire circuit with Chrome browser.
 
* **#784 (Web): Web circuit viewer is empty, no content at all:** In MS Edge browser, circuits weren't displayed at all.

* **#811: Selected 'Curve' is filled even if property 'filled' is false:** This has been fixed.

* **#812: Opening broken subcircuit reference leads to unexpected error:** If a circuit contained a broken reference (because the referenced circuit has been deleted in the meantime), double-clicking on the subcircuit symbol lead to an unexpected error.

* **#814: Opens on primary screen when closed on secondary screen:** If Antares was closed on secondary screen, it should also be opened there when started the next time.

* **#815: Redraw error in 'Real Switch' during simulation:** This has been fixed.

* **#816: Clock knob doesn't disappear when simulation is stopped:** Could occur especially when stopping simulation using keyboard shortcut CTRL-R.

* **#817: Menu Help->'Report bugs' leads to user manual:** Now leads to the GitHub issues page.

* **#819: Changed input/output name not reflected in symbol editor tree:** This has been fixed.

* **#821: Error when removing indirect controls from symbol:** If you removed a subcircuit from a symbol that was deeper down the hierarchy, an unexpected error occurred.

* **#824: Cannot enter 'Default value' in 'Parameter definitions' dialog:** The 'Default value' field was disabled. This has been fixed.

* **#825: Disassembly column not update after ROM import:** If a ROM component had a disassembly column configured, and the ROM contents were re-imported, the column contents were not updated in the contents table.

* **#829: Editor not activated when switching between circuit and symbol:** When switching between the circuit and symbol editor, the circuit editor is not correctly activated, and the properties view doesn't display the correct content. The user has to click in the drawing to activate the editor (and the selection tool), and then click again to select a component.

* **#833: Subcircuit not correctly simulated if already open at simulation start:** If a simulation on a main circuit was started, and there was already a subcircuit open in a second view, the simulation of that subcircuit might not have been correct. This was due to a bug that prevents the subcircuit from being correctly initialised at simulation start.

* **#836: Type of port not updated in symbol editor tree:** When the type of port was updated in a circuit (e.g. from "Input" to "Input/Output"), this change was not reflected in the tree of the symbol editor.

 
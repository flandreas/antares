---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: May 5, 2024

One of the most important achievements of this release is that we've hopefully fixed the annoying "Wiring bug", which lead to unexpected errors and, even worse, to components not being properly connected (even if this wasn't transparent when looking at the circuit), resulting in circuits not working correctly when simulated.

We know that this bug has cause a lot of frustration among users, and some of them have probably turned away from Antares because of it. We therefore dug deep into the code, and we even implemented a consistency check that ran in the background and posted an alert whenever it detected that situation. And we found it and fixed it!

We are sorry for the inconvenience this bug has caused in the past. Although we can't be entirely sure that the code location we've found is the only source of the issue, as the entire wiring logic is quite complex, but since the alert didn't come up again after the fix, we are confident that we have as least dramatically improved the quality of this part of Antares.

Besides that, we bring a lot of new features with this release, such as the new image capability, nested overlines, and some improvements in switches and keyboards. And, as usual, a couple of fixes for more minor bugs.

# Features

* **#717: Allow nesting of overbars / overlines:** Overbars in styled text can now be nested.

![Analog](/assets/releases/nested-overbars.png)

* **#729: Image component:** You can now import images (SVG as well as raster images) into your project and then use the in circuits or symbols as image elements.

![Analog](/assets/releases/import-image.png)

* **#731: Image switch component:** Based on feature #729, a new image switch component was introduced, which can be configured to display an image for each of its two states "on" and "off".

![Analog](/assets/releases/image-switch.gif)

* **#732: Switches with minimum "on time":** Switches have now a new property: A minimum on-time. If that is set and the mouse is released before this duration has passed, the switch will remain pressed until that time is over. This has benefits when debugging circuits with breakpoints and when using very large circuits and slow simulation speed, where the real duration the user holds the switch may be too fast in "simulation speed".

* **#733: Keyboard improvements:** The keyboard now supports certain control characters, e.g. ctrl+c or ESC. In addition to that, the keyboard has a new property allowing it to choose whether CR or LF is produced by the ENTER key.

# Improvements

* **#716: Sort tunnel names in tunnel property:** The drop-down for choosing tunnel names is not sorted ascending by tunnel names. Before, they appeared in random order.

* **#723: Colors not forwarded from circuit to symbol and from symbol to circuit:** Certain properties of switches were not forwarded to controls in symbols, and properties of geometry objects like lines in symbols were not used in subcircuit symbols. This has been fixed.

# Bugfixes

* **#713: Something's wrong with wiring:** Certain operations regarding wiring components could lead to components being not correctly wired on the model layer, resulting in simulations not working properly. A major cause for this problem has been identified and fixed.

* **#718: Delete test case doesn't remove node from tree:** If the user tried to do it again by right-clicking on the tree node to bring up the context menu, an unexpected error occurred. The node is now correctly removed.

* **#719: Error when exporting VHDL with an invalid test branch script:** In this case, an unexpected error occurred. Now, the export functions says "Test bench script is invalid".

* **#722: Error when pasting symbol part into circuit:** Copying an element from the symbol editor into the main circuit could lead to an unexpected error. This is now caught and ignored.

* **#724: Switch with internal label sometimes too narrow on Windows:** Rendering and measuring texts on Windows has generally been improved with this release.

* **#725: Keyboard component crashes if rich text markers are used:** Entering rich text control characters like "!" lead to an unexpected error. This has been fixed.

* **#726: Joining wires can lead to corrupt pin connections:** This was one of the causes of bug #713 "Something's wrong with wiring" and has now been fixed.

* **#727: Focusable components should overwrite global hotkey actions:** Certain characters which are also used as main menu hot keys (such as "space" for pausing simulation) were triggered when entered into a keyboard. This doesn't happen anymore.

* **#728: Simulation speed doesn't reach maximum:** When moving the speed slider as far as possible to the right side, the simulation speed wasn't set to the maximum, but only 99%. This has been fixed. Simulations now run up to 6 times faster than before.
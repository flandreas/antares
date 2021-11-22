---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: November 22, 2021

Along with a couple of bugfixes, of which "Error in 'Import Circuit'" was the
most severe one, there are some useful new features regarding transistors,
zooming/panning, and and change in the coloring of light-emitting components
in edit mode.

# Features

* **#235: Improve icons for certain screen resolutions:** Provided pre-rastered
icon images for 125% and 150% screen resolution, which add to the already
existing 100% and 200% screen resolutions. Especially useful when working
on Windows notebooks.

* **#237: Add "Inverter Circle" symbol for Transistors:** In addition to
the already existing "Bulk" symbol, you can now choose an "Inverter Circle"
icon for each transistor individually.

* **#238: Maintain Zoom/Pan when View is resized:** Prior to 0.14.0, after
choosing "Zoom to Fit (Max. 100%)" or "Zoom to Fit", this setting was not
preserved when the view was resized, often resulting in the need of manual
adjustments to make the circuit visible again. With 0.14.0, certain zoom/pan
requests are preserved with view size changes. This is particually useful
when opening additional views in the desktop, taking away view space from
the main view.

* **#239: Make Scenario Descriptions visible:** If there is not enough space
to display temporary scenario description texts, the zoom/pan is temporarily
adjusted to make the circuit and all scenario descriptions visible. Zoom/pan
is again automatically adjusted after these descriptions are gone. Think of
a rubberband mechanism that stretches zoom/pan to make all content visible.

* **#240: New view menu "Zoom Fit (Max. 100%)":** This view option has
already been automatically applied when opening a new circuit. The user
can request this zoom mode again after doing manual zoom/pan changes.

* **#245: Enable action 'Open in new window' during simulation":** You
can now open additional circuits in a new window even if the simulation
is running.

* **#249: Improve color of light-emitting components in edit mode":** Light
emitting comonents like 7-segment display and LED looked quite scary with
their large dark background, especially with a bright theme. This has
been redesigned for edit mode.

# Bugfixes

* **#243: Wrong signal propagation with weak signals:** Signal propagation
did not lead to correct results in certain scenarios involving weak signals
from pull resistors. This has been fixed.

* **#244: Selection state of rectangual components not displayed:** When selecting rectangular components like rectangle, ellipse, text etc (all those that show square handles for adjusting the size) didn't show selection state when selected by click, selection box, or "Select All".

* **#246: Some edit actions are not disabled during simulation:** Some menu items like
for scenarios, usecases and "Open Recent" where available during simulation. They are
now disabled during simulation.

* **#247: Don't zoom-auto-switch to symbol editor during simulation:** Antares has a feature that automatically switches from the circuit editor to the symbol editor when applying very small zoom factors. When zooming away from the circuit with ever larger zoom factors, the view "leaves" the circuit and the user sees it from "outside", which is the symbol. This
doesn't make sense during simulation.

* **#248: Don't display execution info label for Controls:** Circuits elements draw an execution info label during single-step simulation displaying how long this element is waiting (propagation delay). Some of these circuits such as LED and switch can be used in sub circuits as "controls". These controls showed their execution info label when being contained
in a subcircuit symbol. This is not desired and has been fixed.

* **#250: Error in 'Import Circuit':** A bug in the error circuit code prevented you
from importing circuit bundles. This has been fixed.

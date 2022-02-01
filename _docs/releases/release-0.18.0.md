---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: February 1, 2022

Besides the usual small bugfixes,release 0.18.0 brings a refresh of the UI's look & feel,
support for rotating entire selections of components, and a lot of new description text
for component properties.

# Features

* **#278: More property descriptions in property window:** The property window now displays
a description of the selected property. Use the buttons in the window's header to hide the
descriptions or to change the sort order.

* **#281: Show simulation time in status bar:** The current setting "Show simulation time in
status bar" is now stored. However, even if set, the status bar is only updated if the
simulation speed category is not faster that "Observe".

* **#282: Renaming Circuits:** The explorer tree now contains a popup menu item allowing
you to rename a circuit. Note that the menu item is disabled as long as there are unsaved
changes in the circuit.

* **#285: Rotate entire selection:** You can now select multiple components and rotate them
around the origin of one of the selected components.

* **#289: Use newest version of Look & Feel library:** You might will experience some slight changes in the UI. These are mainly bugfixes, so overall it still looks and feels quite the same.

* **#294: Select polylines by clicking on enclosed area:** Rather that only on the outline,
you can now select a polyline by clicking on its enclosed area.

# Bugfixes

* **#268: Using extra mouse button makes Antares crash:** The event handling code is now
more robust regarding event from unexpected sources, such as unsupported mouse buttons.

* **#290: Symbol pin labels don't stay upright when symbol is rotated:** A regression
problem that has been fixed. Symbol pin labels now stay upright when rotated.

* **#291: 7-Segment-Display pin scheme 'Separate' only with size 'Large':** The previous
version didn't prevent you from selecting pin scheme 'Separate' together with small
7-Segment displays. This has been fixed.

* **#292: Issues with property window title:** The property window title was sometimes
not present when it should have. This has been fixed.

* **#293: View content flickering:** The content of the main circuit view flickered in
certain situations (open first circuit after start, open circuit after having closed another).

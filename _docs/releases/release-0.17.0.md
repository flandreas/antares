---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: January 20, 2022

Release 0.17.0 brings important fixes for some bugs, amongst of which #276 being the worst,
as it prevented users from changing the name of a circuit.

The new features include the brand new SVG export, zooming at the mouse cursor location,
some convenience features for DIP Switches, some extensions to the scripting DSL, and
support for rotating all built-in components using the keyboard.

# Features

* **#265: SVG Export:** Allows you to export a circuit diagram to SVG using the
new menu item in the "File" menu. Uses the current theme. Consider switching to theme
"Black & White" prior to exporting if you need a classic, publishing-capable look.

* **#266: DSL function bits():** Antares DSL has been extended by a new function
allowing you to retrieve n consecutive bits from a digital signal or a number.

* **#268: Retain DIP Switch state between simulation runs:** DIP Switch now has
a new property "Retain value between simulations". If set, the DIP Switch retains
its current value between multiple simulation runs.

* **#269: Change all switches of a DIP Switch using ALT:** When clicking on a DIP Switch during simulation, ALL switches of the same DIP Switch component are switched when pressing the ALT key at the same time.

* **#271: Zoom centered to cursor position when using scroll wheel:** When zooming using
the mouse wheel, zooming is now centered at the mouse cursor position.

* **#273: Constant can not be rotated using ctrl+r or right click:** Constant, Probe and
DIP Switch can now be rotated using ctrl+r or using the right click popup menu.

# Bugfixes

* **#267: Missing code logcation in DSL errors from function calls:** DSL errors displayed in Antares' "Issues" tab always indicated 0:0 if the error occurred during a function call. DSL issue
now indicate the location of the problem using row:column.

* **#270: RAM produces D signal change even if WR is 1:** This could lead to strange behavior
if multiple RAMs connect their D port on the same bus. Fixed.

* **#272: Error when connecting input port to existing wire:** The wire connection
algorithms have been stabilized to better behave with unexpected user input.

* **#274: Wrong descripion of "Video RAM" component:** The description of the Video RAM
component was the same as that of the "RAM" component. This has been fixed.

* **#275: Properties window editable after diving into subcircuit:** After diving into
a subcircuit, the property window let the user edit the properties of the subcircuit, which
should not be allowed. This has been fixed.

* **#276: Circuit properties not displayed:** Due to a bug introduces with release 0.16,
circuit properties were not displayed any more when clicking on the circuit's background.
Besides others, this prevented users from changing the name of a circuit.

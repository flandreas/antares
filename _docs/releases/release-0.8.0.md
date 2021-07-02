---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: July 2, 2021

Release 0.8.0 brings a couple of new features and improvements, as well
as a fix for a regression bug preventing some components from being
rotated.

# Features

* **#151: Button names are visible in symbol editor:** The user can now choose
the label position (including "hide") of an LED control in a circuit symbol. This
setting is independent of the corresponding property of the LED in the origin
circuit.

* **#157: Add different units for period to clock:** The user can now define
a clock's "Period/Frequency" property in various formats, e.g. "1 s", "100 ms",
"5 Hz" or "1 kHz". Supported are the following units: s, ms, us, ns, Hz, kHz, MHz, GHz.

* **#158: Add unit to propagation delay:** The label of the propagation delay
property field now states that the entered value is in nanoseconds.

* **#188: Purely scripted components:** A circuit now has in addition to the
existing property "Function" a new property "Always use function", which allows
to develop purely scripted components. If this property is set, the configured
function script gets executed even with shallow simulation mode.

* **#199: Tunnels as "Net Combiner" components:** Tunnel components now support
zero propagation delay signal propagation just like splitters and circuit
input/outputs already do.

* **#200: Gradient color on pull resistors:** Instead of drawing inactive
pull resistors in blue (undefined) color, a pull resistor now applies a
color gradient from the color of its pull signal to the color of the wire's
current signal.

* **#202: Signal flow animation/single step simulation improvements:** Various
bugfixes and improvements:
- Fixes the glowing/blinking rendering of various components
- Omit signal flow animation during simulation start-up and circuit state settlement
- Omit soft breakpoints during during simulation start-up and circuit state settlement
- Stop glowing of sub circuit symbol once the first output signal appears
- Stop all glowing when quitting single step mode
- Avoid necessity of clicking 2x "Resume" for a closed sub circuit
- Synchronize all running glowings to the same rhythm in order to reduce visual irritation

* **#204: Improve look of DIP Switch:** By removing the border from the DIP switch
and placing the bit index labels inside the switches, the component now looks much
more elegant.

# Bugfixes

* **#69: Delete wire between two junctions:** Deleting a wire between two junctions
lead to two visually independent nets whose models where still connected, leading
to both having the same signal during simulation.

* **#203: "Orientation" property not available any more:** A regression bug in
0.7.0 prevented the orientation property from being available for various components.

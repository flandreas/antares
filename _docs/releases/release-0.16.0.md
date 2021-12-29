---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: December 29, 2021

Besides the usual small bug fixes, release 0.16.0 brings significant improvements
in signal flow animations, a lot of new n-bit components in the standard library,
and the brand new "Video RAM" component that allows your circuit to display images.

# Features

* **#176: VGA Display Component:** Displays the contents of a RAM as an image.

* **#257: Omit signal flow animation during simulation start-up:** After setting
the new circuit's property "Start-up Duration (ns)", signal flow animations, which
look chaotic during simulation start-up, are omitted during this period.

* **#260: Add more n bit components to standard library:** Takes advantage of the new
"Parametrized Circuits" feature and adds more (scripted) n bit components to the
standard library: Multiplexer, Register, Counter, Comparator, Bit Selector, Shifter.

* **#261: Add Bit Width 3 and 5:** Mainly used for generic select inputs of plexers.

* **#262: Exponential operator and log2() function in scripting DSL:** Needed in
bit with parameter expressions.


# Bugfixes

* **#258: Avoid signal flow animation for unchanged wires:** Signal flow animations
are now avoided if the new signal at an output pin would not change the signal
of the wire.

* **#259: Error when changing Bit Width in some components:** This bug was supposed
to be fixed in release 0.15.1, which failed to do so for ROM components. This has
been fixed now.

* **#263: Behavior with undefined signals in scripting DSL:** Evaluation of undefined (or partially undefined) signals in arithmetic expressions resulted in a controlled error issue in the issues tab saying e.g. "Undefined signal at 1:13". This prevented scripted subcircuits with unconnected pins from being simulated. The scripting DSL now also uses
the system preference "Undefined Gate Input Behavior" for replacing undefined signals
with defined ones.

* **#264: Avoid deep subcircuit loading with shallow simulations:** Antares now omits loading a subcircuit if shallow simulation is selected and a sub circuit has an execution script. Tests with "Tanenbaum Microcomputer" showed that the simulation now starts much faster.

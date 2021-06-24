---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: June 24, 2021

Release 0.7.0 brings some new components user's have requested, as well as
some features that make editing circuits easiert. It also fixes a severe
bug in the persistence subsystem that lead to a lot unexpected errors.

Also check out the new sample circuit ["Sine Wave"](/docs/examples/sine-wave/sine-wave)
that showcases a fun application of the "controls" feature, including the new
possiblity to change a clock's period on a circuit's symbol.

# Features

* **#113: Negated inputs on gates:** The inputs of logic gates can now be
negated individually. The negation is not also used for calculating the gate's
output value, but also applies to the gate's mnemonic and the truth table
displayed as tooltip above the gate.

* **#126: Clock as symbol control:** Clock components can now be added as
controls to the circuit's symbol. It is displayed as a small knob and shows
the same big knob also displayed in the circuit when hovering the mouse over
the clock, allowing to change the clock's period during simulation. See also
the new example circuit "Sine Wave" showcasing this new feature.

* **#131: Joystick component:** This release brings an entirely new
joystick component that allows to translate a user's x/y input in a rotation
device to two corresponding signals. See the [User Manual](/user-manual/english/base-library/joystick.html)
for a description these signal's encoding.

* **#134: Allow reconnecting existing net to an input/output:** When connecting
components by wires, the user can now create a new wire from an existing wire
to an output port, but only if this output port is the only output connected
to the newly formed net.

* **#137: Allow setting of "Number of Inputs" property of connected gates:** Before
release 0.7.0, it was not possible to change the "Number of Inputs" property of
a logic gate if it was already connected. This restriction has now been resolved.

* **#144: Real Switch:** A new component "Real Switch" has been added to the
standard libraries. It is a bi-directional switch with two ports that attempts
to behave like a real world switch.

* **#166: More (RGB) LED suggestions:** The LED and RGB LED component have been
extenden with a couple of new features:
1. Support of 3 different sizes
2. Property for omitting the border, allowing to build seamless areas of multiple LEDs
3. RGB LED is now displayed entirly black when the simulation is started.

# Bugfixes

* **#167: Unconnected Probe shows that it is connected:** Unconnected probes
now show an "undefined" signal.

* **#170: Tri-State Buffer wire glitching when changing control input..:** When
changing the "Logic" property of a Tri-State Buffer, connected wires where
afterwards displayed with a small gap. This has been fixed.

* **#171: Why do outputs have a 'Switch' property?:** This is not necessary
and has been removed.

* **#172/#173: Error when starting simulation:** Due to a severe bug in the persistence
logic, all use cases involving cloning of circuit graphs could lead to unexpected
errors when using these circuits. This often occured when starting the simulation,
but could also occur when diving into a sub-circuit.

* **#174: Error when zooming into sub-circuit:** Same as #172 and #173.

* **#178: Tri-State buffer negation doesn't change mnemonic:** The mnemonic
of tri-state buffers didn't respect the control input's logic. This has been
fixed.

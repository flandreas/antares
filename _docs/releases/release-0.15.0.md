---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: December 14, 2021

Release 0.15 brings the powerful feature "Generic Parameters of Subcircuits" that
allows you to parametrize a circuit with a bit width and choose the actual bit width
when using the circuit as a sub circuit.

Another fun feature is the new buzzer component, which you can you to play sounds
of arbitrary frequency and volume.

In addition to that, the standard library has been extended by new n-bit
adder, substractor, multiplier and divider components.

# Features

* **#152: Generic Parameters of subcircuits:** Allows you to define parameters
in a circuit, and when using this circuit as sub circuit, provide a value for
each of these parameters. Currently supports only parameters of type "Bit Width".

* **#210: A sound player / Speaker component:** Use this new component to
play sounds of a given frequency and volume.

* **#251: New Property "Show Controls" in Sub Circuit Symbols:** Specify whether
controls in sub circuit symbols should be displayed always, only during simulation,
or never.

* **#252: Add more controls to symbols of the standard's libary circuits:** The Symbols
of any standard library circuits such as flip flops or plexers now contain now
contain a control that displays the state of the component during simulation.

* **#253: Library: Add n-bit arithmetic components:** By using the new generic
parameters feature #152, the standard library has been extended by scripted
n-bit versions of an adder, substractor, multiplier and divider.

# Bugfixes

* **#254: Descriptions of Circuit Ports not consistently stored:** Multi-language descriptions of circuit ports sometimes stored the former text along with the new version. Depending on the use case, this could lead to the situation that the former text kept coming back although you desperately tried to change it.

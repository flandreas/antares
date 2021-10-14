---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: October 14, 2021

The biggest and most important new feature in release 0.13.0 surely is
Antares' entirely new script language. This new language makes it much
easier to write scripts for subcircuit logic, scenarios and usecases.

As an example, let's look at the execution script for a half adder. The old script looks like this:

```
var a = elem.inputBit("A");
var b = elem.inputBit("B");
elem.setOutputBit("S", (a || b) && !(a && b));
elem.setOutputBit("C", a && b);
```

Using the new scripting language, the script now looks like this:

```
S = (A or B) and not (A and B)
C = A and B
```

Checkout ["Scripting"](/user-manual/english/scripting/scripting) for an overview on scripting
and ["Antares Scripting DSL"](/user-manual/english/scripting/scripting-dsl) for
the language description.

> :warning: **Breaking Change**: The old JavaScript based language is not supported
> any more. After having installed 0.13.0, you need to rewrite your existing
> scripts in the new language. If you didn't use scripting so far, no action
> is required.

Other nice features you might also enjoy are the new single step mode,
the new popup keyboard on hex/decimal circuit inputs, and the possibility
to write subcircuit symbol scripts that change a symbol's label
during simulation.

# Features

* **#201: A more user friendly scripting language:** The former JavaScript
based scripting language of Antares has been replaced by an entirey new
custom DSL (domain specific language).

* **#223: Pause simulation by pressing space:** The simulation's single step
mode has been reworked from ground up. You can now pause/resume the simulation
also when not in single step mode, and you can even pause ongoing signal
flow animations.

* **#231: Change symbol label during simulation using scripts:** A new function
in the new scripting DSL now allows you to write a script for a subcircuit's
symbol that can change a symbol's label during simulation. Used e.g. in
the ALU symbol of the Tanenbaum example circuit, where the ALU's label
now describes the current arithmetic function of the ALU (A + B, A and B, not A etc.).
Also used in the shifter of the Tanenbaum CPU.

* **#232: Popup keyboard for circuit inputs:** If you click on a digit of
a subcircuit input that uses hex or decimal signal representation, Antares
now displays a popup keyboard that allows you to enter digits using the mouse.
Also usefull when using the web version on touch devices.

# Bugfixes

* **#230: Edited ROM cells cannot be stored:** A bug could prevent manual
ROM cell edits from being saved. This has been fixed.

* **#233: Issues with separate circuit viewer:** There were several issues
with the new feature "Separate Circuit Viewer" introduced with release
5.12, especially repainting problems and missing simulation tool menu. These
have been fixed.

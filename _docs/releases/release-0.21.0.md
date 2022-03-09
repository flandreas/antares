---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: March 9, 2022

Release 0.21.0 brings the entirely new module "Synthesis", which allows you to define
truth tables, to let Antares create optimized boolean expressions from a truth table,
and finally generate a circuit that realizes these expressions. See the corresponding new chapter ["Synthesis"](/user-manual/english/circuits/synthesis) in the user manual for an explanation of these new features.

Besides that, zoom factors and camera positions (pan) when diving into sub circuits and
returing from sub circuits have been substantially improved.

# Features

* **#316: Cancel Drawing Tools with ESC:** All drawing tools (rectangle, ellipse etc.)
now support cancelling the operation by pressing ESC.

* **#318: Use "Zoom to Fit (Max. 100%)" when diving into sub circuit:** In the previous version, zoom factor 100% was always applied after having dived into a sub circuit. Large sub circuits were therefore often not entirely visible. Now, zoom mode "Zoom to Fit (Max. 100%)" gets applied
when diving into a sub circuit.

* **#319: Plugin for minimizing Boolean Algebra:** You can now create truth tables, fill
in output values for all possible input combinations, and let Antares generate optimized
boolean expressions (DNF) for the truth table. See the corresponding new chapter ["Synthesis"](/user-manual/english/circuits/synthesis) in the user manual.

* **#321: Create Circuit from Boolean Expression:** As an extension of the new feature #319,
you can also let Antares create a circuit that realizes boolean expressions.

# Bugfixes

* **#314: Zooming into a Subcircuit and returning changes Camera Position:**
When you zoomed into a sub circuit and returned then from the sub circuit to the Main Circuit, the View Coordinates differed from the View Coordinates when you dived into the Subcircuit.
This has been fixed.

* **#317: Circuit Properties sometines read-only:** If the user viewed a read-only circuit (e.g. one of the standard library), and then opened one of her own circuits, the properties window was initially ready-only, which was wrong. The user had to select any component and then click on the circuit background to make the circuit properties editable. This has been fixed.

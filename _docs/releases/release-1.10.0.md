---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: January 3, 2024

Besides some improvements of the VHDL export feature, the main new feature of this release are analog circuits.

![Analog](/assets/images/user-manual/circuits/analog/analog.gif)

Use the analog module to play around with electrical voltage and current, experience Ohm’s and Kirchhoff’s law through current flow simulation and voltage display by color, and build logic gates from real MOSFETs, but don’t expect Antares to be a fully-fledged analog simulator tool.

See the corresponding chapter in the ["User Manual](/user-manual/english/circuits/analog-circuits) for a description of how to use analog circuits.

> :warning: **Breaking Change #681**: The introduction of floating-point values in Antares scripting DSL made it necessary to change the syntax of pin reference used e.g. in scenario script. Prior to this release, you could write pin references as `#2.1`, where as now the new syntax is `#2:1`. If you are using this feature, you'll have to change your scripts. Sorry for the inconvenience.


# Features

* **#523: Analog circuits:** Add analog circuits to your projects to play around with electrical current and voltage, and to build logic gates from analog MOSFET transistors.

* **#637: Tri-state buffer lacks property "Output name" and "Negate input":** These properties are now available.

* **#678: Rotate components while dragging into circuit:** You can now press CMD+R to rotate a component while dragging it into a circuit.

* **#681: Support floating point values in Antares scripting:** This was required to support various scripting applications in the new analog module, such as formulating scenario conditions based on voltage values.

* **#682: XOR figure in "Circuit Symbols" of symbol editor:** The symbol editor now features a pre-defined XOR figure you can use when building your custom XOR gate implementations, e.g. using the new analog module.

# Improvements

* **#677: VHDL entity names:** Entity names in exported VHDL files are now derived from the actual circuit's name, and not "main" and some UUID any more.

* **#680: Open "Issues" tab when a new issue has occurred:** In certain situation, issues can occur, like when starting the simulation, and your execution script has an error. After showing a toast for a short time, these issues are added to the "Issues" tab, were they often remain unnoticed. Antares now opens the "Issues" tab whenever a new issue occurs.

* **#683: "Origin" property in issues from scenarios:** If execution of a scenario or a scenario step results in an issue that is displayed in the "Issues" that, e.g. due to an error in the user's script, the property "Origin" was simply the name of the scenario, e.g. "Test", which could be confusing. The user couldn't tell whether the issue originates from execution of circuit logic or from a problem with a scenario. The "Origin" property now makes this more clear, e.g. by "Scenario 'Test'".

# Bugfixes

* **#676: VHDL - Cannot export standard lib circuits with unconnected outputs:** The restriction has now been relaxed to "unconnected input pins". Unconnected output pin don't prevent you from exporting to VHDL any more.

* **#679: Pin coincidence warning is resolved by simply selecting a component:** Antares displays little red circles on pins to warn you if pins coincide without being connected by a net. This feature has been introduced with one of the recent releases. However, if you simply selected one of the two components being part of this situation, the conflicting pins were connected right away, which is not what is intended. This has been fixed.
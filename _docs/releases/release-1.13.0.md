---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: June 14, 2024

Starting with this release, you can upload your projects to the cloud and embed circuits in your own web pages, where users can simulate them.

This might be useful for hobbyists who want to share their projects with others, or for teachers and authors of textbooks who want you enrich their educational online content with interactive circuits.

See the ["User Manual](/user-manual/english/web/web-publishing) for how to publish your projects.

Note that the "Web publishing" feature is still in experimental mode. Try it out, give us feedback, but don't use it for production yet. We are free to take the feature down at any time, or change it without guaranteed backward compatability.

In order to limit cloud costs, you can currently only upload 2 projects, each having not more than 10 circuits. Contact us if you need more.

# Features

* **#474: New circuit parameter type "Number":** The "generic circuit parameter" feature now also supports numeric parameters. Up to now, only bit width was supported. This is a prerequisite for feature #748 "Configurable propagation delays in standard library circuits".

* **#684: Display & simulate circuits in web browsers:** You can now upload projects you've designed in Antares Desktop to your "Antares Web" account, and design web pages with embedded circuits from your projects.

* **#708: Octal signal representation:** In addition to the already existing binary, decimal and hexadecimal representations, Antares now also supports octal.

* **#734: User preference for "Gate propagation delay:** Prior to this release, the default of 20 ns was hard-coded. You can now change the default propagation delay for logic gates n the user preferences.

* **#747: Calculate a circuit's propagation delay:** Circuits in the explorer tree now offer a new function for calculating the circuit's propagation delay based on the individual component delays.

* **#748: Configurable propagation delays in "Standard Library" circuits:** Most of the circuits in the standard library have been equipped with propagation delay parameters. This allows you to define the timing of these subcircuits to fit your project's needs.

* **#752: Display list of IDs of selected components:** Displays a comma-separated list of the IDs of all selected components in a dialog.
  Useful when writing scenarios that highlight certain components, which requires entering the list of IDs.

* **#753: Support highlighting of analog components:** Writing scenarios can include highlighting certain components. Components must define how they want to be highlighted by registering highlight models. This was still missing for analog components.

# Improvements

* **#737: Improve LED colors:** The LED colors have been improved, especially those used for "off" state during simulation. They were too bright, and orange "off" could have been misinterpreted too easily as red "on".

* **#746: Odd visual circuit state with slow simulation speeds:** When simulating a circuit at slow speed, the rendered circuit state (wire colours, LEDs, counter outputs etc.) was odd. The circuit worked correctly, but the way it was displayed during simulation was not what the user expects at slow speed. The circuit seemed to make large jumps, while the visual representation was updated only once in a while. This has been improved to be smoother.

* **#749: Keep oscilloscope scale across simulation runs:** The oscilloscope's scale is not reset any more when the simulation stops.

# Bugfixes

* **#429: Cannot export projects containing a question mark in its name:** This has been fixed.

* **#661: Wrong validation message when clearing "Name" property:** When trying to clear a translatable "Name" property, such as in the circuit properties window or in the use case property window, a red validation message saying "no translation available" appeared. This is now more something like "Empty name not allowed".

* **#702: Wrong parsing of DSL "if" statements with terms in conditions:** DSL if-statements with certain terms like in `if (24 == 2 * 12) {}` where not correctly parsed. This has been fixed. Such terms are now parsed like you would expect.

* **#739: No hourglass mouse pointer while opening large circuits:** Antares now displays an hourglass mouse pointer while it opens a circuit.

* **#740: Analog "Light Bulb" doesn't store "resistance" property:** This has been fixed.

* **#741: Analog circuit input displays wrong voltage at simulation start:** It displayed the last value from the previous simulation run. This has been fixed.

* **#743: Cannot overwrite switch propagation delay:** Since #574, a switch's interactive propagation delay was initialised from the corresponding user preference, defaulting to 1'000 ns. This propagation delay was applied when toggling a switch by clicking with the mouse or pressing ENTER on a focused switch. However, the property "Propagation delay" of switch was then not used anymore. This was wrong. The user now has to possibility to choose other propagation delays for specific switches.

* **#744: Error when setting clock period to the max. value:** This has been fixed.

* **#745: Wire gap after changing "Logic" property of subcircuit pin:** This has been fixed.

* **#751: Analog light bulb doesn't glow according to min/max current properties:** The brightness of the bulb color during simulation was not correctly calculated. Especially if current was below minimum, or with negative currents, the brightness was too big.
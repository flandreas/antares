---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: May 25, 2022

Starting with this release, Antares can now generate a default symbol for your sub circuits. Use user preference "Circuit -> Style of generated symbols" to choose
whether you want to use this feature, and if so, choose from one of two available symbol styles.

![Narrow](/assets/images/user-manual/subcircuits/generate_narrow-symbol.png)
![Wide](/assets/images/user-manual/subcircuits/generate_wide_symbol.png)

Check out the new section ["Automatic Symbol Generation"](/user-manual/english/subcircuits/subcircuits) in the user manual for a description of this new feature.

# Features

* **#374: Generate default circuit symbol:** In order to increase usability, especially for beginners, Antares can now generate a default symbol in the symbol editor while the user is building the main circuit.

# Bugfixes

* **#379: Symbol of generated circuit doesn't account for pin name length:** When generating a circuit from a truth table or boolean expressions, Antares automatically builds a default symbol for the generated circuit. However, this symbol didn't account for the length of the pin names. With long pin names, the symbol's box was too narrow.

* **#380: 'Cancel' in 'Edit Symbol' action doesn't work:** When opening the symbol editor on a subcircuit using action "Edit Symbol" and closing the dialog with "Cancel", it was treated like the user had pressed "OK", i.e. an undoable command was generated and "Save" got enabled.

* **#381: Focused circuit inputs react to menu item accelerator keys:** If a circuit
input possessed input focus and the user entered the accelerator key of a menu item,
the corresponding key was also handled by the circuit input, resulting in a "shake annimation" to indicate that the input has been rejected. Keyboard inputs with an associated modifier like CTRL or ALT are now ignored by circuit inputs.

* **#382: Description of 'Pull Resistor' wrong if pull direction is 'high':** Even if pull direction was "high", the description in the tooltip said "..pulls a wire to 0". This has been fixed.

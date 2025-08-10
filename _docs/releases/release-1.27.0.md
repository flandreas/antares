---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: August 10, 2025

Maintenance release.

# Features

None.

# Improvements

**#987: Validation when changing circuit's 'Wire logic' to 'Conflict':** When changing a circuit's "Wire logic" property from "Wired OR" to "Conflict", Antares now checks whether any existing net contains more than one conflicting output pin.

# Bugfixes

**#985: System malfunction after 'Extract to subcircuit':** The new subcircuit that replaces the former AND gate wasn't properly connected on the net layer.

**#986: System malfunction 'Inconsistent symbol pin bit width':** User installations reported that it can occur that the bit width of circuit inputs/outputs suddenly start to differ from those of the corresponding pin in the symbol. This could occur when opening subcircuits containing circuit inputs/outputs with the same name as one in the main circuit.

**#988: Error when connecting a pin to a wire:** Depending on the geometry of the target wire to which the new wire is connected, an error could occur. This has been fixed.

**#989: System malfunction after joining and deleting wires:** See the scenario description in the Github issue description.

**#990: Error when closing properties dialog of built-in library with 'OK':** Antares tried to save the contents of the dialog (although read-only, and nothing has changed), where it shouldn't. Since the library is read-only, an error occurred.

**#991: Error with broken reference to subcircuit control:** If a subcircuit's symbol contains a control linked with a component deep down in the hierarchy, and that component is removed from its circuit, an error occurred when starting the simulation of the main circuit, or when diving into the subcircuit. Antares now displays a "Broken reference" annotation in the symbol.





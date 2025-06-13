---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: June 13, 2025

Besides fixes of a couple of 'Unexpected errors' reported by the new feature that uploads descriptions of these errors, a new notable feature is "Auto-adjust bit with when connecting components".

If you connect a new component that has a bit width property (e.g. a circuit input) with a wire whose bit with is already determined (e.g. by a 4-bit circuit output), the bit width of the newly added component is automatically adjusted to match the net's bit width. If you don't like this feature, you can disable it in the user preference "Circuit -> Adjust bit width to connected net".

# Features

**#664: Auto-adjust bit width when connecting components:** When a component with variable bit width is connected to a net whose bit width is determined by another component with fix bit width, the bit width of the first component is automatically set to the wire's bit width.

**#691: Allow analog output to 'pull current' (optional):** Introduced an option (on output level) where the user can choose whether a certain amount of current should flow out of the circuit through an output, in which case the simulation treats the output as if it was connected to ground through a resistor R.

# Improvements

None.

# Bugfixes

**#937: Multiplexer clock in '8x8 LED Matrix with Ctrl' not enabled:** This prevented the circuit in the standard library from working correctly.

**#938: Error in rating dialog after committing ratings:** Antares tries to display a "Thank you!" dialog, but that failed due to a missing translation resource.

**#939: Error when undoing a 'Move wire segment' action:** In certain situations, undoing moving a wire segment could lead to an unexpected error.

**#940: Error when creating wire from pin to another wire:** Same cause as in #939.

**#941: Error when closing dialog 'Do you want to save?' with top-left dialog buttons:** If you didn't click on one of the 3 buttons "Cancel", "No" or "Yes" to answer the question, but instead closed the dialog using the top-left dialog button, an error occurred. The dialog from the Java library returns -1, which was not handled by Antares.

**#942: Error when creating wire ending in a new junction on existing wire:** Depending on the shape of the target wire, the wire tool did locate the target wire when hovering over it, but failed to snap to the grid, resulting in a state not correctly handled by Antares.

**#943: Error when clicking on oscilloscope buttons in subcircuit:** When clicking on oscilloscope buttons in subcircuits (or in a non-editable circuit), an error occurred. This has been fixed by disabling the buttons in these situations.






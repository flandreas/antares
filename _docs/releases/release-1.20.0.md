---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: May 29, 2025

Besides many bugfixes and various improvements, this release contains a new "Documentation" feature that allows you to write a Markdown document for each circuit. The editor features syntax highlighting, and the viewer renders your Markdown document in HTML.

# Features

**#899: Online update of error logs:** Antares now uploads a stack trace to Antares Web if an unexpected error occurs. The user still sees the "Unexpected error" dialog where he is asked to export the entire log file and create a GitHub issue.

**#918: Circuit documentation (Markup):** Allow the user to document a circuit by writing text formatted in Markdown. In addition to the existing "Circuit" and "Symbol" areas, this is a third "Documentation" area.

**#923: Control pulse width in clock component:** The "Clock" component now has a "Off time (%)" property you can use to fine-tune the up/down durations of the clock signal.

# Improvements

**#772: Foreground/border of color 'Blue' could be darker with dark mode theme:** Changed the standard blue color to be darker in dark mode.

**#921: Tips in status bar for using the wire tool:** Information on how to create wires in the various states of the tool.

**#925: Input and output names should start with 'I' and 'O' instead of 'I1' and 'O1':** Same with input/output starting with "IO". The next assigned name in the sequence remains "I2" and "O2" respectively.

**#926: Display toasts longer for larger texts:** Toasts showing long texts are now displayed longer.

**#929: IEC symbol for tri-state buffer:** In the former implementation, the ICE symbol for tri-state buffers was the same as in the American ANSI style, i.e. the triangle. This didn't fit well with the more rectangular-like shapes of the other gate symbols. IEC-mode now displays a rectangular symbol with an output pin annotation. Use user preference "Circuit -> Display tri-state buffer as triangle" to change this behaviour.

**#930: Subcircuit controls are drawn below graphics produced by custom scripts:** A subcircuit symbol can have a "Representation during simulation" scripts that draws custom graphics, e.g. the data flow path through a multiplexer. If the symbol also contains controls, the custom graphics was drawn above the control. This didn't look nice and was changed.

**#933: Enable 'Select' actions for read-only circuits:** Some select actions were disabled, but selecting components is required to see their properties, even if the circuit is read-only.

**#935: 'Break' component with freely definable signal value:** In the former version, the break component had a "Logic" property and always a 1-bit input. If "Logic" is positive and the signal at the input is 1, the breakpoint is triggered (if the simulation runs in single-step mode). The break component now has an n-bit input, and you can define the n-bit value that triggers the breakpoint.

# Bugfixes

**#916: Wrong animated simulation state after speed change:** When using signal flow animation, changing the simulation speed from category "Explore" to "Observe" could result in an incorrect circuit state being displayed. This has been fixed.

**#917: Real switch drawn in wrong color in case of signal conflict:** Was drawn in signal color. Now drawn in error color.

**#919: Main title disappears when bottom sidebar view is displayed:** The main title "Circuit Editor" or "Symbol editor" disappeared for good once a bottom sidebar view (e.g. "Issues") was displayed.

**#920: Error in simulation with invisible oscilloscope:** If a circuit contains an invisible oscilloscope, an error occurred when starting the simulation. This bug was introduced in #912 with release 1.19.

**#922: Double-throw switch initialisation with circuit input/output:** If a double-throw switch is connected to bi-directional circuit inputs/outputs, and the button is toggled after simulation start, a conflicting signal situation occurred. The corresponding situation with simple "Real switch" works fine.

**#924: Cannot open subcircuit in additional view: 'Already open':** In certain situations, a subcircuit could not be opened in an additional desktop view, e.g. by ALT-clicking on the symbol. Antares said "Component is already open". This has been fixed.

**#927: Cannot set 'Number of outputs' in wire tap to 8:** It said: "Max. 8 output ports allowed in WireTap". This is the correct message, but the code restricts it to 7. This has been fixed. 

**#928: Tree root handle not displayed:** In most trees in Antares, the tree root handle was not displayed, even if the root node is expandable/collapsible. This could be confusing and has been changed. If you don't like that, there is a new user preference "View -> Show tree root handles" you can use to change this behaviour.

**#931: HTML links in dialogs not readable with dark mode:** The link was rendered in the dark-blue color of light modes.

**#932: 'Port renaming' dialog is editable for read-only circuits:** This has been fixed.

**#934: Some shadow-rendering issues:** The "Image" and "Light bulb (Analog)" components didn't draw their drop-shadow correctly (if enabled).

**#936: Pause-button doesn't correctly indicate hard breakpoints:** A hard breakpoint is one triggered by the "Break" component. If the simulation runs in single-step mode, it is paused when it runs into a hard breakpoint. The "Pause/Resume" button is selected when the simulation is paused. If pausing the simulation was triggered by a breakpoint (either hard or soft) and not by the user, the button is rendered in orange color that indicates the breakpoint. This didn't work correctly for hard breakpoints. Also improved the tooltip in this state.




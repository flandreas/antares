---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: August 15, 2026

Various bugfixes, improvements and the new feature 'AI Assistant'.

# Features

**#1239: AI Assistant (experimental):** New sidebar with an AI Assistent that can do the following:
- Explain the current circuit
- Build a new circuit
- Change the current circuit

Users must add their OpenRouter API key (in the preferences under "AI Assistent"), or export it as shell variable when working as DEV.

This is experimental and still has many limitations:
- Only a limited set of components supported (input, output, gate, tai-state buffer, switch, LED, constant, splitter, concentrator, clock, subcircuits)
- The generated geometrical layout is rudimentary

# Improvements

**#1230: Increate sensitive region of circuit pins:** The region of circuit input pins where Antares reacted to mouse events if the user wanted to end a wire was too small. Although the grid caused snapping the wire's endpoint to the correct location, a connection wasn't established, which confused some users. See the details in the JIRA issue.

**#1233: Update status bar while creating wire junction:** Antares already updates the status bar while the user starts a new wire on a pin, informing him about the possible actions in the various states of the process. For example, it says "Press/hold left mouse button to start wire, ALT to start adjusted wire" while hovering over a pin. Antares now creates analogous messages when starting a new wire as a junction of an existing wire.

**#1234: Clean-up 'Switch' propagation delays:** With #856 the new property "Interactive propagation delay" for circuit inputs was introduced. This allowed circuit inputs to use propagation delay 0 when used in subcircuit simulation, but use a more realistic "mechanical, interactive" propagation delay when the user clicks on a circuit input in a main circuit.

However, the implementation of this feature is currently not entirely consistent. For example, a simple "Switch" component still has a property "Propagation delay", whose default value does come from the user preference "Circuit -> Digital -> Switch propagation delay" (default 1'000), but if you change the switch's property e.g. to 100, the simulation still uses the default 1'000. This is a bug.

Made sure all basic digital components with "switch" behaviour (switch, real switch, double-throw switch, DIP switch etc) only offer the "Interactive propagation delay" and not the "Propagation delay" property for editing, and use that value during simulation.

# Bugfixes

**#1227: Double-click in oscilloscope to reset horizontal scrolling not working:** Didn't work on Windows and Linux because double-click events are handled differently there.

**#1228: Error in simulation with bit flow animation:** In some user's project, an error occurred when running a simulation with bit flow animation enabled. The cause where degenerated wire segments the flow animation couldn't deal with.

**#1229: Connecting to wire near a junction can produce non-orthogonal wire segments:** See the detail scenario in JIRA issue. This has been fixed.

**#1231: Error in 'Auto connect':** In certain rare scenarios, the 'Auto connect' feature tried to connect a pin to to another pin and a open-ended wire endpoint at the same time, which is not allowed. This has been fixed. 

**#1235: Missing view updates during simulation (depending on simulation speed):** Fast oscillating circuits could look during simulation like nothing changes, if the simulation speed resulted in a multiple of the redrawing interval. Implemented a simple solution variant of randomly deviating the number of simulation queue entries processed during a single timer event. That way the display shows at least some activity in the scenario above, although the flashing frequency doesn't always reflect the effective signal change frequency.

**#1236: Error when trying to 'Edit symbol...' of broken subcircuit reference:** This is now disabled, as it is not allowed.

**#1237: 'Save' can undesirably alter a circuit's original state in the Explorer:** Follow-up of #1213 and #888. In certain situation, opening a previously edited circuit from the Explorer's tree could display an outdated version of the circuit. The persisted version was correct though, so restarting fixed the problem. This bug has now been fixed.

**#1238: Joined wires cannot be deleted:** Open-ended wires can be joined by dragging the open endpoint of one wire onto the open endpoint of another wire. The resulting wire couldn't be deleted due to a bug. This has been fixed.

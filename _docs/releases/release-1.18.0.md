---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: April 4, 2025

Besides the usual bugfixes, this release brings the new epic feature "Finite State Machines".

![FSM](/assets/images/design/fsm-sample.png)

# Features

**#615: Finite state machines (FSM):** Draw finite state machines, export to truth-table, and generate circuit.

**#892: Test cases - Check propagation delay consistency:** Test cases now contain a new test that compares the configured propagation delay (used for shallow simulation with scripts) and the effective propagation delay (measured with deep simulation). The test fails if both differ more than 10%. This test can be disabled per test case or globally in the user preferences.

**#894: Simulation time analysis tools:** New tools that help when doing detail-level analysis of simulation behaviour, especially regarding timing.
- Reset simulation time
- Disable manual click propagation delay

**#902: Open circuits from test case results:** Double-click on test case in results tree to open the circuit that contains the test case.

**#904: Restart Antares with opening the last circuit:** Antares now automatically reopens the circuit that was open when Antares was shut down the last time. Also for libraries.

# Improvements

**#890: Increase fidelity of scripted components:** User feedback in rating dialog. Changed several propagation delays of Standard Library circuits. Checked all library circuits and added some test cases here and there.

# Bugfixes

**#891: Avoid unexpected skipping of signal flow animation in subcircuit:** Depending on propagation delay settings and the "Startup time" property, signal flow animations in a subcircuit could have been skipped unexpectedly. This has been fixed.

**#893: Cannot apply 'Default value' in 'Parameters Definitions' dialog:** The 'Apply' button did not become enabled when 'Default value' was changed. This has been fixed.

**#895: Error when opening 'Transmission Gate' from Standard Library:** I and O pins in the symbol didn't have the same bit width as in the circuit. This has been fixed.

**#897: Unexpected change of bit width in symbol pins:** In certain situation, it could happen that the bit width of a pin in your circuit's symbol could suddenly differ from the bit width on the corresponding pin in the circuit. This bug was related with parametrized bit widths.

**#900: Menus 'New use case' and 'New scenario' enabled for non-circuit desktop view:** Created an error when executed. These menu items are now disabled for non-circuit content.

**#901: Missing rich text rendering in text case results tree:** Special formatting in circuit names was not correctly drawn.

**#902: Some toolbar action tooltips missing:** Test cases -> Run and Test results -> Clear.


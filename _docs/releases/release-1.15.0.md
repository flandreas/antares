---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: August 25, 2024

The timing of this release is mainly determined by some urgent bugfixes, especially the translation bugs that prevented users with German locales from using Antares.

Besides that, the main new features evolve around the new analog capacitor component, which paved the path to a new monoflop subcircuit in the standard library, a new timing-related DSL scripting function, and some improvements of the oscilloscope that are especially, but not exclusively useful when applied to analog circuits.

Also note that we recently updated the SN 74xx library in the Antares assets project with some additional circuits (see the separate [blog post](/74xx-circuits)).

# Features

* **#766 (Web): Delete project in Antares Web:** Allow the user to delete an uploaded project in Antares Web.

* **#767 (Web): Circuit image thumbnail in Antares Web:** The "Projects" screen now displays an image of the project's main circuit as thumbnail.

* **#798: Capacitor:** The analog library has got a new "Capacitor" component.

* **#799: Monostable multivibrator (Monoflop):** A new component in the "Standard" library that uses the new "Capacitor" component introduced with #798. It also contains a scripted execution scripts allowing for faster execution when used in digital circuit, but it can also be opened as main circuit to play around and observe its behaviour.

* **#800: New DSL scripting function "triggerAfter()":** To be used in subcircuit execution scripts to trigger recalculation of the component after n nanoseconds even if no inputs have changed. Useful to script circuits like "Monoflops".

* **#805: Display time/value in oscilloscope when hovering with mouse over curve:** Convenient especially in analog circuits.

# Improvements

* **#802: Analog "Current flow animation" speed independent of system speed:** Until up to this release, the speed of the current flow animation not only depended on the current strength, but also on the system simulation speed. This made it difficult to observe fast processes such as charging a capacitor, because the necessary slow simulation speed brought the current flow animation close to a halt.

# Bugfixes

* **#756 (Web): Line breaks ignored in Antares Web:** Line breaks \n in tooltips or scenario texts were ignored in Antares Web circuit viewer.

* **#757 (Web): Wrong y position of text components in Antares Web:** Text components were rendered slightly too high (smaller y coordinate) in Antares Web circuit viewer.

* **#759 (Web): No vertical space between project tiles in Antares Web:** This has been fixed

* **#795: Errors occurring during 'Save' can lead to corrupt files:** If a technical error occured while storing content (such as project structure or circuit content), e.g. caused by a still undetected program bug, it could happen that the file to be updated is corrupt afterward. In the worst case, the project could not be opened anymore. This has been fixed.

* **#796: Components draw propDelay expression instead of value during single-step simulation:** When running simulation with speed category "Explore" and in single-step mode, components waiting for the next simulation slot draw the propagation delay above their upper border. Component having a propagation delay expression (using the "Parameters" feature) drew the expression instead of the value.

* **#797: Wire tooltip 'Press ALT to create junction' displayed on read-only circuits:** If user preference "Show tips for beginners" is set, Antares shows the wire tooltip "Press ALT to create junction". It even showed the tooltip if the circuit wasn't editable, e.g. in a library circuit the user hasn't permission to edit. This should not be the case, as it confuses the user.

* **#801: Error in DSL exec scripts when using integer numbers in analog circuits:** When using an integer number (instead of a float) in execution scripts of analog circuits, this could lead to an error when assigning such a number as value of an output pin. This has been fixed.

* **#803: Error when opening analog circuit containing a circuit parameter:** After having added a circuit parameter to an analog circuit, the circuit could not be opened anymore. The logic that handles circuit parameters tried to treat its pins as digital pins. That part of the code was not yet generalized enough.

* **#804: Cannot start Antares with German locale:** Antares crashed when started on a machine with German locale, due to a missing translation for a recently introduced new main menu item. Other German translations were also missing, which could lead to errors in various parts of the program. The missing translations have been added, and a test case for detecting such inconsistencies in the future has been added to the test suite.

* **#806: Issue while using 8-bit architecture modules:** Due to a bug in the consistency checker for pin bit widths, subcircuits using parameters for the bit width could not be added to circuits anymore. This has been fixed.
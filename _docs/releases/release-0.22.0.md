---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: March 16, 2022

Release 0.22.0 extends the "Synthesis" module introduced in 0.21.0 by adding the
possibility to enter boolean expressions and minimize them. See the updated user manual
page ["Synthesis"](/user-manual/english/circuits/synthesis) for a description of this feature.

In addition, release 0.22.0 introduces a new "Analysis" module allowing you to analyse a
combinational circuit and generating minimized boolean expressions that you can store and/or convert into a truth table. This new feature is explained in the user manual page ["Analysis"](/user-manual/english/circuits/analysis).

# Features

* **#234: Circuit Analysis - Create Expressions from Circuit:** Antares can now
analyse a combinational circuit and generate the corresponding minimized boolean expressions.

* **#322: Enter Boolean Expressions:** You can now enter boolean expresssions,
store them, generate simplified expressions and fill truth tables based on these
expressions.


# Bugfixes

* **#323: Preferences Crash:** Due to a missing german translation, Antares ran
into an unexpected error in the preferences dialog when trying to display the new
"Circuit -> Preferences" page if your current user language was German.

* **#324: Scenarios and Usecases can't be editited any more:** Due to a regression
issue since 0.21.0, Antares didn't show the scenarios and usecases view any more
when opening a circuit as main view. This has been fixed.

---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: April 21, 2022

Along with a couple of bugfixes, this release mainly consists of a new feedback
system that asks the user to give feedback about Antares when the application is closed, or on demand using the new File->Rating menu item.

# Features

* **#340: Feedback System:** Added a feedback system that asks the user to give
feedback about Antares when the application is closed, or on demand using the
new File->Rating menu item.

# Bugfixes

* **#346: Save action enabled without open view:** The "Save" menu / "Save" button was sometimes enabled even if there wasn't an open view, and hence any open unsaved changes. If the "Save" action was executed in this state, an unexpected error occurred.

* **#347: Properties of "old" circuit displayed without open view:** When closing a non-circuit view such as a truth table view or a boolean expression view, the properties of the circuit that was opened most recently was displayed, even if no view was currently open.

* **#348: Bit Extender doesn't save "Outut Bit Width":** Bit Extender didn't save the "Output bit width" parameter, every time reloading the circuit it was reset to 1.

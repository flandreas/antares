---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: January 25, 2022

This patch release fixes some bugs, especially the severe bug #280 which altered the
view's zoom/pan setting when undoing operations such that the circuit wasn't visible
at all anymore.


# Bugfixes

* **#277: Empty properties window if descriptions are displayed:** The properties window has an option to display a description of the selected property. However, if the description section were displayed using the right-most toggle button, no properties were displayed at all due to an internal error in the properties window component.

* **#279: Link to Documentation not valid:** The menu "Help > Documentation" pointed to a non-existing URL.

* **#280: Ctrl+Z resets Zoom View:** Undoing an edit operation led to an unexpected change
in the view's zoom/pan setting, mostly such that the circuit was completely off-screen.

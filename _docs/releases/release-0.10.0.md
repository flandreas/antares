---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: July 30, 2021

Release 0.10.0 contains a couple of interesting and useful features, probabily most
notably the new auto-connect feature for components, which will spare you a lot
of clicks and time when connecting components.

You will also notice that the coloring has been slightly changed at some places.
The connector indicator and the snap lines are now green instead of orange, which
makes them better distinguishable from selected objects. And the bright and dark green
signal colors have been slightly darkened for the Darcula theme, because I thought
that the bright 255 green was kind of too glaring on the dark background.

And, just to keep you up-to-date, there was also a lot of work going on in the
Antares Web territory. In addition to lots of new property editors that have
been added to the web editor, it was also necessary to rework the core tooltip system,
because, quite ironicly, it turned out that it's not equally easy to render rich
HTML text on a HTML canvas like it is on a Java Swing canvas.

While these new Antares web achievements have not yet been published on the home page,
I'm working towards composing a showcase page that demonstrates how Antares circuits
can be integrated in web pages, and how easily users can simulate them.

# Features

* **#88: Wire Colors:** You can now assign a color to a wire. Such colors might
help organizing large circuits, but be reluctant when choosing colors Antares
uses for its own purposes, such as orange (selection) or red (error state). And
note that these colors are only displayed in edit mode, not (yet) in simulation mode.

* **#129: Add bit width to all gates:** You can now choose the bitwith on all
logic gates, resulting in logic operation be applied to individual bit pairs.

* **#162: Library: A nibble counter with CI/CO and async RST:** As requested by
users, the library has been extended with a new 4-bit binary counter with PRESET
and RESET functionality.

* **#181: Auto-connect Components:** The existing auto-connect feature allowed
you to automatically connect a component's pins with open-ended wires. This
feature now also supports connecting the pins of two components when being
moved near-by. This is particually handy when ports of wide splitters/combiners
have to be connected, but also in lots of other use cases.

* **#205: Indicate Signal Representation in Inputs/Outputs:** Input and output
components now indicates which signal representation is used when displaying
signal values. The indication is controlled by the user preference "Signal Notation",
i.e. prefix, subscript and suffix (uppercase or lowercase). The same also applies
to signal values in signal flow animations and port tooltips.

# Bugfixes

* **#208: Simulation skips a few steps on first start-up:** When starting the
simulation in "Explore" and animations active, signal flow animations could
have been omitted if the user first changed values of circuits inputs/outputs.
This has been fixed.

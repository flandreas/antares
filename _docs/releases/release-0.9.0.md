---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: July 15, 2021

With DIL package symbol support, 64 bit wires and components, and decimal signal
representation, Release 0.9.0 broadens the range of applications Antares can be
used for.

In addition, with the introduction of a new system preference, the handling of floating or unconnected input pins has been made much more flexible.

And last, but not least: Users can now export and import individual circuits from/into
their projects and libraries, paving the way for future sharing of circuits between users.

# Features

* **#68: Open Online Library to share Components:** You can now export individual
circuits to a ZIP file and import them into other projects or libraries. This
opens the door for a public asset sharing place where users can exchange their
circuits. A dedicated GitHub public project will be soon available after
this release.

* **#180/#187: Handling of floating gate inputs:** Before 0.9.0, unconnected inputs
where always interpreted as 0. This has now been changed to Z (undefined). However,
logic gates can't work with undefined inputs. A new system preference now allows
you to define how logic gates interpret unconnected inputs, with "Read as 0",
"Read as 1" and "Read as random" as possible options.

* **#182: Bit Width Extension: 64 bit:** Before 0.9.0, bit widths were limited
to 32 bit. You can now also choose 64 bit.

* **#183: Decimal Representation:** In addition to binary and hexadecimal
signal representations, a decimal representation has been added.

* **#206: Support for DIL package symbols:** The symbol editor has been
extended with special support for DIL package symbols. See the new section
in the user manual's chapter "Subcircuits" for a description on how to use them.

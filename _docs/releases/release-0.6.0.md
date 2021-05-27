---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: May 27, 2021

First of all, I'd like to say a big "Thank you" to all users who struggled
with severe bug in Antares, but how did not resign and reported them as
issues. I'm well aware of how annoying it is to work with a application
that produces bugs, and I am so thankfull for all the effort you put into
reporting them. Without you, it would hardly be possible to improve Antares
and to make it better with every release.

Thank you very much!

With that being said, Release 0.6.0 is a stability release that contains
lots of bug fixes, some of them being fixes of severe bugs deep down in
the core of the system that were the cause of a lot of unexpected errors.

But although release 0.6.0 is much more stable than the previous one,
surley this is not the "end of all bugs in Antares", and I hope that you
will continue to report any bugs you encounter in the future.

An important note about a breaking change: With issue #121, the startup
behaviour of latches and flipflops has been changed. Note that this change
might alter the behaviour of your existing circuits.

# Features

* **#81: Add 'Bit Width' property to NOT gate:** The user can now select
the bit width of a NOT gates input and output.

* **#109: Improve Logging:** The log output produced by Antares has been
restructured such that "Debug" log produces a consistent "user action trail".
If an unexpected error occurs, this user action trail is now included in
the text the user can copy/paste when opening issues. In addition, "Debug"
logging is now enforced when Antares starts, at least for the next couple
of releases.

* **#114: Continous overline on port names:** Up to 0.5.2, Antares used single
unicode characters to produce overlines, which didn't produce a continuous line
over multiple characters. Because this is a general problem for which a
proper solution requires a lot of effort, Antares now contains a compromise solution:
If the entire text is to be negated, Antares programmatically draws a line at the
upper edge of the text's bounding box.

* **#121: Why are all Flipflops high on startup?:** Due to an arbitrary choice,
most of Antares' latches and flipflops settled in "on" state on startup. Users
requested to change this, so that latches and flipflops start in "off" state.
Note that this change might have an impact on the behaviour of your existing circuits
if they use latches and flipflops from Antares' standard library!

# Bugfixes

* **#76: Application is crashing randomly:** Produces unexpected errors
when deleting wires, connecting components and when performing copy/paste.

* **#80: Main application window icon does not show Antares logo (Windows):**
The windows showed the standard Java logo instead. This has been fixed.

* **#87: Graphical glitch with text when starting simulation:** The text of
label components was sometimes not properly clipped to the drawing area and
was drawn over neighboring UI components.

* **#89: Changing label for ROM or RAM crashes:** When the user tried to
exchange the standard label of a ROM or RAM with his own custom label, an
error occured.

* **#90: Changed label of subcircuit is not read:** Changed labels in
subcircuit symbols where stored, but not correctly read back from storage.

* **#91: Error when creating wire junction in 'Block' style:** When the user
tried to create a wire junction from a wire that was drawn with style "Block",
an error occured.

* **#92: Memory display scrambled after property change:** A memory component
can optionally display its contents in the symbol. When changing the properties
"Address Bit Width" or "Data Bit Width", this display was scrambled.

* **#93: Some combination of deleting wires can cause a junction to still exist:**
While this problem was not consistently reproducible, a lot of bugs have been fixed
that might have been the cause of this problem. Also, as a defensive measure,
it is now possible to delete an unconnection junction point. Even so, please
open an issue if this problem should occur again.

* **#94: Moving small circles in symbol view does not work:** Due to a bug
in calculating the sensitive area of rectangular object's edit handles, it was
nearly impossible to move a small circle.

* **#96: 'Open Subcircuit' does not work when simulation is running:** The
context menu was always disabled due to a bug in the authorization subsystem.

* **#97: Sum symbol in Full Adder symbol shows broken:** Due to wrong
character set handling when cloning components, the Full Addres showed a
broken text instead of the correct sigma character.

* **#99: Mixed languages in UI controls:** Some were in the application
preference language, while others were in the operating system's language. This
has been fixed.

* **#100: After editing component A used in component B, error when opening B.:**
If the user removed a port from a component A that was used and connected in
circuit B, an error occured when opening B. Antares now detects this situation
and displays the dangling wire to the missing port of A in error state (red color).

* **#102: How do you import a project?:** When importing a project that
is already present, Antares produced an error. The user is now asked whether
he wants to replace the existing project.

* **#108: Error when double-clicking clock component while simulation is running:**
This has been fixed.

* **#110: Error in repeated paste after deleting firt pasted part:** If the
user copy/pasted a component, deleted the pasted component, and then pasted
again, an error occured in the system that calculates offsets for pasted components.

* **#111: Error when selecting multiple components and deleting them:** This has
  been fixed.

* **#116: "Wire attach ball" stays in circuit after newly created wire is deleted":**
This has been fixed.

* **#124: "Odd wiring behaviour":** When creating complex wirings, Antare's layout
algorithm felt stressed and produced odd layouts, especially in relation with
junctions. The new layout algoriths tries to keep the wire from which junctions are
created much more stable, and it also tries to avoid non-rectangular solutions.

* **#125: Inconsistent Redo state when cancelling "Create wire junction":** This
severe bug in the core of the undo/redo system might have been the cause of some
of the "hard to explain" unexpected errors.

* **#127: Error when deleting wire while creating it:** If the user pressed
DEL (or BACKSPACE on Mac) while creating a new wire, an error occured. Antares
now refuses to delete a wire while it is under construction.

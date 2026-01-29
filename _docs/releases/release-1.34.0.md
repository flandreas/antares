---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: January 29, 2026

Maintenance release with bugfixes mainly in wire layout generation for "Set points" mode.

# Features

**#1132: Set tunnel name when connected to a net with named output:** By default, a tunnel has no name. If you add two tunnels without a name, they are not connected (empty names are ignored). One of the most common use cases for tunnels are clock signals. Since #1131, clock's output pin have the name "CLK" by default. When connecting a tunnel to a clock's output, the user had to manually set the tunnel name, probably to "CLK" as well. The oscilloscope probe has the capability to determine the probe's name from the name of the pins in the net to which the probe gets connected. This is now also supported for tunnels.

# Improvements

**#1141: New wire to another wire should meet target wire orthogonally:** New wires now meet target wires orthogonally (layout).

# Bugfixes

**#1136: Error in layout generation when creating wire (in "Set points" mode):** In certain geometrical scenarios an error could occur when creating a new wire, especially in mode "Set points". The error occurred during generation of the wire's layout when the mouse is moved onto the target pin or wire. This has been fixed.

**#1139: Error when extracting circuit:** When extracting a component into a new circuit, an error could occur in calculating the position of the extracted circuit in the explorer tree. This has been fixed.

**#1140: Wiring with "Set points" moved intermediate point to snapped wire:** See the GitHub issue for more details. This has been fixed.

**#1143: Weird test results signal output in "T Flip-Flop:** The test script interpreter had a bug in handling Long/Unsigned Long values correctly, which resulted in signed number interpretation when inverting signals bit-wise.






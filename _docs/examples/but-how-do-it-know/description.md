---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "examples" }
title: "Examples"
gallery:
  - url: /assets/examples/but-how-do-it-know/But-How-Do-It-Know-Sample.png
    image_path: /assets/examples/but-how-do-it-know/But-How-Do-It-Know-Sample.png
    title: "CPU"
  - url: /assets/examples/but-how-do-it-know/Control-Section.png
    image_path: /assets/examples/but-how-do-it-know/Control-Section.png
    title: "Control Section"
  - url: /assets/examples/but-how-do-it-know/display.png
    image_path: /assets/examples/but-how-do-it-know/display.png
    title: "Display"
---

# "But How Do It Know?"

[Download](https://github.com/flandreas/antares/releases/download/v1.3.0/But-How-Do-It-Know.acp){: 
.btn .btn--primary .btn--large}

{% include gallery id="gallery" caption="Screenshots" %}

A microcomputer according to the book "But How Do It Know?" by John Clark Scott (John C. Scott, 2009, ISBN 978-0-615-30376-5).

This example shows how the microcomputer and the CPU (also known as "Scott CPU") from this famous educational book is build using Antares.

When building the circuits from the book with Antares, all circuits have to explicitly set their "Wire Logic" property to "Wired OR", because with Antares' default wire logic property "Conflict", the circuits would't work. In fact, this project was the very reason why the "Wire Logic" property has actually been introduced in Antares.

Note also that not all instructions have been thoroughly tested, but only those that were needed to implement the first machine program that endlessly increments a register value and outputs its current value using a 7-segment display.

Although the project contains a ROM circuit consisting of individual memory cells, like it is described in the book, we didn't fully build it due to the immense wiring work involved, and instead replaced it with an Antares built-in ROM component. This also allows you to easily upload a machine program you've edited with a text editor into the ROM component.

Once we have more time available, we will enhance the circuits with Antares scenarios to display state-sensitive explanation texts while the microcomputer is simulated.

---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "examples" }
title: "Examples"
gallery:
  - url: /assets/examples/tannenbaum/tannenbaum-mc.png
    image_path: /assets/examples/tannenbaum/tannenbaum-mc.png
    title: "Microcomputer"
  - url: /assets/examples/tannenbaum/tannenbaum-cpu.png
    image_path: /assets/examples/tannenbaum/tannenbaum-cpu.png
    title: "CPU"
---

# Tannenbaum CPU

[Download](https://github.com/flandreas/antares/releases/download/v0.4.0/Microcomputer.Tannenbaum.zip){: .btn .btn--primary .btn--large}

{% include gallery id="gallery" caption="Screenshots" %}

A microcomputer with a micro-programmable CPU according to "Structured Computer Organisation" by Andrew S. Tannenbaum (Prentice Hall 1984, ISBN 0-13-854605-3).

The microcomputer's ROM is loaded with a maschine program that sums all numbers between 0 and 100. The resulting sum is displayed by the 7-segment display of the microcomputer.

You can download this [data sheet]({{ "/assets/examples/tannenbaum/Tannenbaum-datasheet.pdf" | relative_url }}) that contains a documentation of the micro instruction set as well as the macro instruction set.

Feel free to write your own machine programs and load them into the microcomputer's ROM. You will have to assemble the machine code by yourself,
but this is a very instructive experience. If you are a programmer, you can also write your own assembler program,
which might also be a lot of fun to do.

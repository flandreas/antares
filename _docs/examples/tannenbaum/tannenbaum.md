---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
title: "Tannenbaum CPU"
sidebar: { nav: "examples" }
gallery:
  - url: /assets/examples/tannenbaum/tannenbaum-mc.png
    image_path: /assets/examples/tannenbaum/tannenbaum-mc.png
    title: "Microcomputer"
  - url: /assets/examples/tannenbaum/tannenbaum-cpu.png
    image_path: /assets/examples/tannenbaum/tannenbaum-cpu.png
    title: "CPU"
---

[Download]({{ "/assets/examples/tannenbaum/Microcomputer (Tannenbaum).zip" | relative_url }}){: .btn .btn--primary .btn--large}

A microcomputer with a micro-programmable CPU according to "Structured Computer Organisation" by Andrew S. Tannenbaum (Prentice Hall 1984, ISBN 0-13-854605-3).

The microcomputer's ROM is loaded with a maschine program that sums all numbers between 0 and 100. The resulting sum is displayed by the 7-segment display of the microcomputer.

Feel free to write your own machine programs and load them into the microcomputer's ROM.

{% include gallery id="gallery" caption="Screenshots" %}

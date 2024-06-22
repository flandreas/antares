---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "examples" }
title: "Examples"
gallery:
  - url: /assets/examples/quasi-analog/and-gate.png
    image_path: /assets/examples/quasi-analog/and-gate.png
    title: "AND gate"
  - url: /assets/examples/quasi-analog/SR-latch-with-NOR.png
    image_path: /assets/examples/quasi-analog/SR-latch-with-NOR.png
    title: "SR latch with transistor NORs"
---

# Building logic gates with transistors

[Download](https://github.com/flandreas/antares/releases/download/v1.13.0/Logic.Gates.from.transistors.acp){: .btn .btn--primary .btn--large}

{% include gallery id="gallery" caption="Screenshots" %}

This example demonstrates how basic logic gates can be built using the build-in
transistor component. Although it is also possible to build such gates with
transitors and pull resistors, all examples use multiple transistors and
power/ground components.

Per default, transistors are drawn using the circled representation. If you don't
like that, you can omit the circle by changing the corresponding system
preference.

---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "examples" }
title: "Examples"
gallery:
  - url: /assets/examples/bidirectional-splitter/bidirectional-splitter.png
    image_path: /assets/examples/bidirectional-splitter/bidirectional-splitter.png
    title: "Example data bus usage"
---

# Bus Transceiver

[Download](https://github.com/flandreas/antares/releases/download/v0.7.0/Bidirectional.Splitter.zip){: .btn .btn--primary .btn--large}

{% include gallery id="gallery" caption="Screenshots" %}

This example shows how "Bus Transceiver" can be used to attach reading/writing components to a common
data bus.

As long as switch "WR" is 0, the currently address RAM cell value is forwarded to output "O".
Change the value of input "ADR" to address different RAM cells.

In order to write a value into the RAM, enter the value to be written in input "I", and
set switch "WR" to 1. This enables the bus transceiver at "I" and sets the direction
of the RAM's bus transceiver to A->B.

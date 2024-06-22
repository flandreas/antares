---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "examples" }
title: "Examples"
gallery:
  - url: /assets/examples/ben-eater-8-bit-computer/simulation.png
    image_path: /assets/examples/ben-eater-8-bit-computer/simulation.png
    title: "Simulation"
---

# "Ben Eater's 8-bit computer"

[Download](https://github.com/flandreas/antares/releases/download/v1.13.0/Ben.Eater.8-bit.computer.acp){: .btn .btn--primary .btn--large}

{% include gallery id="gallery" caption="Screenshots" %}

An 8-bit computer according to the amazing [YouTube series](https://www.youtube.com/playlist?list=PLowKtXNTBypGqImE405J2565dvjafglHU) by Ben Eater.

If you've enjoyed Ben Eater's YouTube series as much as I did, but want to build the computer with a simulator instead of breadboards, this example showcases how you can do that with Antares.

Note how this project makes extensive use of Antares' "Symbol control" feature, which allows you to all LEDs and switches to a subcircuit's symbol.

The project follows Ben Eater's design in every little detail, except for these points:

- The control logic uses a delay component instead of an inverter to derive the microstep clock from the main clock.
- The memory component uses a 16-bit LUT instead of two 8-bit EEPROMS.
- The signed decimal display mode is not yet properly implemented.

If you want to give it a try, I strongly recommend to build the computer by yourself from scratch. It is a lot of fun, and you definitely learn the most this way. Use this example project as an inspiration, or in case you run into a problem you can't figure out how to solve.

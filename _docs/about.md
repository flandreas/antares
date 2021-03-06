---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
toc: true
gallery:
  - url: /assets/images/feature-gallery/jk-ms-flipflop.png
    image_path: /assets/images/feature-gallery/jk-ms-flipflop.png
    title: "JK-Master-Slave Flip-Flop"
  - url: /assets/images/feature-gallery/multiview.png
    image_path: /assets/images/feature-gallery/multiview.png
    title: "Open subcircuits in separate views"
  - url: /assets/images/feature-gallery/microcomputer.png
    image_path: /assets/images/feature-gallery/microcomputer.png
    title: "Sample microcomputer"
  - url: /assets/images/feature-gallery/darkmode.png
    image_path: /assets/images/feature-gallery/darkmode.png
    title: "Dark mode"

---

Antares is a learning platform for digital circuits. In addition to drawing and simulating digital circuits, Antares places particular emphasis on providing tools to help students better understand how these circuits work.

{% include gallery id="gallery" caption="Screenshots" %}

## Supported Platforms

Antares is a desktop application for Windows and macOS. The installation programs include the entire required runtime environment; installation of additional components like Java JRE is not required.

## Mission

The following objectives are pursued in the design of Antares:

- Aesthetically pleasing circuit representation
- As few elementary basic components as possible, but libraries with "explorable" components
- Research into innovative ways of making the functioning of hierarchical systems understandable

The ultimate goal of Antares is to facilitate interactive textbooks with active circuit elements and integrated exercises.

## Notable Features

- **Presentation**
  - Symbols in IEC or ANSI style
  - True model-view design: Multiple views of circuit and subcircuits
  - Animations for diving into subcircuits
  - Choosable themes
  - Dark mode
- **Circuit Design**
  - Hierarchical circuit design: Build your own subcircuits
  - Editor for custom subcircuit symbols
  - Custom symbols with active elements such as switches or LEDs
  - Custom projects and libraries
  - Mirroring of symbols
  - Automatic wire layout
  - Wire bundles and optional bus representation of wires
- **Simulation**
  - Simulation of individual propagation delays
  - Signal flow animation
  - Optional skripting of subciruit logic
  - Continuously choosable simulation speed
  - Single-step simulation
  - Oscilloscope (experimental)
- **Explanations**
  - Internationalization: Custom texts are translatable to all supported user languages
  - Programmable scenarios for displaying dynamic explanations during simulation
  - Programmable use cases with support for test case implementation

## Roadmap

1. Bugfixes in the current beta version
2. Implement feature requests from the community
3. Explore more sophisticated features for explaining how microcomputers work
3. Possibly: Integration of an analog simulation layer to explain how basic gates work
4. Web version

## Credits

- [Kotllin Programming Language](https://kotlinlang.org)
- [AdoptOpenJDK](https://adoptopenjdk.net)
- [Icons8](https://icons8.com/icons)

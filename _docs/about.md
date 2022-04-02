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

Antares doesn't dare to claim being a "Logisim successor", although it was largely influenced
by this famous application that has sadly been discontinued a long time ago. However, regarding its design philosophy, Antares strives to go beyond Logisim and similar tools.

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
  - True bi-directional subcircuit ports and bus splitters
  - Editor for custom subcircuit symbols
  - Custom symbols with active elements such as switches or LEDs
  - Custom projects and libraries
  - Mirroring of symbols
  - Automatic wire layout
  - Wire bundles and optional bus representation of wires
  - Custom scripting language for writing scripts for simulation and symbol customization
  - Parametrized circuits
  - Boolean expression optimization from truth tables
  - Circuit synthesis based on truth tables or boolean expressions, including expression minimization
  - Circuit generation from minimized expressions
  - Circuit analysis
- **Simulation**
  - Simulation of individual propagation delays
  - Signal flow animation
  - Optional scripting of subciruit logic
  - Continuously choosable simulation speed
  - Single-step simulation
  - Oscilloscope
- **Explanations**
  - Internationalization: Custom texts are translatable to all supported user languages
  - Programmable scenarios for displaying dynamic explanations during simulation
  - Programmable use cases with support for test case implementation

## Roadmap

1. Bugfixes in the current beta version
2. Implement feature requests from the community
3. Web version
4. Explore more sophisticated features for explaining how microcomputers work
5. Possibly: Integration of an analog simulation layer to explain how basic gates work

## Credits

- [Kotlin Programming Language](https://kotlinlang.org)
- [AdoptOpenJDK](https://adoptopenjdk.net)
- [FlatLaf Look and Feel](https://www.formdev.com/flatlaf/)
- Icons by Janis

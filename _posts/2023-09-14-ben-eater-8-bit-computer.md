---
title: Building Ben Eater's 8-bit computer
---

Some of you may have noticed that I've decided it's time to do a circuit project using Antares on my own, so I can experience myself how it's like to use Antares. I hope to detect hidden bugs and identify missing features.

I've chosen to build [Ben Eaters's 8-bit computer](https://www.youtube.com/playlist?list=PLowKtXNTBypGqImE405J2565dvjafglHU), which is a fantastic series of videos. Ben Eater does a great job in explaining from scratch how computers work.

Now I've reached end of video "8-bit CPU control logic: Part 1", where every components of the computer can be manually tested using a series of control signals. All went quite well so far, and this is how the main circuit looks like in Antares:

![Analog Components](/assets/images/posts/8-bit-CPU-control-logic-Part-2.png)

I've already found some bugs and missing feature. Some of them are already added to the project's issue tracker, and some of them are even already fixed.

When building the project with Antares, I especially appreciate Antares' "Symbol control" feature, which allows me to hide the internal circuitry of the individual components, and still be able to interact with the subcircuits using LEDs and switches in the symbol.

I'm now looking forward to build the control logic!

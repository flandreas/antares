---
layout: single
header:
  overlay_image: /assets/images/splash2.png
  show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: December 16, 2021

This bugfix release fixes some bugs, especially #259 which prevented you
from changing the bit width properties in RAM, ROM or LED Matrix components.

# Bugfixes

* **#255: Clock property 'Period/Frequency' not correctly restored:** If property "Period/Frequency" was entered as nanoseconds (the default), it was correctly restored as "propagation delay", but wrongly displayed as "10000000 ns" in the property window.

* **#256: Wire handles not removed when deleting wire:** Wires of layout type "None" show handles that allow the user to move intermediate wire points. If the wire was removed while those handles are shown, the handles were not removed as well.

* **#259: Error when changing Bit Width in some Components:** When trying to
change the bit width property of a RAM, ROM or LED Matrix component, an error
occurred.

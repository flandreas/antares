---
layout: single
header:
overlay_image: /assets/images/splash2.png
show_overlay_excerpt: false
sidebar: { nav: "releases" }
---

**Release Date**: February 9, 2025

Besides the usual bugfixes, release 1.17.0 comes with lots of new features, including many new analog components, and also usability features like the new symbol comparison or the pin renaming tool.

![Coil](/assets/images/posts/coil.gif)

> :warning: **Breaking Change #879**: The change in the boolean operator precedence might influence the results of your Antares scripts during simulation.

 Note that issue #808 "Open project in Antares Web" was planned to be part this release too. This feature made it necessary to change the way authentication is handled in the web app. Unfortunately, it turned out that what worked well in the development environment, didn't work correctly in the cloud. We didn't want to wait longer with deploying the desktop feature, so the code in the web applications is still on 1.16.0 level. This will work with older circuits, but not with circuits built with 1.17.0 due to issue #871 "Versioning of circuit and library files". Therefore:

> :warning: **Antares Web**: At the moment, don't upload projects built with 1.17.0 to Antares Web. It won't work.

Before we can fix this issue, we'll have to setup a staging area for all our browser applications on the various cloud platforms we are using. This will take some time. Until them, have fun with the new Antares Desktop features! 

# Features

**#333: Edit Name/Description of Truth Table and Boolean Expressions:** Non-circuit desktop view now display their properties in the properties window, including their name.

**#787: Memory contents as project objects:** Memory contents can now be added to a project as explicit objects, instead of loading them into memory object like a ROM. The ROM property "Referenced memory content" is used to load the contents from that project object.

**#847: Open explorer's image element as desktop view, and support to change name:** Double-click on an image node in the explorer to open the image preview desktop view.

**#852: Breakpoint when entering scenario steps:** New menu "Scenarios -> Scenario Breakpoints" to suspend the simulation whenever a scenario step is activated, provided that the simulation runs in single-step mode. Useful for writing tutorials with use cases, consisting of multiple use cases with descriptions. If the use case is executed, the simulation suspend to give the student time to read the description, and resume when he's done. Also useful for debugging by using Antares scripts to formulate complex breakpoint conditions when tracking down hard-to-find bugs in circuit designs.

**#853: External functions in scenario conditions:** Provided some external (built-in) function you can use in scenario conditions to fine-tune when scenarios and scenario steps should become active:
* Query circuit element states: Used e.g. to make sure that a scenario step only becomes active after simulation cycles have completed, including finished circuit element execution animations.
* Query the current simulation time: Used to distinguish circuit start-up situations from circuit states later into execution

**#855: Arrow head for polyline components:** New property in polyline to display an arrow head.

**#856: Property 'Interactive propagation delay in circuit inputs :** The required time (in ns) to recalculate the output after the user manually interacted with the port, either by clicking with the mouse or by pressing ENTER when the port has the focus. The default value comes from the user preferences "Switch propagation delay (ns)" in Preferences -> Circuit -> Digital, typically 1'000 ns. Overwriting this property is used in circuits like oscillating SR latches, where applying the default 1'000 ns would lead to hundreds of oscillations before the user's click on the "Set" input is processed. In such a scenario, the designer would set "Interactive propagation delay" e.g. to 80 ns, which lets the SR latch with 20 ns OR gates oscillate around 4 times after the user clicked on "Set".

**#861: Inductor (coil):** New component in the "Analog" library.

**#862: Analog double-throw switch:** New component in the "Analog" library.

**#863: Cubic Bézier curve component:** In addition to the existing quadratic curve component, a cubic Bézier curve component has been added.

**#864: Analog relay component:** New component in the "Analog" library.

**#867: Slider for changing analog current animation speed:** Analog circuits now show a header with a slider that allows you to change the electrical current animation speed.

**#868: Select numeral system in memory contents:** The user can now select the numeral system (property "Representation" like hex, binary etc.) in which the memory cell values are displayed. Editing cell values is the expected to enter values in that numeral system.

**#869: Compare edited symbol with already existing symbols:** When drawing a custom symbol, its pin layout often relates to the pin layout of an already existing symbol. The symbol editor now has a right side bar "Symbol comparison" which shows a project/library tree. When you select a circuit in that tree, its symbol is displayed in a "ghost" mode next to your current symbol. Choose in "Position" at which side it is displayed.

**#870: Input/Output renaming support tool:** Menu "Edit -> Port renaming.." shows a new dialog that lists all input/outputs and allow the user to rename them right there. Selects the input/output in the circuit when the name is selected in the dialog.

**#872: Analog diode:** New component in the "Analog" library.

**#875: Mirror polyline and curve components:** Added properties "Mirror horizontally" and "Mirror vertically" to the polyline and curve components. Just like in the subcircuit components.

**#876: Display electric voltage or current in oscilloscope probes:** Let the user choose whether a row in an analog oscilloscope displays voltage (default) or electrical current. This is done using a new property in the properties dialog of selected probes.

# Improvements

**#841: Set default value of "|=" in "Magnitude Comparator 4 Bit" circuit to 1:** The input |= of the least significant state must be set to 1 in order for the circuit to work correctly. Inexperienced users will forget this when they open the circuit from the Standard Library and start the simulation. The property "Start value" of the input is now 1.0

**#844: Help links in 'Truth table' and 'Expression' forms:** Added help button to desktop window toolbar.

**#849: 'New' button in title bars of right sidebars:** The "New" action in the scenarios, use cases and test cases sidebars are kind of hidden in the context menu of the root node. There are "New xxx" menu items in the corresponding main menu "Scenarios" and "Use cases" (although not for "Test cases"), but those may also n

**#851: Start detecting scenarios only after circuit's 'Start-up Duration' (if any):** If a circuit's "Start-up Duration" property is set, signal flow animations (if enabled) are only performed after the configured "Start-up Duration" is over. The same has now been applied for scenario detection.

**#871: Versioning of circuit and library files:** Added the Antares version number to circuits and library files created by Antares. Reject a file to be opened if it was created by a newer version, because it might contain elements that are not supported in this older version.

**#879: Scripting - Boolean operator precedence:** In Antares scripting, boolean operators AND and OR had the same precedence until now. This made it difficult / confusing to e.g. formulate an XOR expression. Improved scripting to implement NOT > AND > OR precedence.

# Bugfixes

**#837: Wrong 'Save' behaviour in non-circuit content views:** The "Save" behaviour of the non-circuit content views for truth tables and boolean expressions is wrong various aspects. This has been fixed.

**#838: Truth table and expression nodes can't be moved in explorer tree:** This is now possible with drag&drop  just like with circuits, folders, and images.

**#839: Non-standard bit width not displayed in property editor:** If a component's bit width property had a non-standard value (one that is not contained in the dropdown list, e.g. 3), this value was not displayed in the edit field when receiving the focus. If the user left the edit field, an error "Illegal bit width expression" was displayed in red text beneath the property window.

**#840: Memory content view not updated if data bit width is changed:** This has been fixed.

**#842: Non-circuit explorer nodes show tooltip 'Tip: Press/drag to drag into circuit':** This is of course wrong for truth tables and boolean expressions. These nodes now say "Tip: Double-click to open".

**#843: No 'Hand' cursor over RAM/ROM during simulation:** Now displays the hand cursor to indicated that the component can be opened. Just like subcircuit symbols.

**#845: Error when pressing SHIFT-META-O with initially empty desktop:** This triggered the "View -> Oscilloscope" menu item, which runs into an error, because there is no circuit open. This has been fixed.

**#846: Wire shows tooltip 'Tip: Press ALT for junction' even if ALT is already pressed:** This has been fixed.

**#848: Right sidebars not updated after circuit name was changed:** This has been fixed.

**#850: Error with non-escaped rich-text style characters:** Entering text containing rich-text style characters at places that support rich-text can produce errors, e.g. "Some text!", i.e. text with an exclamation mark.

**#854: Changing a gate's type doesn't update the tooltip and truth table:** This has been fixed.

**#858: 'CLock' control not drawn in selected state in symbol editor:** This has been fixed.

**#859: 'CLock' control not removed from tree when added to symbol:** This has been fixed.

**#866: Analog circuit output not correctly simulated:** n certain configurations, the analog circuit output element is not correctly simulated due to a bug. This has been fixed.

**#873: Missing help links for analog components:** The "Help" button in the explorer's preview window didn't work for analog components. Missing HelpID links. This has been fixed.

**#874: No repaint after undoing "Clear memory contents":** This has been fixed.

**#878: Repainting error in symbol editor with negated pin":** This has been fixed.

**#880: Consistent crash when adding a joystick":** This has been fixed.

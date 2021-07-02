var store = [{
        "title": "About",
        "excerpt":"Antares is a learning platform for digital circuits. In addition to drawing and simulating digital circuits, Antares places particular emphasis on providing tools to help students better understand how these circuits work. Screenshots Supported Platforms Antares is a desktop application for Windows and macOS. The installation programs include the entire...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/about/",
        "teaser": null
      },{
        "title": "Blog",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/blog/",
        "teaser": null
      },{
        "title": "Examples",
        "excerpt":"Bus Transceiver Download Screenshots This example shows how “Bus Transceiver” can be used to attach reading/writing components to a common data bus. As long as switch “WR” is 0, the currently address RAM cell value is forwarded to output “O”. Change the value of input “ADR” to address different RAM...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/examples/bidirectional-splitter/bidirectional-splitter/",
        "teaser": null
      },{
        "title": "Examples",
        "excerpt":"This examples page contains some project bundles that you can download and import into your installation of Antares. Navigate to a specific example page by using the menu at the left side. Use the download button on that page to download the project bundle (ZIP). Import the project bundle into...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/examples/examples/",
        "teaser": null
      },{
        "title": "Examples",
        "excerpt":"Hexadecimal Keyboard Download Screenshots This example shows how the “controls” feature can be used to create a subcircuit with whose symbol the user can interact just like he would with a built-in basic component. The example circuit contains a keyboard block with one switch for each hexadecimal digit. When the...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/examples/hex-keyboard/hex-keyboard/",
        "teaser": null
      },{
        "title": "Examples",
        "excerpt":"Building logic gates with transistors Download Screenshots This example demonstrates how basic logic gates can be built using the build-in transistor component. Although it is also possible to build such gates with transitors and pull resistors, all examples use multiple transistors and power/ground components. Per default, transistors are drawn using...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/examples/quasi-analog/quasi-analog/",
        "teaser": null
      },{
        "title": "Examples",
        "excerpt":"Sine Wave Download Screenshots This example is a fun showcase of Antares’ “controls” feature that allows to build a “front panel” circuit containing only input/output controls. The effective circuit consists of a series of shift registers connected to a bunch of LEDs. A switch at the serial input of the...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/examples/sine-wave/sine-wave/",
        "teaser": null
      },{
        "title": "Examples",
        "excerpt":"Tannenbaum CPU Download Screenshots A microcomputer with a micro-programmable CPU according to “Structured Computer Organisation” by Andrew S. Tannenbaum (Prentice Hall 1984, ISBN 0-13-854605-3). The microcomputer’s ROM is loaded with a maschine program that sums all numbers between 0 and 100. The resulting sum is displayed by the 7-segment display...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/examples/tannenbaum/tannenbaum/",
        "teaser": null
      },{
        "title": "Quick Start",
        "excerpt":"Download Windows macOS Installation macOS The Antares macOS installer is not yet signed with an Apple developer certificate (see Apple User Guide page). If you trust me, you can install Antares using the following procedure: In the Finder on your Mac, locate the downloaded installer. Control-click the installer, then choose...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/quick-start/",
        "teaser": null
      },{
        "title": "Release 0.1.0",
        "excerpt":"This is the first public release after more than 4 years of development.   Release Date: April 14, 2020   Features   See the User Manual for a description of the features.   Bugfixes   None.   Remarks   None.  ","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/releases/release-0.1.0/",
        "teaser": null
      },{
        "title": "Release 0.2.0",
        "excerpt":"Release Date: July 5, 2020 Along with lots of small features and bugfixes, this release contains a major rework of the entire undo/redo system, which also required deep changes in the components attributes system. Also note that Antares now shows an “Unexpected error” dialog whenever an error occured that was...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/releases/release-0.2.0/",
        "teaser": null
      },{
        "title": "Release 0.3.0",
        "excerpt":"Release Date: December 30, 2020 Just before this very special year ends, a new Antares release is available. Its most important new features are the “Dark Mode” (#6) and the “Break Component” (#33). Features #6: Dark UI theme: When using a dark Antares theme (such as “CRT”), the UI now...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/releases/release-0.3.0/",
        "teaser": null
      },{
        "title": "Release 0.3.1",
        "excerpt":"Release Date: February 17, 2021   Bugfixes      #46: Doesn’t start in initial environments: Antares 0.3 couldn’t be started  on environments (PCs) where it has never been executed.  ","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/releases/release-0.3.1/",
        "teaser": null
      },{
        "title": "Release 0.4.0",
        "excerpt":"Release Date: March 18, 2021 Besides many smaller features and bugfixes, the 0.4.0 release contains in particular the new quasi-analog components “Pull Resistor”, “Transistor”, “Ground” and “Power”, as well as new icons with higher resolution. Features #39: Preference setting for switch propagation delay: A new prefence setting allows to configure...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/releases/release-0.4.0/",
        "teaser": null
      },{
        "title": "Release 0.4.1",
        "excerpt":"Release Date: April 1, 2021 Fixes some critical bugs. Bugfixes #59: Unexpected error when starting simulation: This error could occur when using a newly created circuit in another circuit without restarting Antares. The problem was caused by a severe bug in the library management subsystem, which is also the cause...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/releases/release-0.4.1/",
        "teaser": null
      },{
        "title": "Release 0.5.0",
        "excerpt":"Release Date: May 4, 2021 The new release 0.5.0 is characterized by a complete revision of the mechanisms for signal propagation in circuits. This revision was necessary to support true bidirectional splitters. The standard library now contains the new component “Bidirectional Splitter”, which is useful in bus applications. In this...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/releases/release-0.5.0/",
        "teaser": null
      },{
        "title": "Release 0.5.1",
        "excerpt":"Release Date: May 16, 2021 Fixes some critical bugs. Bugfixes #74: Missing special chars in Explorer Properties title: Circuit names containing parenthesis were displayed without the parenthesis in the title of the properties panel. #77: Wire is accidentally disconnected: When moving small components like constants, connected wires were often accidentally...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/releases/release-0.5.1/",
        "teaser": null
      },{
        "title": "Release 0.5.2",
        "excerpt":"Release Date: May 20, 2021 Fixes some critical bugs. Bugfixes #95: How to make diagonal wires like in the SR latch: A severe bug in the properties system prevented the user from displaying properties of wires (in the circuit editor) and ports (in the symbol editor), thus disabling an entire...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/releases/release-0.5.2/",
        "teaser": null
      },{
        "title": "Release 0.6.0",
        "excerpt":"Release Date: May 27, 2021 First of all, I’d like to say a big “Thank you” to all users who struggled with severe bug in Antares, but how did not resign and reported them as issues. I’m well aware of how annoying it is to work with a application that...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/releases/release-0.6.0/",
        "teaser": null
      },{
        "title": "Release 0.6.1",
        "excerpt":"Release Date: June 10, 2021 Fixes some critical bugs. Features #145: Square LEDs: LED and RGB LED now have a property “Square” that controls whether the LED bulb is drawn using a square shape instead of the standard circular shape. Bugfixes #130: Error when starting simulation: Due to a severe...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/releases/release-0.6.1/",
        "teaser": null
      },{
        "title": "Release 0.7.0",
        "excerpt":"Release Date: June 24, 2021 Release 0.7.0 brings some new components user’s have requested, as well as some features that make editing circuits easier. It also fixes a severe bug in the persistence subsystem that lead to a lot of unexpected errors. Also check out the new sample circuit “Sine...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/releases/release-0.7.0/",
        "teaser": null
      },{
        "title": "Release 0.8.0",
        "excerpt":"Release Date: July 2, 2021 Release 0.8.0 brings a couple of new features and improvements, as well as a fix for a regression bug preventing some components from being rotated. Features #151: Button names are visible in symbol editor: The user can now choose the label position (including “hide”) of...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/releases/release-0.8.0/",
        "teaser": null
      },{
        "title": "Releases",
        "excerpt":"I’m trying to provide new releases with bugfixes and new features on a regular basis.   Use the menu at the left to navigate to the description of a particular release.  ","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/releases/releases/",
        "teaser": null
      },{
        "title": "Web",
        "excerpt":"This is the place where you can follow the development progress of Antares’ web version. Level 7: Library tree. Open circuits from the library tree. Drag component from the library into the circuit. Next up: Project tree. History Level 6: Library tree. Level 5: More simulation UI controls (break, resume,...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/docs/web/web/",
        "teaser": null
      },{
        "title": "Release 0.1.0",
        "excerpt":"After more than 4 years of development, the first public release of Antares is finally available.  ","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/relelease-0.1.0/",
        "teaser": null
      },{
        "title": "Release 0.2.0 is available!",
        "excerpt":"Along with lots of small features and bugfixes, this release contains a major rework of the entire undo/redo system, which also required deep changes in the components attributes system.  ","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/release-0.2.0/",
        "teaser": null
      },{
        "title": "Oscilloscope preview",
        "excerpt":"I’ve been working on adding an oscilloscope component to Antares for some time now. Its purpose is todisplay signal waveforms in a circuit. Although it is quite advanced, it didn’t make it into the new release 0.3.0. That’s why I’m introducing a preview of the new component in this short...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/oscilloscope-preview/",
        "teaser": null
      },{
        "title": "Release 0.3.0 with dark mode",
        "excerpt":"Along with lots of small features and bugfixes, this release brings the new optional dark mode and a new “break” components that allows you to single-step through your microprocessor machine programs.  ","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/release-0.3.0/",
        "teaser": null
      },{
        "title": "Release 0.4.0 with quasi-analog components",
        "excerpt":"Besides many smaller features and bugfixes, the 0.4.0 release contains in particular the new quasi-analog components “Pull Resistor”, “Transistor”, “Ground” and “Power”, as well as new icons with higher resolution. I was undecided for a long time whether Antares should include quasi-analog components, which are simulated purely digitally and could...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/release-0.4.0/",
        "teaser": null
      },{
        "title": "Release 0.4.1 with critical bugfixes",
        "excerpt":"Release 0.4.1 contains fixes for some critical bugs, especially for some bugs that resulted in the dreaded “Unexpected error” dialog, mainly occuring after using newly created circuits or after complex copy/paste actions.  ","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/release-0.4.1/",
        "teaser": null
      },{
        "title": "Release 0.5.0 with true bi-directional splitting",
        "excerpt":"It took me quite a long time to implement it, and it was hard, but finally here it is: Antares now features true bi-directional splitting! Bi-directional splitting is primarily implemented in the new build-in component “Bi-directional splitter”. The new “Bus Transceiver” component is based on this new splitter and can...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/release-0.5.0/",
        "teaser": null
      },{
        "title": "Release 0.5.1 with critical bugfixes",
        "excerpt":"Release 0.5.1 contains fixes for some critical bugs, especially for bugs that resulted in saving old snapshots instead of the current circuit, and wrong simulation signals when using bi-directional splitting.  ","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/release-0.5.1/",
        "teaser": null
      },{
        "title": "Release 0.5.2 with a critical bugfix",
        "excerpt":"Release 0.5.2 contains a fix for a critical bug that prevented users from setting properties of wires (in the circuit editor) and ports (in the symbol editor). Some less severe other bugs have also been fixed.  ","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/release-0.5.2/",
        "teaser": null
      },{
        "title": "Stability Release 0.6.0",
        "excerpt":"Besides a couple of new features, Release 0.6.0 contains a lot of bug fixed that improve the stability of Antares significantly. Check out the release letter for a description of what has changed with the new release, and also a big “Thank you” to all users who helped to find...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/release-0.6.0/",
        "teaser": null
      },{
        "title": "Bugfix Release 0.6.1",
        "excerpt":"Release 0.6.1 contains a lot of bug fixes, including one regarding inital simulation states of wires connected to pull resistors.   And: LEDs can now be rectangular!   Check out the release letter for a description of what has changed with the new release.  ","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/release-0.6.1/",
        "teaser": null
      },{
        "title": "Release 0.7.0 with new components!",
        "excerpt":"Relase 0.7.0 brings some new cool components like joystick and “real switch”, and other features like logic gate input negation or variable LED sizes. It also contains an important fix for a severe bug that produced lots of unexpected errors. Check out the release letter for a description of what...","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/release-0.7.0/",
        "teaser": null
      },{
        "title": "Release 0.8.0 with some cool improvements",
        "excerpt":"Release 0.8.0 brings a couple of new features and improvements, as well as a fix for a regression bug preventing some components from being rotated.   Check out the release letter for a description of what has changed with the new release.  ","categories": [],
        "tags": [],
        "url": "https://www.antarescircuit.io/release-0.8.0/",
        "teaser": null
      }]

---
title: Making Logic Gates from Transistors
description: This blog explains how logic gates are built from MOSFET transistors using inline circuit simulation with embedded, context-sensitive explanations.
---

> :bulb: This is the new version of this tutorial that uses analog transistors, where you can watch changing voltage levels and animated electric current flowing through circuits.

The heart of every computer consists of logic gates that perform the basic logical operations necessary to run programs. A modern microprocessor like the one in your smartphone contains billions of logic gates.

An example of such a gate is the NAND gate shown in the circuit below. Start the simulation and press different combinations of the two switches to observe which combinations make the light bulb light up. Move the mouse over the NAND gate to display the truth table of the NAND gate.

<iframe
style="border:1px solid gray;"
title="NAND Gate (Abstraction)"
width="500px"
height="500px"
src="https://viewer.antarescircuit.io?library=0aefe653-220e-49fe-9f6b-da3bade5b944&circuit=ad371eb5-7c03-4d48-bbb3-4a0244ce49fb&theme=Black+%26+White"></iframe>

But how does a NAND gate work inside?

## Transistors

Logic gates are constructed from so-called "transistors". Transistors are electronic components that are essentially switches. Unlike manual switches, which are operated by hand, electronic switches can be controlled by an electrical input signal.

There are many different types of transistors. Nowadays, computers mainly use so-called "MOSFET" (Metal-Oxide-Semiconductor Field-Effect Transistor). What this exactly means is not relevant for this tutorial. It is only important to know that a transistor is an electronic switch.

There are two different types of MOSFET transistors: NMOS (n-type MOS) and PMOS (p-type MOS). Both types can be used individually to build logic gates. However, as we will see below, they show their true power when transistors of both types are combined.

Let's look at NMOS transistors first.

## NMOS Transistor

MOSFETs have three pins, labeled "Gate", "Source" and "Drain". The signal at the gate pin determines whether the transistor is on or off. When the transistor is on, signals can flow along the source/drain path. If the transistor is off, the source/drain path is interrupted.

Start the simulation in the circuit below and observe how the switch on the gate input turns the transistor on and off. An NMOS transistor is on when a high voltage is present at the gate pin. In binary terms, we call a high voltage a "1".

<iframe
style="border:1px solid gray;"
title="NMOS Transistor"
width="600px"
height="700px"
src="https://viewer.antarescircuit.io?library=0aefe653-220e-49fe-9f6b-da3bade5b944&circuit=b6f6fcac-df78-4233-b099-210014d6acf0&theme=Black+%26+White"></iframe>

Don't be confused by zigzag-shaped component at the power supply. This is a resistor. Its purpose is to avoid that the light bulb and ground are directly connected to the power supply. Without it, there would be a short circuit when the transistor is switched on.

You can see that the NMOS transistor in this circuit works like an inverter: When the switch at the gate is off, the light bulb is on. When the switch is on, light bulb is off. Thus we have built our first logic gate: The NOT gate.

Now let's turn to the second type of MOSFET transistor, the PMOS transistor.

## PMOS Transistor

The PMOS transistor functions analogously to the NMOS transistor, but with reversed logic: The transistor is on when a low voltage is present at the gate. In binary terms, we call a low voltage a "0". To distinguish between the two types of transistors, the PMOS transistor has a small circle drawn on the gate pin.

<iframe
style="border:1px solid gray;"
title="PMOS Transistor"
width="600px"
height="700px"
src="https://viewer.antarescircuit.io?library=0aefe653-220e-49fe-9f6b-da3bade5b944&circuit=110a310a-2d17-4ab0-8979-b91f5b362694&theme=Black+%26+White"></iframe>

Like the NMOS transistor, the PMOS transistor in this circuit works like an inverter: When the switch at the gate is off, the light bulb is on. So why do we need two different types at all? Patience! We will let the PMOS transistor do its magic when we will combine it with NMOS transistors.

So far we have only built a NOT gate. Is it possible to build other types of logic gates?

Of course! Let's build a NAND gate next.

## NMOS NAND Gate

A NAND gate is the negation of an AND gate. This means that the output of a NAND gate is 0 only if both inputs are 1.

Now let's try to build the NAND gate with NMOS transistors. We need to find a circuit where the light bulb is "normally" on, and only off if both inputs are 1. So both inputs together must use a 1 to make the light bulb go out.

If we use NMOS transistors, we can achieve this by connecting two NMOS transistors in series.

<iframe
style="border:1px solid gray;"
title="NMOS NAND Gate"
width="600px"
height="700px"
src="https://viewer.antarescircuit.io?library=0aefe653-220e-49fe-9f6b-da3bade5b944&circuit=622084fa-59e0-4a1e-82da-f9ca132553f2&theme=Black+%26+White"></iframe>

Notice how the light bulb is only connected to ground if both transistors are on, and the light bulb only goes out in that one case.

So now we have a NAND gate. Can we also build a NOR gate with NMOS transistors?

## NMOS NOR Gate

A NOR gate is the negation of an OR gate. This means that the output of a NOR gate is only 1 if both inputs are 0.

Let's now try to build the NOR gate with NMOS transistors. We need to find a circuit where the light bulb is "normally" not on, and only on when both inputs are 0. So either of the two inputs can be set to a 1 to cause the light bulb to go off.

If we are using NMOS transistors, we can accomplish this by connecting two NMOS transistors in parallel.

<iframe
style="border:1px solid gray;"
title="NMOS NOR Gate"
width="600px"
height="600px"
src="https://viewer.antarescircuit.io?library=0aefe653-220e-49fe-9f6b-da3bade5b944&circuit=d78cc120-13bb-4a9c-8384-a1920b9f38b8&theme=Black+%26+White"></iframe>

Notice how the light bulb is connected to ground when at least one of the two transistors is on, and the light bulb goes off in all of these cases.

We have now built a NAND gate and a NOR gate with NMOS transistors. So far so good. But we still haven't answered the question why there are two types of transistors, NMOS and PMOS. It is now time to clarify this.

## Complementary MOS (CMOS)

Let's look again at the basic circuit of the NMOS transistor, which implements a NOT gate, in a little more detail.

<iframe
style="border:1px solid gray;"
title="NMOS Transistor"
width="600px"
height="700px"
src="https://viewer.antarescircuit.io?library=0aefe653-220e-49fe-9f6b-da3bade5b944&circuit=b6f6fcac-df78-4233-b099-210014d6acf0&theme=Black+%26+White"></iframe>

We have already established that the light bulb does not go on when the transistor on, because the switched-on transistor connects the light bulb to ground via the source/drain path. Since the drain pin is connected to the supply voltage, a current constantly flows through the transistor via the resistor when the transistor is on. This leads to  considerable power consumption.

So the goal is to find a circuit where no unnecessary current flows through the transistors. Current should only flow from the power supply to the output of the circuit, in this case the light bulb.

We achieve this by cleverly combining an NMOS transistor and a PMOS transistor: We combine
them in series between the power supply and ground.

<iframe
style="border:1px solid gray;"
title="CMOS NOT Gate"
width="600px"
height="750px"
src="https://viewer.antarescircuit.io?library=0aefe653-220e-49fe-9f6b-da3bade5b944&circuit=79e1e234-4115-43e9-925f-f95a2578007f&theme=Black+%26+White"></iframe>

If you simulate the above circuit, you will notice that in neither case does current flow unnecessarily through a transistor:

- If the input is low, no current flows from power to ground because the lower NMOS transistor is turned off.
- If the input is high, no current flows from power to ground because the upper PMOS transistor is turned off.

Overall, there is never an closed path between the power supply and ground. Pretty cool, isn't it?

Since this type of circuit takes advantage of the complementary nature of NMOS and PMOS transistors, such circuits are called CMOS (Complementary MOS). Because of its lower power consumption (and other reasons), it is the predominant technology in computer circuits today.

So now we have built a CMOS NOT gate. What about the other types of logic gates? Can these also be built using CMOS technology? The answer is yes. But before we can understand how, we need to look again briefly at PMOS.

## PMOS NAND Gate

Let's try to build a NAND gate with PMOS transistors only.

Remember: A NAND gate is only 0 if both inputs are 1.  So we need to find a circuit where each of the two inputs by itself can bring the output to 1 with a 0 at the input.

If we use PMOS transistors, we can achieve this by connecting the two PMOS transistors in parallel.

<iframe
style="border:1px solid gray;"
title="PMOS NAND Gate"
width="600px"
height="750px"
src="https://viewer.antarescircuit.io?library=0aefe653-220e-49fe-9f6b-da3bade5b944&circuit=18bf1acd-8363-49c4-9471-a749988ea806&theme=Black+%26+White"></iframe>

Notice how a single input with a 0 brings the output to 1. Only when there is no 0 on any input, the light bulblight bulb is pulled to ground (i.e. to 0) via the resistor.

## CMOS NAND Gate

Now we finally have all the components we need to build a CMOS version of a NAND gate. Similar to the CMOS-NOT gate, the goal is to exploit the complementary nature of NMOS and PMOS in such a way that no current flows unnecessarily through the transistors in any state of the circuit.

How do we do this? Well, just as with the CMOS NOT gate, we combine the NMOS and PMOS variants of the NAND gate such that they are in series relative to the power supply and ground.

<iframe
style="border:1px solid gray;"
title="CMOS NAND Gate"
width="600px"
height="850px"
src="https://viewer.antarescircuit.io?library=0aefe653-220e-49fe-9f6b-da3bade5b944&circuit=fabe8b34-563d-43b2-ac49-537caab74dec&theme=Black+%26+White"></iframe>

Merging the outputs of both subcircuits is allowed because both subcircuits are NAND gates and therefore produce the same result for each input combination. Therefore, there can be no conflict on the output line.

Regarding power supply and ground, if both subcircuits are connected in series, the lower subcircuit can ensure that the connection to ground is only present when the upper subcircuit is completely switched off. This ensures that no unnecessary current flows.

Great! We now have a CMOS NAND gate. Can we also build an AND gate? Nothing easier than that!

## CMOS AND Gate

To build a CMOS AND gate, we can simply take a NAND gate and add a NOT gate at the output. After all, the AND function is simply the negation of the NAND function.

<iframe
style="border:1px solid gray;"
title="CMOS AND Gate"
width="700px"
height="700px"
src="https://viewer.antarescircuit.io?library=0aefe653-220e-49fe-9f6b-da3bade5b944&circuit=d74fcace-0ddd-4621-9308-8bab5d20698b&theme=Black+%26+White"></iframe>

You notice that the construction of the AND gate is much more complex than that of the NAND gate: It needs an additional inverter, i.e. two more transistors. This is exactly the reason why computer circuits are not built from AND gates but from NAND gates. They are simpler, require less space and consume less energy.

## CMOS NOR Gate

For the sake of completeness we now look at how we can build a CMOS NOR gate.

The reasoning is analogous to the NAND gate: We take a NMOS NOR gate and a PMOS NOR gate and connect both in series in relation to power supply and ground. This ensures, as with the NAND gate, that no current flows unnecessarily through the transistors for any combination of input values.

<iframe
style="border:1px solid gray;"
title="CMOS NOR Gate"
width="600px"
height="850px"
src="https://viewer.antarescircuit.io?library=0aefe653-220e-49fe-9f6b-da3bade5b944&circuit=d78c37c2-e84f-419a-bf34-e1fee013b3a9&theme=Black+%26+White"></iframe>

## CMOS OR Gate

By now, this should come as no surprise to you: we form a CMOS OR gate by adding a CMOS NOT gate to the output of a CMOS NOR gate.

<iframe
style="border:1px solid gray;"
title="CMOS OR Gate"
width="700px"
height="800px"
src="https://viewer.antarescircuit.io?library=0aefe653-220e-49fe-9f6b-da3bade5b944&circuit=75116739-de95-4308-8cee-5cdaa1fdebba&theme=Black+%26+White"></iframe>

## Summary

And there you have it!

You have now learned how the most important logic functions NAND, NOR, NOT, AND and OR are constructed from transistors. To make this lesson not too long, we didn't describe XNOR and XOR. We leave them to you as an exercise.

Go to [Antares](https://www.antarescircuit.io), install the circuit designer application and try to build an XNOR gate from transistors. Resist the temptation to look for the solution on the internet too early, but try to come up with the right solution yourself using the principles you learned here. Have fun!

Let's briefly summarize the most important facts you've learned in this lesson.

- Modern computers consist of billions of NAND gates.
- A NAND gate can be built from MOSFET transistors, of which there are two types: NMOS and PMOS.
- A NMOS transistor is switched on by a 1 at the input.
- A PMOS transistor is switched on by a 0 at the input.
- Logic gates can be built either with NMOS only or with PMOS only, but then they need an additional resistor and consume energy unnecessarily.
- Logic gates are therefore built from combinations of NMOS and PMOS transistors. These combinations are called CMOS.
- This naturally results in negated logic functions such as NAND and NOR.
- Non-negated logic functions AND and OR must be formed by additional inverters from NAND and NOR and are therefore more complex.
- This is why modern computer circuits are build from NAND gates (or alternatively from NOR gates).
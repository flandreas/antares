---
title: How flip-flops work
description: This post explains how flip-flops work, how they are built from logic gates, all using inline circuit simulation with embedded, context-sensitive explanations.
---

In this tutorial, we are going to explore what flip-flops are and how they are built from logic gates. If you want to first learn how logic gates are built from transistors, check out our [logic gates](/gates-from-analog-transistors) tutorial.

Simple digital circuits consisting of logic gates take signals from inputs, let the signals flow through the logic gates, and thereby produce new signals that represent the result of these logic functions. As long as the signals strictly flow from the inputs towards the outputs (and are newer fed back into earlier stages of the circuit), such circuits are called "combinational circuits".

However, such combinational circuits are not capable of storing a state. They can't remember the state of a previous signal: Once the input signals disappear, a combinational circuit has no means of remembering the state of the previous signals. This restriction prevents us from building many useful circuits. Think of a computer-like circuit that must display a number in a 7-segment display even if the user is not pressing anymore the keyboard key that led to the number. To store such a state, circuit designers use components called "flip-flops".

> :bulb: There are actually two different terms to describe the component that can store a state: The simpler "Latch", and the more sophisticated "Flip-Flop". We will first discuss latches, and then go on to flip-flops.

## What we are looking for

Let's first look at how this magical latch is used before we dive deeper and think about how it is built.

Start the simulation of the circuit below by pressing the button with the right-pointing arrow (appears when hovering with the mouse over the circuit).

<iframe
style="border:1px solid gray;"
title="Magic Set"
width="500px"
height="300px"
src="http://viewer.antarescircuit.io?library=2cfdd5c6-c8a8-4e72-a188-60229a518df9&circuit=33155198-b5aa-4204-90f9-e3795a5141d7&theme=Black+%26+White">
</iframe>

Initially, the input "Set" is 0, and so is the output "Out". If you click on "Set", it changes to 1, and so does the output "Out". If you now click again on "Set", it goes back to 0. But "Out" is still 1: The box in the middle clearly seems to remember the fact that "Set" was previously 1. It appears to store the 1.

How would you approach building such a box?

## Mechanical?

You might be tempted to build something like the switch for the lamp in your bedroom. You press the switch, and the lamp turns on. Even if you take your finger off the switch and walk away, the lamp stays on.

Try it out in the circuit below. Start the simulation and press the "Set" switch.

<iframe
style="border:1px solid gray;"
title="Mechanical switch"
width="500px"
height="400px"
src="http://viewer.antarescircuit.io?library=2cfdd5c6-c8a8-4e72-a188-60229a518df9&circuit=6a08b5b1-9cbb-4852-a302-9b28c777b711&theme=Black+%26+White">
</iframe>

While this design looks appealing at first glance, there are two reasons why this is not exactly what we are looking for.

1. You have to operate the switch manually. This is good for your bedroom, but not so much in digital circuits, where we want to store digital signals coming from other digital components. So, typically no human fingers are involved here.
2. The switch is a mechanical thing: When you press it, a metal part moves from one position to another. The "remembering" part comes from the position of this metal piece. While very early computers worked somewhat this way, this mechanism is very slow and takes a lot of space.

We have to look for something faster and more compact. Let's try to use what we already know about logic gates.

## Use some logic

If we try to write down what the magical box in the first section really does, we get to the following two statements:
- If "Set" is set to 1, "Out" also has to go to 1.
- If "Set" goes back to 0, "Out" has to stay on 1.

If we combine these two statements into a single, more rigid logical expression, we get the following:

*"Out" has to be 1 if "Set" is 1 **OR** if "Out" is already 1*

The crucial part is the **OR** in the logical expression, which we can represent with an OR gate in the next circuit. 
<iframe
style="border:1px solid gray;"
title="Set-Latch (OR)"
width="500px"
height="300px"
src="http://viewer.antarescircuit.io?library=2cfdd5c6-c8a8-4e72-a188-60229a518df9&circuit=f093cb3e-512a-4619-b5ba-406b391b1dbc&theme=Black+%26+White">
</iframe>

By feeding the output signal back to the first input of the OR gate, we make sure that the 1 keeps being stored even if "Set" goes back to 0. That's the power of the OR gate. Once there is a 1 in the system, it stays there.

But the essential point is feeding the output signal back to the input of the OR gate. Keep this in mind for the remainder of this tutorial!

## Have you tried to turn it off and on again?

If you use this design for the lamp in your bedroom, you would hardly ever fall asleep: The circuit has no means of turning the lamp off. Once the output "Out" is 1, it stays 1 forever.

In addition to the "Set" input, we therefore need a "Reset" input that sets "Out" back to 0.

Try it out in the circuit below. Make sure to set "Set" back to 0 before pressing "Reset": Setting both "Set" and "Reset" to 1 will not work – it confuses the circuit and is therefore an invalid combination.

<iframe
style="border:1px solid gray;"
title="Magic Set-Reset"
width="500px"
height="300px"
src="http://viewer.antarescircuit.io?library=2cfdd5c6-c8a8-4e72-a188-60229a518df9&circuit=5110e5a6-70b1-4f7f-affa-46a1f5f46cc9&theme=Black+%26+White">
</iframe>

How can we implement this "Magic Set-Reset" box? Let's try to find a way to express the new requirements for the circuit using logical expressions.

The output has to be 1 if
- "Set" is 1 **OR** "Set" was 1 before (like earlier in the "Set-Latch")
- **AND**
- "Reset" is **NOT** 1

Using logic gates for the **AND** and **NOT** terms naturally leads to the following circuit:

<iframe
style="border:1px solid gray;"
title="Set-Reset Latch"
width="600px"
height="750px"
src="http://viewer.antarescircuit.io?library=2cfdd5c6-c8a8-4e72-a188-60229a518df9&circuit=e3c0dd8f-3e20-4182-b696-c987ca99673d&theme=Black+%26+White">
</iframe>

## Transistors are costly

The new "Set-Reset Latch" works perfectly, and we could call it a day. But unfortunately, we can't stop here because there is the aspect of "cost".

Our current circuit uses an AND gate and an OR gate. If you remember from the "Build logic gates from transistors" tutorial that building AND gates and OR gates require more transistors than their negative variants NAND and NOR, you can easily understand that this isn't the way latches are built in reality. In fact, common latch implementations are built from NAND or NOR gates to save cost, space and electrical power.

So let's try to build an equivalent circuit using NOR gates only. The choice of NOR gates is arbitrary: We could have used NAND gates, and the resulting circuit would be analogous, but we have to choose something. 

But be warned: What follows is not the easiest circuit to understand in the world of digital circuits, but I do my best to guide you step by step through the process. Bear with me, go slowly, and observe the circuit we're building during simulation.

> :bulb: The following explanation is shaped by me already knowing what the resulting circuit looks like. If you were an engineer in the 20th century tasked with **inventing** the circuit, you would have probably done some trial-and-error to find it or used a more analytical approach. 

OK. So we know that we are supposed to only use NOR gates to achieve the same functionality as the AND-OR-based circuit. The functionality essentially consists of three parts:
1. Setting the latch to 1
2. Storing the 1
3. Resetting the latch to 0

In principle, there is also a fourth part "Storing the 0", but we hope for the moment that this part magically emerges from the first three parts, just like it did in the "Set-Reset Latch" circuit.

### Step 1: Setting the latch to 1

The requirement for this part is: If "Set" is 1, "Out" has to go to 1 too.

The simplest way to fulfill this requirement would be to simply connect "Set" with "Out". But remember that the following step 2 requires that the signal must be stored, and as we've learned before, this is done by feeding the output signal back to the place where "Set" enters the circuit. So we build a path that leaves the signal from "Set" unchanged when it arrives at "Out", but includes a place where we can later loop back the output value to.

We can achieve this by building a path with two consecutive inverters: Inverting a signal twice yields the original signal. Since we are supposed to use NOR gates, we can use the fact that an inverter can be build from a NOR gate by setting the second input to constant 0. Because the output of a NOR gate is only 1 if all inputs are 0, the signal on the first NOR input gets inverted: 0 becomes 1 (because 0 nor 0 is 1), and 1 becomes 0 (because 1 nor 0 is 0).

The funny placement of the NOR gate just anticipates the way they are used in the following steps. For the moment, both NOR gates operate just in series.

<iframe
style="border:1px solid gray;"
title="NOR-SR-Latch (Step 1)"
width="500px"
height="500px"
src="http://viewer.antarescircuit.io?library=2cfdd5c6-c8a8-4e72-a188-60229a518df9&circuit=b40f1027-4e0c-4d44-b5fc-6fc2c49d44fe&theme=Black+%26+White">
</iframe>

### Step 2: Storing the 1

This is now the interesting part. After we have set "Set" to 1, this 1 also appears in "Out". We now must find a way how "Out" stays at 1 even after "Set" went back to 0.

This is what the right part of the circuit below highlights: If the second input of "NOR A" would now be 1 instead of the constant 0, we would exactly achieve this behavior: 0 nor 1 is 0, and because this 0 runs through the lower inverter, we have the desired "Out" result of 1.

Run the simulation, click on "Set", and imagine that the 1 at the output would remain after "Set" went back to 0, **if only the second NOR input were now 1**.

<iframe
style="border:1px solid gray;"
title="NOR-SR-Latch (Step 1.5)"
width="900px"
height="500px"
src="http://viewer.antarescircuit.io?library=2cfdd5c6-c8a8-4e72-a188-60229a518df9&circuit=02e3bf3c-191b-4a59-af15-fcba3e5456f3&theme=Black+%26+White">
</iframe>

How can we make sure that the second NOR input is 1 in this situation? Luckily, "Out" is already 1, so we can simply feed it back into the second NOR input, replacing the constant 0 we've used before.

And by doing this, we've also added the magical ingredient of "feeding back the output signal" that produces the effect of storing the 1.

Try it out in the circuit below: Start the simulation, click on "Set" to introduce the 1, then click again on "Set" to make input 1 disappear, and observe how "Out" stays at 1.

<iframe
style="border:1px solid gray;"
title="NOR-SR-Latch (Step 2)"
width="500px"
height="400px"
src="http://viewer.antarescircuit.io?library=2cfdd5c6-c8a8-4e72-a188-60229a518df9&circuit=b01e6620-db22-4037-aeaf-262afc958f68&theme=Black+%26+White">
</iframe>

### Step3: Resetting the latch to 0

Note how the circuit above only works because the lower NOR gate's second input is still constant 0. What would happen if it was 1? Well, since its first input is 0, and 0 nor 1 is 0, the output would go to 0.

And luckily, this is exactly what we need for resetting the latch to 0. Let's therefore replace constant 0 at the second NOR gate with a new "Reset" circuit input.

<iframe
style="border:1px solid gray;"
title="NOR-SR-Latch (Step 3)"
width="500px"
height="400px"
src="http://viewer.antarescircuit.io?library=2cfdd5c6-c8a8-4e72-a188-60229a518df9&circuit=2329d972-c750-46e0-880b-c4fd5f878794&theme=Black+%26+White">
</iframe>

Start the simulation and try to set and reset the latch. Make sure that at any time, only "Set" or "Reset" or none of them is 1, but never both.

Isn't this a beautiful circuit? At first glance, it seems perfectly symmetrical: Two NOR gates, both cross-coupled with each other. And when either storing 0 or 1, in both cases the stored state is enforced by a feedback wire in state 1.

But if you look closer, you notice an essential symmetry break: The output "Out" is placed on the "Reset" row, **not** the "Set" row. Why is that?

To understand this, recall what a NOR gate actually does: A NOR gate is only 1 if all inputs are 0. So we have two cases to consider:
- To store a 1 at "Out", the upper NOR must produce a 0, because its output will be inverted by the lower NOR. This output value 0 is re-enforced by the 1 coming from the lower NOR, because any 1 at a NOR's input leads to output 0.
- To store a 0 at "Out", the lower NOR must produce a 0, because it's directly connected to "Out". This output value 0 is re-enforced by the 1 coming from the upper NOR, because any 1 at a NOR's input leads to output 0.

This only works for the NOR gate at the lower "Reset" level. The NOR gate at the upper "Set" level always produces the inverse of "Out". This is the asymmetry.

## We've been cheating

Start the simulation of the circuit below and observe what happens.

<iframe
style="border:1px solid gray;"
title="Oscillation"
width="500px"
height="500px"
src="http://viewer.antarescircuit.io?library=2cfdd5c6-c8a8-4e72-a188-60229a518df9&circuit=9c5d845a-474a-4b4b-ba77-158f2ccf2611&theme=Black+%26+White">
</iframe>

The circuit oscillates quickly between 0 and 1 at "Out". Why is that?

To find out what's going on, stop the simulation, reduce the simulation speed by dragging the slider in the circuit's toolbar to about 20%, and restart the simulation.

You now see that both NOR gates are constantly fighting against each other in setting the latch's state. Both back-feeding wires, which are essential in storing the state, are updated at the very same time.

Why does this happen here and not in the previous circuit?

Well, the crucial aspect is the time it takes an individual NOR gate to calculate the new output after one of its inputs has changed. We call this property "propagation delay". In this circuit, both NOR gates have the same propagation delay of 20 ns. The circuit simulation applies this exact propagation delay every time a NOR gate is updated, leading to both NOR gates working in lockstep.

The previous circuit was configured differently: There, the upper NOR gate's propagation delay was 18 ns, while the lower NOR gate's propagation delay was 20 ns. This gave the upper NOT gate an advantage in establishing its desired state first.

In real, electronic circuits, the propagation delays of NOR gates are slightly different, either by production difference or because of thermal or other physical factors. A real latch might oscillate a couple of times, but eventually, it will settle into a stable state, because one NOR gate accidentally wins the tight race against the other.

## A moment to pause

We've covered a lot of ground to this point, and if you understood all the concepts so far, then congratulations, you're doing great!

The last circuit we've just built is called "SR Latch", where the "S" designates the "Set" input and the "R" designates the "Reset" input. By all its beauty and importance, many people say they have a hard time wrapping their head around how the SR latch really works. If you've struggled too, then know that you are not alone.

And stay with me, because we are not yet done, but I promise the hardest part lies behind you, and from now on things are only getting easier.

Let's go on!

## One input to rule them all

If you look again at the SR latch, you see that it's distinctive feature in terms of usage is that it has two separate inputs: The "Set" input for setting the latch (to 1), and the "Reset" input for resetting it (to 0).

This is okay in certain applications, but other applications like building a computer require to store the signal on one particular wire, which can either be 0 or 1. These applications don't fit the interface of the SR latch very well with its two separate inputs.

What we would rather want in these situations is a latch that has a single "data" input, probably requiring an additional input that controls when it is time to store the signal at the "data" input.

Simulate the circuit below to see how it is supposed to work:
- As long as "Enable" is 0, nothing happens to "Out" when "Data" is changed
- If "Enable" is set, every change to "Data" is stored and forwarded to "Out"
- After "Enable" went back to 0, the previous value a "D" is kept stored.

<iframe
style="border:1px solid gray;"
title="Magical D Latch"
width="500px"
height="300px"
src="http://viewer.antarescircuit.io?library=2cfdd5c6-c8a8-4e72-a188-60229a518df9&circuit=7af9a7e3-d18b-486c-8ad7-6ff1b49c7253&theme=Black+%26+White">
</iframe>

How would we build such a circuit?

The key idea is to use our well-known SR latch and extend it with a "Control logic" that converts the "D" input to the corresponding "Set" and "Reset" signals for the SR latch.

* If "Enable" is 0, the SR latch should store its value ("Set" and "Reset" must be 0)
* If "Enable" is 1:
  * If "D" is 0, the SR latch must be reset ("Reset" must be 1)
  * If "D" is 1, the SR latch must be set ("Set" must be 1)

From the logical conditions in the statements above, we can directly derive an implementation using logic gates for the "Control logic".

Run the simulation and study the explanations for the different scenarios.

<iframe
style="border:1px solid gray;"
title="D Latch"
width="700px"
height="600px"
src="http://viewer.antarescircuit.io?library=2cfdd5c6-c8a8-4e72-a188-60229a518df9&circuit=1f34fd1f-a455-4f14-a6e6-f5b5e35bca47&theme=Black+%26+White">
</iframe>

Note how the two AND gates operate as gate-keepers for the SR latch: As long as "Enable" is 0, both AND gates produce 0, which leads to "Set" = "Reset" = 0, and in turn asks the SR latch to store its state. Note also how the NOT gate produces the "Reset" signal as the inverse of the "D" input.

The circuit we've just built is called "D Latch", because of its "Data" input used to accept both 0 and 1 signals.

## From latches to flip-flops

So far, we've only covered latches, although this tutorial is called "How flip-flops work". It's time to discuss some disadvantages of latches and how they are solved by another type of circuits that store a state: Flip-flops. 

Let's recall how the D latch works. If you want to store 1 in a D latch, you first have to set "Enable" to 1, and then set "D" to 1. As long as "Enable" stays at 1, every change of "D" will immediately be stored in the latch.

This property has – amongst others – the following disadvantages:
- **Need for "Enable" generation**: A circuit using latches (and other components) must create one or many "Enable" signals and orchestrate these so that every latch is enabled exactly during the time the "D" signal is ready. This can be complicated.
- **Race conditions**: Since "D" is directly forwarded to "Out" the entire time the latch is enabled, potential feedback paths in the circuit can arrive at the latches "D" input. If the latch is then still enabled, this can lead to undesired oscillation and race conditions.
- **Noise and glitches** Latches can catch unwanted voltage spikes or glitches while they are enabled.

Instead of enabling a latch for an extended period of time, we want to make this period as short as possible to counter these disadvantages. Engineers have therefore come up with the concept of "clock signals". A clock produces a signal that bounces between 0 and 1 with a certain frequency, which is then distributed to components like latches to serve the following pursposes:

- The clock signal orchestrates the behavior of components that depend on each other
- Latches are enhanced such that they only react to e.g. the rising edge of the clock signals (0 to 1), which drastically reduces the time their data input is connected to the output

Given this definition of a clock signal, we can finally carve out the difference between latches and flip-flops:
- A latch is a **level-triggered** circuit that stores a state. It reacts as long as the "Enable" level is "high" (i.e. 1)
- A flip-flow is an **edge-triggered** circuit that stores a state. It reacts only during the transition of the clock signal (e.g. from 0 to 1)

How would we build such as flip-flop?

### Edge-triggering

The first - and most interesting problem – we have to solve is how we can **detect** the raising edge of a clock signal, and how we can then enable our latch (which now is about to become a flip-flop) **as shortly as possible** to capture the "D" input already waiting to be stored. In other words: We need to create a short positive pulse triggered by a rising clock edge.

The circuit below shows one way how this can be achieved. Start the simulation, click multiple times on "Clock", and observe in the oscilloscope how the output (the blue probe) displays a narrow pulse every time the "Clock" signal (the yellow probe) rises from 0 to 1.

<iframe
style="border:1px solid gray;"
title="Pulse Generator"
width="800px"
height="500px"
src="http://viewer.antarescircuit.io?library=2cfdd5c6-c8a8-4e72-a188-60229a518df9&circuit=e75a037d-2a1e-45aa-bd2b-73f8704e228c&theme=Black+%26+White">
</iframe>

The oscilloscope shows nicely the resulting pulse, but it doesn't explain **how** the pulse gets created.

When the clock signal rises from 0 to 1, the 1 travels along two paths to the AND gate: The first path is directly to the AND gate, and the second path is through an **odd number** of NOT gates. Since the number of NOT gates is odd, the second pin of the AND gate is initially 1. Therefore, as soon as the 1 on the direct path arrives at the AND gate, its output goes to 1 (after the AND's propagation delay). The pulse at "Out" goes to 1.

While the 1 from the clock travels through the cascade of NOT gates, the pulse stays at 1. As soon as the initial 1 from the clock reaches the AND gate, it has become a 0 (due to the odd number of NOT gates), and the AND gate's output goes to 0, which terminates the pulse.

The width of the generated pulse is therefore determined by the sum of the NOT gate's propagation delays, so you want to make that as small as possible to create a sharp pulse. But be careful: It must be larger than the AND's propagation delay, otherwise it won't work. Since in practice, a NOT gate's propagation delay is considerably smaller than that of an AND gate, we need a couple of NOT gates to make the NOT chain be "slower" than the AND gate.

You can observe this behavior in detail if you activate the signal flow animation during simulation. Stop the simulation, reduce the simulation speed to around 20%, and restart the simulation.

### Turning a D Latch into a D Flip-Flop

We have now all pieces we need to turn a D Latch into a D Flip-Flop: We simply take the D Latch and replace the "Enable" input with the edge-triggering component we've just built and give it the clock signal as input.

Start the simulation and observe how the value at "Data" only gets stored when the "Clock" goes from 0 to 1.

<iframe
style="border:1px solid gray;"
title="D Flip-Flop"
width="900px"
height="500px"
src="http://viewer.antarescircuit.io?library=2cfdd5c6-c8a8-4e72-a188-60229a518df9&circuit=7b69d1c5-7f22-4d8f-9453-01d37b7adc2e&theme=Black+%26+White">
</iframe>

## Example usage

You've put in the hard work, and I want to reward you with a little example circuit that shows how D flip-flops can be used in a real-world scenario.

The circuit below combines four D flip-flops in series: Each output is fed into the next flip-flop's input. The clock "CLK" produces a common clock signal for all four flip-flops. When you press the button, you can observe signal 1 flowing through the flip-flops. Press the button again, and the same happens with a 0 signal.

Hover with the mouse over the clock and turn the knob that appears to change the clock's frequency.

<iframe
style="border:1px solid gray;"
title="Example usage"
width="600px"
height="400px"
src="http://viewer.antarescircuit.io?library=2cfdd5c6-c8a8-4e72-a188-60229a518df9&circuit=ce9a9591-2ef0-427c-8f2f-ff154ddec00b&theme=Black+%26+White">
</iframe>

## Conclusion

You've arrived at the end of this tutorial. Let's quickly summarize what you've learned.

- Simple circuits without feedback loops are called "combinational"
- Storing a state requires a feedback loop in the circuit. Such circuits are called "sequential"
- A latch is a sequential circuit that stores a state. It is "level-triggered", which has some shortcomings.
- A flip-flop is an "edge-triggered" circuit that stores a state and avoids these shortcomings.

We've covered the D flip-flop as one example of a flip-flop, but there are many more like T flip-flop or JK flip-flow, all with many different flavors.

If you keen to explore how they work, go to [Antares](https://www.antarescircuit.io), download the application, checkout the various flip-flops in the "Flip-Flops" folder of the standard library, and play around!
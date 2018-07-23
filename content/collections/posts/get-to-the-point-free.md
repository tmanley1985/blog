---
title: Get To The Point Free
slug: get-to-the-point-free
date: '2018-07-16'
tags:
- functional programming
- point free
- eta conversion
- tacit programming
---

No one likes to repeat themselves.

Whether it's in software, conversation or the fifth grade, we admonish repetition in favor of abstraction.

**Point free style** or **tacit programming** is a way of defining functions that doesn't explicitly identify it's parameters.

*What!*

When I first read that definition I imagined something like this:

`const greet = () => "Hello" + name`

In that example, you would surely be asking yourself where the variable `name` came from. It wasn't a parameter of `greet` so it must be some global state or possibly even an undefined variable destined to crash your program.

In reality the way we acheive **point free** code is that we define functions *in terms of* other functions. At some point down the rabbit hole there will be a function defining it's arguments. Let's look at some code.

<div class="tiny">![point free style](/images/pointfree.png)
<br/>
*code samples were made simple by using [Carbon](https://carbon.now.sh/)*</div>

Let it never be said that I can't write a damned good multiply function. Damned good.

I want to direct your attention to the `timesTwo` function. Notice that it takes a parameter `x` and just calls `multiply` that is partially applied with `2` with `x`. However, in this case the parameter `x` is unnecessary because `multiply(2)` returns a function that looks like: `y => 2 * y`.

So we say that `timesTwo` identifies it's parameters.

What about the `pointFreeTimesTwo` function? Well it defines itself by saying that it is equal to the aforementioned `multiply(2)` which we learned earlier returns a new function that accepts a number and returns that number multiplied by 2. By defining the function in this way, `pointFreeTimesTwo` doesn't have to introduce an intermediate layer of abstraction, thereby reducing redundancy.

These functions are equivalent in the sense that they both will multiply some number by 2 to get a result, but one is more terse and and avoids unnecessary laziness.

<br/>
## Composing
<hr/>

When we leverage composition, we can create point free functions such as `getUserNames`.

<div class="tiny">![point free style composition](/images/compose-pointfree.png)
<br/>
*code samples were made simple by using [Carbon](https://carbon.now.sh/)*</div>

<br/>
## Which is better?
<hr/>

One argument against **point free style** is that it is unreadable. I would say that it *can* be unreadable but it isn't necessarily so. In fact, it can significantly reduce complexity by removing redundant code that obfuscates intention. If you have the benefit of working in a functional language with all the fixin's, this business of readability becomes even less of an issue with a robust type system and currying and composition being built in.

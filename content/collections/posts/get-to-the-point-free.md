---
title: Get To The Point Free
slug: get-to-the-point-free
date: '2018-07-16'
tags:
- functional programming
- point free
- tacit programming
---

Whether it's in software, conversation or the fifth grade - no one likes to repeat themselves.

As software developers we're admonished against repetition and counseled instead to seek abstraction. Functional programmers are especially enamored with abstraction and have several techniques to help aid them achieve modularity.

**Point free style** or **tacit programming** is a way of defining functions that doesn't explicitly identify it's parameters.

*What!*

When I first read that definition I imagined something like this:

`const greet = () => "Hello" + name`

In that example, you would surely be asking yourself where the variable `name` came from. As `name` isn't a parameter of `greet` it must be some global state or possibly even an undefined variable destined to crash your program. The good news is that this sort of <a target="_blank" href="https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c">impure</a> code isn't an example of tacit programming.

In reality the way we achieve point free code is that we define functions *in terms of* other functions. At some point down the rabbit hole there will be a function defining it's arguments. Let's look at some code.

<div class="tiny">![point free style](/images/pointfree.png)
<br/>
*code samples were made simple by using [Carbon](https://carbon.now.sh/)*</div>

Let it never be said that I can't write a damned good multiply function. Damned good.

I want to direct your attention to the `timesTwo` function. Notice that it takes a parameter `x` and just calls `multiply(2)` with `x`. However, in this case the parameter `x` is unnecessary because `multiply(2)` returns a function that looks like: `y => 2 * y`.

So we say that `timesTwo` *identifies* it's parameters.

What about `pointFreeTimesTwo`? It doesn't explicitly tell you what it takes. However we said that `multiply(2)` returns a function, `y => 2 * y` and we define `pointFreeTimesTwo` to be equal to that. So we can deduce what it accepts because we know the function it is equivalent to.

In terms of utility, `pointFreeTimesTwo` and `timesTwo` are equivalent. However, by defining `pointFreeTimesTwo` in this way we avoid an intermediate layer of abstraction, thereby reducing redundancy. As stated above, at some point there will be one or many functions that define their arguments. You can't have point free all the way down or no parameters would ever be defined!

<br/>
## Composing Right Along
<hr/>

Tacit programming encourages the use of **composition**. Leveraging composition and point free style, we can derive functions such as `getUserNames`.

<div class="tiny">![point free style composition](/images/compose-pointfree.png)
<br/>
*code samples were made simple by using [Carbon](https://carbon.now.sh/)*</div>

Of course `userNames` accomplishes the same thing but the benefit of using composed functions like `getUserNames` we only have to iterate over the collection once!

<br/>
## Point Counterpoint
<hr/>

One argument against point free style is that it is unreadable. It admittedly *can* be unreadable but it isn't necessarily so. Cursive can be unreadable, but when done correctly can be elegant. In fact, tacit programming can significantly reduce complexity by preventing redundant code that only serves to obfuscate intention. If you have the benefit of working in a functional language with all the fixins then readability becomes even less of an issue with currying and composition being built in as it reduces boilerplate.

Point free style isn't a commandment. It's a paradigm that some people adopt early on or tend towards as they begin to lasso the chaos that comes from bloated code. If you're a fan of terse, modular code you certainly can't go wrong with point free style.



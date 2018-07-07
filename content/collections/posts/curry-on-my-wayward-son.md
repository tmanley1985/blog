---
title: Curry On My Wayward Son
slug: curry-on-my-wayward-son
date: '2018-07-02'
tags:
- functional programming
- currying
- partial application
---

If you've landed here in search of recipes, you won't need any coconut milk for what I'm about to show you. Although if you feel so inclined, I won't protest.

What if I told you that you could call a function with only some of it's arguments?  I see the suspicion etching hard lines in your face. You're wondering why you would ever want do that. I'll get to that in a minute. At the moment, I want to focus on *what* you'll be doing.

<div class="tiny">![curried add function](/images/curriedAdd.png)
*code samples were made simple by using [Carbon](https://carbon.now.sh/)*</div>

Notice how the `sum` function takes two parameters *at the same time?*  When you call the function, you pass in the arguments at once.

In other news, water is wet.

The `add` function doesn't play by those rules.  It only accepts one argument at a time. Well, that's a bit of a lie.  In reality, when you pass in the first argument you are given a new function in return!  This makes the `add` function a <a target="_blank" href="https://en.wikipedia.org/wiki/Higher-order_function">higher order function</a>.

<a target="_blank" href="https://babeljs.io/docs/en/learn#introduction">ES6</a> syntax thankfully makes this business of functions returning functions a lot more readable. In functional languages like <a target="_blank" href="http://www.purescript.org/">purescript</a> or <a target="_blank" href="https://www.haskell.org/">haskell</a>, every function is automatically curried. In javascript, we need to either explicitly curry the function or we could leverage a library like <a target="_blank" href="https://ramdajs.com/">ramda</a> to auto curry our functions for us. The benefit of using the latter is that we can call our curried function with either some or all of the arguments at once rather than calling each argument consecutively and arriving at this sort of *butt syntax*:

`add(1)(2)`

In short, **currying** is the process of breaking a function up into smaller, **unary** functions (functions that accept only one parameter). The term for the number of parameters a function has is known as it's **arity**.

<br/>
### Reusable Lego Blocks
<hr/>

So what does this give us?

Currying allows us to construct new functions from deconstructed ones! Take a look at the `addOne` function above. We've created a new function by applying `1` to the `add` function.

In it's curried form, the `add` function is more reusable as it can be a building block for other constructions.

Let's look at another example.

<div class="tiny">![curried add function](/images/pluck.png)</div>

The `pluckName` function is a small, expressive function that is derived from the curried `pluck` function. This function has one responsibility. Encoded within it are the means to pull out the value for any object with a key of `name`.  There is no `this` being passed around or unruly state muddying our intention - only clean, terse logic.

<br/>
### To Curry Or Not To Curry?
<hr/>

Leveraging currying is contextual and like most things, the devil is in the details. If it doesn't make sense for your use case, then don't use it. Currying for currying's sake does not a good programmer make.

As currying is a tool for abstraction and is not tied to any specific domain, use cases are myriad.

If you're interested in functional programming, currying is ubiquitous and as such is a necessary concept to understand before diving into more complex topics.


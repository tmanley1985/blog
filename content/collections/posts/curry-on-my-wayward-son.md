---
title: Curry On My Wayward Son
slug: curry-on-my-wayward-son
date: '2018-07-02'
tags:
- functional programming
- currying
- partial application
---

If you've landed here in search of recipes, you won't need any coconut milk for what I'm about to show you.  Although if you feel so inclined, I won't protest.

What if I told you that you could call a function with only some of it's arguments?  I see the thoughts etching hard lines in your face.  You're wondering why you would ever want do that.  I'll get to that in a minute.  For now I want to focus on the *how*.

<div class="tiny">![curried add function](/images/curriedAdd.png)
*code samples were made simple by using [Carbon](https://carbon.now.sh/)*</div>

Notice how the `sum` function takes two parameters *at the same time?*  When you call the function, you pass in the arguments at once.  In other news, water is wet.  Let us now turn our attention to the `add` function.  Here, we return a function that accepts the first parameter, and once called will return a function that accepts the second parameter.  Once *that* function is called, we add the parameters passed in.  ES6 syntax thankfully makes this business of returning functions a lot more readable.  In essence, we are returning a function for each parameter and the final function does something with all the arguments passed in, in this case we're adding them together.

Notice the weird *butt* syntax - `add(1)(3)` - when calling the `add` function?  Remember this is because when we pass in the first argument, `add` will return a new function that accepts the last argument.

The `add` function is really just the `sum` function in *curried* form.  In short, currying is the process of breaking a function up into smaller functions that take one parameter each.

Now *why* would anyone want to do this?  Well currying allows for something called `partial application`.  This is a far more intuitive term that means we can call a function with only some of it's arguments.  The `addOne` function above is an example of partial application.  We partially apply 1 to the `add` function as it's first argument and this returns to us a new function that takes another number.














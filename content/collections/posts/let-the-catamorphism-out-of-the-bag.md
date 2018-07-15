---
title: Let the Catamorphism Out of the Bag
slug: let-the-catamorphism-out-of-the-bag
date: '2018-07-14'
tags:
- functional programming
- catamorphism
- anamorphism
---

I want to talk about paper dolls.

Yeah you heard me. Specifically I want to talk about *paper doll chains*. You know what I'm talking about. Mrs. McKinney had you do them in art class while she worked on her Twilight fan fiction.

*Twilight fan fiction*... seems redundant.

Anyhoo, these paper doll chains encapsulate two great and powerful abstractions in functional programming known as **folding** and **unfolding**, known respectfully as a **catamorphism** and an **anamorphism**.

With a bit of imagination we can think of the process of **folding** as collapsing the chain into one *single* paper doll. Additionally, we can think of the process of **unfolding** as *generating* a chain of paper dolls from an initial one.

<br/>
## You Gotta Know When To Fold Em
<hr/>

Let's look at the **catamorphism**, or the generalized notion of folding. For some intuition, we can look at reducing an array of numbers in javascript using a `sum` function.

`[1,2,3,4,5].reduce((acc,val) => acc + val, 0) // 15`

We pass a function to reduce that will add all the elements of the array, starting with zero as the accumulator. No great mystery here.

Here's another example.

`['a','b','c'].reduce((acc,val) => acc + val, '') // 'abc'`

Looks familiar wouldn't you say? We have a array of elements (in this case, strings) and a function to smash them together and an initial starting point (the empty string).

In both cases, the array of elements were **folded** into a single value.

The general concept here is that a catamorphism tears down a data structure; it's **cata**-strophic! I find it helpful to think of the final result (15) as containing within it, all the values in the array (1,2,3,4,5).

<br/>
## Something... something.. anamorphisms
<hr/>

Whereas we thought of catamorphisms as the generic notion of folding a data structure into some other structure or value, we can think of an **anamorphism** as the act of generating a data structure from some **initial value**.

I'm about to Mr. Miyagi your ass. Have you ever had to use a `range` function to generate a list of numbers? That's an **anamorphism**!

Take the <a target="_blank" href="https://ramdajs.com/docs/#range">range</a> from a library like <a target="_blank" href="https://ramdajs.com">Ramda</a>.

`R.range(0, 4) // [0,1,2,3]`

Starting from zero, you are *building the world* of numbers with four as an exclusive ending point (meaning four won't be included in the final result).

Remember those paper dolls from before? The intuition here would be that starting from the first paper doll, you can keep unfolding it until you have a whole chain of them.

<br/>
## So... basically reduce and range?
<hr/>

So far we've motivated these concepts as it relates to folding and generating arrays. However, both the notion of folding and unfolding are generic and are *independent* of the data structure. That means that we should be able to fold and generate any data structure that can be traversed *recursively* such as linked lists, trees, etc.

<br/>
## But what about Category Theory?
<hr/>

Like a great number of concepts in functional programming, both catamorphism and anamorphism have their roots in <a target="_blank" href="https://en.wikipedia.org/wiki/Category_theory">Category Theory</a>.

I've purposefully strayed from any categoric underpinnings in this post, opting instead to build intuition through analogy. At some point however, analogy breaks down and calamity ensues. Intuition can carry you only so far.

If you're interested in jumping in the deep end, I suggest <a target="_blank" href="https://twitter.com/BartoszMilewski">Bartosz Milewski's</a> incredibly approachable <a target="_blank" href="https://www.youtube.com/watch?v=I8LbkfSSR58&list=PLbgaMIhjbmEnaH_LTkxLI7FMa2HsnawM_">Category Theory For Programmers</a>.

As always, think deeply about these concepts. Tinker with them. Don't just click into that other tab after reading this. I assure you that reddit will be there waiting for that pun you've been trying to think of for the past three hours.
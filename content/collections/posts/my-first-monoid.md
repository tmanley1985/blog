---
title: My First Monoid
slug: my-first-monoid
date: '2018-06-17'
tags:
- functional programming
- abstract algebra
---

My introduction to functional programming was reminiscent of taking a test I hadn't studied for; enough jargon to construct a fantasy language from and a sinking in the pit of my stomach that told me I was out of my depth. My intitial reaction was a cutting dismissal. There were omens of *academia*. There was a deluge of tweets from evangelists on the interwebs with words like F-Algebra, Functor and Category Theory. I half-expected to wake up with a copy of *The Watchtower* on my doorstep. So with my self-esteem at stake I fully intended to shelve the idea away as belonging to robed logicians locked away in research towers. That is until I ran across the concept of a monoid.

The word itself had a metallic taste. *Monoid*. What the hell was a monoid?  I was pretty sure there were some people in the Bible Belt claiming to have been abducted by one. In a sea of terms that could have been Harry Potter spells, this one caught my interest.

Spoiler Alert:  It turned out to be a rather simple concept. However, it suffered the same fate as other simple ideas - it had a scary name. The idea seemed to be more an exercise in cleverness. Hearing the twittersphere extol the virtues of monoids, you would think them a panacea for all programming ills. How would monoids help with querysets in <a target="_blank" href="https://www.djangoproject.com/">Django</a> or make it easier to mock an external dependency in a test?  I was asking the wrong questions. I wouldn't have questioned the utility of plumbing by asking how it could help my backhand in table tennis.

<br/>
## Just get to the damned point
<hr/>

To give some intuition for what a monoid is, I want you to answer these few questions:

* `1 + 0 = ?`
* `2 * 1 = ?`
* `True AND True = ?`
* `False OR False = ?`

Did you notice a pattern?

Let's look at the first question.

```1 + 0 = 1```

When we add 1 to 0, we get 1 back. We say that 1 was *unaffected* by the operation.

This would be the same for any number we add to zero. We'll always get the same number back guaranteed.

What about the other questions?

* `2 * 1 = 2`
* `True AND True = True`
* `False OR False = False`

In fact, every question above gives a glimpse into the nature of monoids.

Every example above has some collection or set of **objects** (e.g., numbers and booleans) a **binary operator** (this just means it works on two values at once) and a **special element** of that set that acts just like zero does in addition, or one in multiplication. This element is what's known as the **identity element**. It gives you back whatever you gave it.

Now that we have the working parts, we can tease out a definition. A monoid is the combination of a collection of **objects**, a **binary operator** and an **identity element**. If you are missing one of those, you are no longer dealing with a monoid. Monoids also have some <a target="_blank" href="https://en.wikipedia.org/wiki/Monoid#Properties">properties</a> that afford the wielder a level of mathematical certainty unmatched by any shoddy adhoc abstraction.

* `booleans` + `conjunction` + `true` == `monoid`
* `booleans` + `disjunction` + `false` == `monoid`
* `numbers` + `addition` + `0` == `monoid`
* `numbers` + `multiplication` + `1` == `monoid`
* `arrays` + `concatenation` + `[]` == `monoid`

There are all sorts of them in the wild and when you find them, you ***know*** them. You've seen their <a target="_blank" href="https://www.youtube.com/watch?v=4LZo9ugJTWQ&feature=youtu.be&t=4m30s">downstairs mixup</a>.

<br/>
## Practical Monoids
<hr/>

Even after this initial aha moment I still felt bereft of any great revelation. Where was the utility in this?  It seemed little more than a novel bit of math trivia, something you may see nestled away in one of the blue squares on Jeopardy.

Let's look at a relevant, albeit naive, programming problem. How would we sum up a list of numbers?  Well there are multiple ways to skin a <a target="_blank" href="https://en.wikipedia.org/wiki/Catamorphism">catamorphism</a>.

<div class="tiny">![sum a list of numbers](/images/reduce.png)
<br/>
*code samples were made simple by using [Carbon](https://carbon.now.sh/)*</div>

In the example above, we sum (addition as the binary operator) the list of numbers (set of objects) and starting with 0 (the identity element). Since we know that zero added to any number equals that number, we can use it as the beginning operation.

Understanding monoids made the reduce function click for me. Before that I had avoided it like a conversation about religion at a family reunion.

We could do this for any other monoid!

![some other monoid examples](/images/monoids.png)

Notice even strings under concatenation (addition) form a monoid with an empty string as the identity element!

Now here's the icing on top.

![functions as a monoid](/images/compose.png)

Functions themselves along with an operator called *composition* and a very special function called the *identity function* (guess what that does!) form a monoid!

The *compose* function in the example starts with a list of functions and reverses them (compose will run the functions in the list from right to left, pipe will run the functions from left to right). Since we know that the identity function just gives you back whatever you give it, it is a <a target="_blank" href="https://en.wikipedia.org/wiki/NOP">no-op</a> which means we can use it as a starting point in the same way we've done in the examples above. In this specific case, the order of the functions doesn't matter since addition is **commutative**.

Composition is really a topic unto itself and admittedly requires a dedicated post. We'll explore that at a later time.

<br/>
#### Just the beginning
<hr/>

There are myriad gems to be discovered in functional programming. Hopefully I've imparted some intuition and piqued your interest. Onward!








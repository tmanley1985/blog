---
title: My First Monoid
slug: my-first-monoid
date: '2018-06-17'
tags:
- functional programming
- abstract algebra
---

My introduction to functional programming was reminiscent of taking a test I hadn't studied for; enough jargon to construct a fantasy language from and a sinking in the pit of my stomach that told me I was out of my depth.  My intitial reaction was a cutting dismissal. There were omens of ***Academia***.  There was a deluge of tweets from evangelists on the interwebs with words like F-Algebra, Functor and Category Theory.  I half expected to wake up with a copy of The Watchtower on my doorstep.  So with my self-esteem at stake I fully intended to shelve the idea away as belonging to robed logicians locked away in research towers.  That is until I ran across the concept of a Monoid.

The word itself had a metallic taste.  *Monoid*.  What the hell was a Monoid?  I was pretty sure there were some people in the Bible Belt claiming to have been abducted by one.  In a sea of terms that could have been Harry Potter spells, this one caught my interest.

Spoiler Alert:  It turned out to be a rather simple concept.  However, it suffered the same fate as other simple ideas - it had a scary name.  The idea seemed to be more an exercise in cleverness.  Hearing the twittersphere extol the virtues of Monoids you would think them a panacea for the prosaic routine of everyday development.  How would Monoids help with querysets in Django or make it easier to mock an external dependency in a test?  I was asking the wrong questions.  I wouldn't have questioned the utility of plumbing by asking how it could help my backhand in table tennis.

To give some intuition for what a Monoid is, I want you to answer these few questions:

* 1 + 0 = ?
* 2 * 1 = ?
* True AND True = ?
* False OR False = ?

Did you notice a pattern?  Let's look at the first question.  ```1 + 0 = 1```.  When we add 1 to 0, we get 1 back.  It's as if 1 was unaffected by the operation. This would be the same for any number we add to zero.  We'll always get the same number back guaranteed.  What about the last question?  `False OR False = False`.  As it turns out, `True OR False = True`.  In fact, every question above gives a glimpse into the nature of Monoids.  We have some collection or set of objects (e.g., numbers and booleans) a binary operator (this just means it works on two values at once) and an element of that set that acts just like zero does in addition, or one in multiplication.  This element is what's known as the **Identity Element**.  It gives you back whatever you gave it.

The thing that we call a Monoid is the combination of a collection of objects (e.g., booleans, natural numbers, etc.), coupled with a binary operator and an Identity Element.  If you are missing one of those, you are no longer dealing with a Monoid.  Booleans, with the binary operator AND have an Identity Element - True.  So that forms a Monoid.  The Natural Numbers under addition have an Identity Element of 0.  It is a Monoid.  There are all sorts of them in the wild and when you find them, you ***know*** them.  You've seen their downstairs mixup.

Even after this initial aha moment I still felt bereft of any great revelation.  Where was the utility in this?  It seemed little more than a novel bit of math trivia, something you may see nestled away in one of the blue squares on Jeopardy.  

Let's look at a relevant albeit naive programming problem.  How would we sum up a list of numbers (in javascript in this case)?  Well there are multiple ways to skin a catamorphism.  Here's one:

<div class="tiny">![sum a list of numbers](/images/reduce.png)
*code samples were made simple by using [Carbon](https://carbon.now.sh/)*</div>

As a sidenote, learning about Monoids are really what made the reduce function click for me.  Before that I had avoided it like a conversation about religion at a family reunion.

So what are we trying to do here?  We're summing (addition as the binary operator) the list of numbers (set of objects) and starting with 0 (the Identity Element).  Since we know that zero added to any number equals that number, we can use it as the beginning operation.

We could do this for any other Monoid.

![some other monoid examples](/images/monoids.png)

Notice even strings under concatenation (addition) form a monoid with an empty string as the Identity Element!

Now here's the icing on top.

![functions as a monoid](/images/compose.png)

Functions themselves along with an operator called composition and a very special function called the Identity Function (guess what that does!) form a Monoid!

The ***compose*** function above starts with a list of functions and reverses them (compose and pipe do basically the same thing in separate order) and since we know that the Identity Function just gives you back whatever you give it, it is a noop which means we can use it as a starting point in the same way we've done in the examples above.

Monoids are a tool with the added benefit of having laws like associativity and identity and while you are under no obligation to utilize them in your work, I hope you at least come away with the knowledge of how they work and how they may be helpful.





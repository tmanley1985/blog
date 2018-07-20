---
title: Get To The Point Free
slug: get-to-the-point-free
date: '2018-07-16'
tags:
- functional programming
- point free
- eta conversion
---

Whether it's in conversation, code, or the fifth grade, one likes to repeat themselves. Software is no exception. We work hard to avoid working hard. Avoiding repetition is writ in our DNA. We're no different than a cat chasing birds or a frog wanting to play the guitar.

<br/>
## A Tisket, A Tacit
<hr/>

Before go into what **point free style** (AKA **tacit programming**) is, let's look at some code.

<div class="tiny">![point free style](/images/pointfree.png)
<br/>
*code samples were made simple by using [Carbon](https://carbon.now.sh/)*</div>

Not too shabby eh? Never let it be said that I can't create a damned good `addOne` function. Damned good.

Of course that isn't what we're focusing on just now. What we're concerning ourselves with is the difference between the two lines at the end. Functionally they accomplish the same thing yet there is a slight difference. The former introduces an unnecessary intermediate function that calls `addOne`. It adds a layer of redundancy. The latter just simply passes `addOne` to the map function resulting in a much more declarative, terse solution.

The process of converting the first line to the second is known as <a target="_blank" href="http://people.cs.aau.dk/~normark/prog3-03/html/notes/eval-order-note-eta.html">eta conversion</a> which simply means that we recognize 
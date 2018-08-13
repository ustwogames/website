---
metaTitle: Style specimen
title: The styles, they are all here
layout: Page
---

# An h1 header
## An h2 header
### An h3 header
#### An h4 header
##### An h5 header

# An h1 header

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists
look like:

* this one
* that one
* the other one

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.  
> <cite>And of course cite the source!</cite>

Unicode is supported. ☺


## An h2 header

Here's a numbered list:

1. first item
2. second item
3. third item

Here's a code sample:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

Notice that it's indented 4 spaces. By the way, instead of
indenting the block, you can use delimited blocks, if you like:

~~~
define foobar() {
    print "Welcome to flavor country!";
}
~~~

(which makes copying & pasting easier). You can optionally mark the
delimited block for Pandoc to syntax highlight it:

~~~python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
~~~



### An h3 header

Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

[^1]: Footnote text goes here.

Tables can look like this:

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Prototype table

A horizontal rule follows.

***

Images can be specified like so:

![The Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.

#### An h4 header

Some of our lovely content boxes below:

<div class='content-box dark'>

### This is the dark one

Our testing showed that it’s actually a huge benefit to many players to give them a condensed experience, to allow them to see a piece of content through, from start to finish. Especially on mobile it’s a vanishingly small number of players who ever complete a game. It’s something we crave personally and something we hope to see more of in interactive digital entertainment. Offering that finality therefore became a defining factor in the design of Monument Valley.

> Our ambition for the game became to produce a piece of work that was ‘all killer and no filler’ — something that would excite the player, but never frustrate. We wanted the player to stick around just long enough to deliver only novelty and delight. It would be a game with no grind, but also no real failure: there were no stars to collect, no leaderboards. Players should experience a game that is.

</div>

<div class='content-box'>
  <img src="/assets/MV_sketch_level.jpg" alt="Game sketch and level" />
</div>

<div class='content-box'>

### And this is the default light one

When we released a teaser trailer before Christmas 2013, it got a huge number of views, gained us thousands of new Twitter followers and generated over 10,000 beta test applicants. All this activity helped us begin a relationship with Apple that led to us to being Editor’s Choice in the App Store on release and culminated with Monument Valley being awarded the prestigious Apple design award. This kind of relationship with Apple — and of course Google Play and the Amazon app stores — is crucial to a game and a team like ours. We know from experience that ‘store featuring’ is often the most crucial part in a successful app store launch.

</div>

---

And a fluidly embedded map:

<div class='fluid-embed'>
  <iframe src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.8026120943214!2d-0.11554537867375589!3d51.48013736932205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2d70846bce702a0!2sustwo+games!5e0!3m2!1sen!2sus!4v1479374791370" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>

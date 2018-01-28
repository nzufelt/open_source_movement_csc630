# Contributing to Open Source Movement CSC630

*For the code of conduct, see [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).*

## How to contribute essays

* Please add the essay file (as a PDF or other portable format) into the assets/essays directory.
* In `essays.html`, add a new `<section>` tag to the `<main id="content">` tag. For example:
Before:
```
  <main id="content">
    <section id="section1">
      <article>
        <p>
          A collection of essays written by students in this class. To be updated once said essays have been written.
        </p>
      </article>
    </section>
  </main>
```

After:
```
  <main id="content">
    <section id="section1">
      <article>
        <p>
          A collection of essays written by students in this class. To be updated once said essays have been written.
        </p>
      </article>
    </section>
    <section>
      <article>
        <p>
          <a href="assets/essays/xifaras_samuel.pdf" target="_blank">A Different Approach to Open Source Software Monetization</a>: An essay exploring the effectiveness of business models that incorporate proprietary software into open source projects.
          <br>
          <i>by Sam Xifaras</i>
        </p>
      </article>
    </section>
  </main>
```

## How to contribute projects:

Follow the same procedure as essays.

In `projects.html`:

Before:

```
  <main id="content">
    <section id="section1">
      <article>
        <p>
          The list of projects students are working on in this class with descriptions and links to GitHub repositories. To be completed once projects have begun.
        </p>
        <h4><a href="https://github.com/nzufelt/open_source_movement_csc630">The Class Website</a> by everyone</h4>
        This project is making this website! It's a class effort to learn and contribute to open source projects.
        <p>
      </article>
    </section>
  </main>
```

After:

```
  <main id="content">
    <section id="section1">
      <article>
        <p>
          The list of projects students are working on in this class with descriptions and links to GitHub repositories. To be completed once projects have begun.
        </p>
        <h4><a href="https://github.com/nzufelt/open_source_movement_csc630">The Class Website</a> by everyone</h4>
        This project is making this website! It's a class effort to learn and contribute to open source projects.
        <p>
      </article>
    </section>
    <section> 
      <article>
        <h4><a href="https://github.com/dabao12321/geolang">geolang</a> by Amanda Li</h4>
        <p>
          Correlating text to author's geographic origin within the U.S.
        </p>
      </article>
    </section>
  </main>
```

Please open a pull request with suggestions on how to change this document.
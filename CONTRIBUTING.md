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



Please open a pull request with suggestions on how to change this document.
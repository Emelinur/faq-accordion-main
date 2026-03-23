# Frontend Mentor - FAQ accordion

![Design preview for the FAQ accordion coding challenge](preview.jpg)

## Welcome! 👋

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:
- Hide/Show the answer to a question when the question is clicked.
- Navigate the questions and hide/show answers using keyboard navigation alone.
- View the optimal layout for the interface depending on their device's screen size (Fluid Design).
- See hover and focus states for all interactive elements on the page.

### Screenshot

![Solution Screenshot](./assets/images/screenshot)

### Links

- Solution URL: [faq-accordion-main](https://www.frontendmentor.io/solutions/faq-accordion-main--m5X9mhMzC)
- Live Site URL: [faq-accordion-main](https://emelinur.github.io/faq-accordion-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (Variables)
- **Fluid Typography & Spacing:** Using `clamp()` and `calc()` for a truly responsive experience without excessive media queries.
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

This project was full of technical "lightbulb" moments for me. Here are my key takeaways:

1. **Fluid Design Logic:** I mastered using the `clamp()` function to create spacing and typography that scales perfectly between mobile (375px) and desktop (1440px).
  ```css
  --spacing-200: clamp(
    8px,
    calc(8px + (16 - 8) * (100vw - 375px) / (1140 - 375)),
    16px
  );
  ```

2. **ARIA Controls and ID Mapping:** I learned how to connect button actions to specific answer elements in an accessible way.
  ```javascript
  const targetId = btn.getAttribute("aria-controls");
  const targetParagraph = document.getElementById(targetId);
  ```

3. **Modern DOM Manipulation:** I discovered that `classList.replace()` is cleaner than manually using `add()` and `remove()`, and that the `||` (OR) operator is very practical when selecting fallback elements.
  ```javascript
  const currentIcon = btn.querySelector(".plus") || btn.querySelector(".minus");
  currentIcon.classList.replace("plus", "minus");
  ```

4. **WebAssembly (Wasm) Vision:** I learned what WebAssembly is, where it is useful for high-performance browser tasks, and how it differs from JavaScript. JavaScript was more practical for this project, but Wasm opened a great perspective for future complex projects.

### Continued development
In future projects, I want to focus more on:

- JavaScript State Management: Improving my state management logic to build more complex UI components.
- Accessibility (A11y): Applying accessibility as a full project standard, not only at the attribute level.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/) - Clear documentation for HTML, CSS, and JavaScript
- [CSS-Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Practical visual guide for layout

### Author

- Frontend Mentor - [@Emelinur](https://www.frontendmentor.io/profile/Emelinur)


### Acknowledgments

Thanks to the Frontend Mentor community for feedback and learning support.
# Art Gallery Slideshow

## Goals

Create a fullstack application with Node, Express, and EJS to power the backend. I wanted to follow a classic architecture where the server is sending static files. Data is pulled from a local data file on the server.

## Features

- Simple Express server with two routes and error handling.
- The cards and slideshow contents are dynamically rendered with EJS.
- The slideshow can be started or stopped.
- Next and Previous buttons are links that increment/decrement the params in the URL path. So each slide is a seperate HTML page.
- [Masonry](https://masonry.desandro.com/) takes care of the home page layout.
- Minified CSS
- Minified JavaScript with [Minify JS Online](https://minify-js.com/)

## Accessibility

- Tested with [Accessibility Insights for Web](https://accessibilityinsights.io/), Chrome, and Firefox and MacOS Voicover Utility.
- [WCAG 2.1 AA compliant color contrast.](https://www.w3.org/TR/WCAG21/#contrast-minimum)
- CSS `prefers-reduced-motion: reduce` to honor the users system setting.
- [aria-hidden for non-text purely decorative content](https://www.w3.org/TR/WCAG21/#non-text-content)
- HTML dialog element for modal to maintain tab order and context of interactivity. To escape the modal the user must click the close button.
- Accessible cards that when clicked act as link with hover and focus styles. Followed [Heydon Pickering's article](https://inclusive-components.design/cards/).

## For Local Development

- VS Code extention: Live Sass Compiler

## License

- MIT

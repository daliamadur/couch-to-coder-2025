# ✒️ Week 4
**Learning Objectives:** HTML, CSS, JavaScript for frontend

📄 [`index.html`](./index.html)
📄 [`style.css`](./style.css)
📄 [`app.js`](./app.js)

## 📝 Notes

### HTML
- **H**yper**T**ext **M**arkup **L**anguage
- Defines the structure of the webpage's frontend
- Can contain CSS and Javascript within the file, but best practices discourage this
- `<head>` – contains webpage's metadata
- `<body>` – contains all visible elements to be displayed on the webpage
- Using **semantic tags** where possible helps make the website more accessible, maintainable and discoverable by search engines
    - `<header>` – top of the page, usually containing main navigation
    - `<main>` – middle of the page, containing main page content 
    - `<footer>` – bottom of the page, usually containing additional info and navigation
### CSS
- **C**ascading **S**tyle **S**heet
- Defines style of webpage's frontend, including colours, fonts, spacing etc.
- **Box Model** – Defines the different layers of block boxes, and how they work together to display content on a page
    - `margin` – Outer most layer, wrapping all of the elements within in
    - `border` – Wraps content and padding (usually outlined)
    - `padding` – White space around the content
    - `content` – Area where content is displayed, dimensions can be configured using the `width` and `height` properties
### JavaScript
- Lightweight scripting language, used for element manipulation
- Defines the behaviour of the webpage's frontend
- Created in 1995 by Brendan Eich, designed to be an easy alternative to running basic tasks on the server
- `defer` – js script is downloaded as the html page is being parsed, but executed after the page has finished parsing
#### Dynamically creating HTML elements in JavaScript
- `document.createElement("tag")` – creates element of tag `"tag"`
- `element.textContent` – defines text within the element stored in variable `element`
- `element.appendChild(child)` – nests the element stored in the `child` variable in the element stored in the `element` variable
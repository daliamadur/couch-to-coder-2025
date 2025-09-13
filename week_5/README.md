# ✒️ Week 5
**Learning Objectives:** Backend + frontend integration, more DOM manipulation

📄 [`app.js`](./app.js)
#### Supplementary Files
📄 [`index.html`](../week_4/index.html)
📄 [`style.css`](../week_4/style.css)
📄 [`index.js`](../week_3/server/index.js)

## 📝 Notes

- `CORS` – **C**ross-**O**rigin **R**esource **S**haring, used by a server to specify which origins (URLs) are allowed to access its resources
- `await` – used in asynchronus functions, which makes a function wait for a resolved promise to continue execution

### Event Listeners

```js
document.addEventListener("event", () => {}, false)
```
- Adds an event handler to a specific element
    - `document.addEventListener` - entire page
    - `document.querySelector("element").addEventListener` - speficied elements
- **Query Selector** – returns specified element that matches the given, parameter, or `null` if there are no matches
    - *Essentially uses the same syntax as CSS selectors, invalid CSS identifiers must be escaped using `CSS.escape()` or valid escape characters `\\`*
    - **Element type** - `"div"`, `"p"`, `"h2"` etc.
    - **Element class** - `".element-class"`
    - **Element id** - `"#element-id"`
#### Parameters:

`event` *(string)* – Specifies the HTML DOM event that triggers the handler. A few examples include
- `click` – the mouse is clicked
- `drag` – an element is dragged
- `keypress` – a key on the keyboard is pressed

*There are many more examples, all of many different types*

`function` *(function)* – The function to be called when the specified event happens

`useCapture` *(boolean)* – specifies whether capturing propagation is used or not, with the default being false
- **Propagation** – Determines the order that elements receive the event when nested
    - **Bubbling** (default) – Runs the event handler on the target element first, then the parents
    - **Capturing** – Runs the event handler on the parents of the target element, then the target itself last

### FetchAPI

```js
fetch("url", options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error))
```

#### Parameters
- `url` *(string)* – API endpoint to fetch the data from
- `options` *(object)* – Parameters for backend:
```js
{
    method: 'http method',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
}
```

#### Resolved Promise Handlers
- `.then(response => response.json())` – HTTP response, in the form of a status code
- `.then(data => console.log(data))` – prints returned data from the URL to console
- `.catch(error => console.error("Error:", error))` – prints any caught errors to console
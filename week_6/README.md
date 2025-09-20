# ✒️ Week 6
**Learning Objectives:** Advanced CSS concepts

📄 [`style.css`](./style.css)

## 📝 Notes

### `crossorigin`
#### Usage
- Uses CORS headers in media requests
- Attribute for: `<audio>`, `<img>`, `<link>`, `<script>`, `<video>`

#### `"anonymous"` or `""`
- Credentials set to "same-origin"
- User credentials aren't included unless destination is the same as the origin

#### `"use-credentials"`
- Credentials set to include
- User credentials included

### Pseudoclasses
- Used to style a specific state of the selected elements
```css
selector:state
```
- `hover` – style applied to elemenet when mouse hovers over it
- `visitied` - style applied to a link element once it has been clicked
- `playing` – for media (audio/video), style applied to elemenet when media is currently playing


### Flexbox
- **Flex**ible **box** layout
- Layout method for arranging items in a block
- Best used for 1D layouts
- **Flex container** – Parent (container) element 
- **Flex items** – The child elements inside the parent
```css
{
    display: flex;
}
```
#### Attributes
- `align-items` – defines vertical alignment of the flex items
- `justify-content` – defines the horizontal spacing of the flex items


### Measurements
#### Absolute
- `px` – **P**i**x**els, defines width/height by screen pixels

#### Relative
- `%`  – Percentage, based on the dimensions of the parent element
- `vw` – **V**iewport **W**idth, percentage based on width of the screen
- `vh` – **V**iewport **H**eight, percentage based on height of the screen
- `em` – Scale factor based on the current font-size of the element

### Media Queries
- Used for responsive design — style applied depends on the screen size
```css
@media media_type amd (media feature) {
    /*styles*/
}
```
#### Media Types
- `all` – every media type
- `print` – print preview of webpage
- `screen` – any device with a screen
#### Media features
- Orientation – portrait or landscape
- **Height** of viewport
    - `height` *(includes scrollbar)*
    - `max-height`
    - `min-height`
- **Width** of viewport
    - `width` *(includes scrollbar)*
    - `max-width`
    - `min-width`
# ✒️ Week 2
**Learning Objectives:** Basic data structures + iteration

📄 [`arrays.js`](arrays.js)
📄 [`objects.js`](objects.js)
📄 [`loops.js`](loops.js)

## 📝 Notes
### Arrays
```js
const arr = []
```
- Denoted by square brackets, values separated by commas `,`
- Zero indexed - first value in array is `arr[0]`
- Arrays declared with `const` can be mutated
- Change values directly using assignment `arr[0] = "new_value"`

#### Methods
- `length` - returns number of elements in array
- `push(value)` - appends new element to the end of the array
- `pop()` - removes + returns last element of the array

### Objects
```js
const obj = {}
```
- Denoted by key-value pairs within curly brackets
    - Keys and values separated by a colon `:`
    - Key-value pairs separated by commans `,`
- Elements accessed using keys using either:
    - Dot notation - `obj.key`
    - Bracket notation - `obj["key"]`
- Objects declared with `const` can be mutated
- Change values directly using assignment `obj.key = "new_value"`

#### Methods
- `hasOwnProperty` - Check if key exists in object
- `delete obj.key` - Removes key-value pair from object
- `Object.keys(obj)` - Returns array of keys
- `Object.values(obj)` - Returns array of values
- `Object.entries(obj)` - Returns an array of key-value pairs (as nested arrays)

### For Loops
```js
for (element of arr) {
    //do something
}
```

- Used to iterate through elements in a collection
- Number of iterations = number of elements in collection
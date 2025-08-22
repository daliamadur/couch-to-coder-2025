# ✒️ Week 1
**Learning Objectives:** Core web technologies, JavaScript fundamentals + best practices

📄 [`intro.js`](intro.js)

## 📝 Notes
### Variables
`const` - declaration for constants

`let` - declaration for variables

### Datatypes
`String` - Text

`Number` - Numeric values

`Boolean` - True or False values

`Undefined` - Declared variable without an assigned value

`Null` - Declared variable with intentional absence of a value

`Object` - Collection of key-value pairs

`Array` - Zero-indexed ordered list of values

### Conditional Operators

`==` - variable equality testing with type casting

`===` - variable value and type equality testing

`>` - Greater than

`>=` - Greater than or equal to

`<` - Less than

`<=` - Less than or equal to

### Conditional Statements

`If statement` - tests a condition, and executes an action if it evaluates to `True`

```js
const age = 18

if ( age >= 18 ) {
    console.log("Allowed to enroll")
}
```

`Else clause` - code that will be executed if initial condition evalues to `False`

```js
const age = 16

if ( age >= 18 ) {
    console.log("Allowed to enroll")
} else {
    console.log("Need parental consent")
}
```

`Else if clause` - an additional condition to be tested if the initial condition evaluates to `False`


```js
const age = 8

if ( age >= 18 ) {
    console.log("Allowed to enroll")
} else if ( age <= 10 >) {
    console.log("Need to wait a few more years, sorry")
} else {
    console.log("Need parental consent")
}
```
### Logical Operators

`||` **OR** -  either condition can be `True`

`&&` **AND** - both conditions have to be `True`

`!` **NOT** - condition must be false

### Conditional Statements with Logical Operators

```js
if (age >= 18) {
    console.log("Allowed to enroll");
} else if (age <= 18 && haveParentalConsent) {
    console.log("Allowed to enroll with parental consent")
}

if (age>= 18 || haveParentalConsent) {
    console.log("Can enroll")
}
```
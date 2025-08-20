console.log("Hello world")

//✒️ camel case for variable names

//--- STRINGS ---
//const - for constants (don't change)
const firstName = "Chel";
const lastName = "Witter";
const fullName = firstName + lastName; //📤 "ChelWitter"

//let - for variables (can be changed during execution)
let greeting = "Hello!";
greeting = "hi there!";

//--- NUMBERS ---
3 + 4; //📤 7
9 - 64; //📤 -55
5 * 4; //📤 20
6 / 0; //📤 infinity instead of error :O

//--- NONE VALUES ---
let firstName2;
console.log(firstName2) //undefined - no value by default, null - intentionally no value

//--- EQUALITY ---
// = variable assignment
// == value equality testing with type casting
// === value and type equality testing

4 === 2 + 2; //📤 true
4 === 2 + 3; // 📤false
"apple" === "apple"; // 📤true
"apple" === "orange"; // 📤false

//--- MORE CONDITIONAL OPERATORS ---
//greater than
5 > 4; //📤 true 
9 > 100; //📤 false

//less than
99 < 100000; //📤 true
100 < 50; //📤 false

//or equal to
100 < 100; //📤 false
100 <= 100; //📤 true
99 <= 100; //📤 true

//--- CONDITIONAL STATEMENTS
const age = 18;
const haveParentalConsent = true;

//multiple conditions
if (age >= 18) {
    console.log("Allowed to enroll");
} else if (age <= 10) {
    console.log("Need to wait a few more years, sorry");
} else {
    console.log("Need parental consent");
}

//with logical operators
if (age >= 18) {
    console.log("Allowed to enroll");
} else if (age <= 18 && haveParentalConsent) {
    console.log("Allowed to enroll with parental consent")
}

if (age>= 18 || haveParentalConsent) {
    console.log("Can enroll")
}


const employee = {
    firstName: "John",
    lastName: "Doe",
    jobTitle: "Project Manager",
    salary: 60000,
    currentProjects: ["FacebookForCats", "AmazonButBetter", "NotFlix", "InstantGran"],
    address: {
        postCode: "EH6 4UH",
        city: "Edinburgh",
        street: "Newton Crescent",
        number: 15
    }
}

console.log(employee["firstName"]) //📤 John
console.log(employee["dateOfBirth"]) //📤 undefined
console.log(employee.salary) //📤 60000

//check if key exists in object
console.log(employee.hasOwnProperty("firstName")) //📤 true
console.log(employee.hasOwnProperty("height")) //📤 false

//modify object contents (can be modified like arrays even if const)
employee.department = "engineering"
console.log(employee)

employee.firstName = "Jane"
console.log(employee)

//remove key-value pair from object
delete employee.salary
console.log(employee)

//array of keys, values, and key-value pairs
console.log(Object.keys(employee))
console.log(Object.values(employee))
console.log(Object.entries(employee))

//access attributes as variables
console.log(employee.firstName.toUpperCase()) //📤 JANE

console.log(employee.address) //📤 address object

//property chain to access as variables
console.log(employee.address.city) //📤 Edinburgh

//store attribute in vairable - same desired effect without having to use chaining each time
const address = employee.address
console.log(address.city) //📤 Edinburgh
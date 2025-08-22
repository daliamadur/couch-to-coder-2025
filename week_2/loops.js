const numbers = [1, 2, 3, 4, 5]
const evenNumbers = []

//same as for...in in py
for (number of numbers) {
    //number % 2 - even
    if (number % 2 === 0) {
        evenNumbers.push(number)
    }
}

console.log(evenNumbers)

//array of objects
const employees = [
    { name: "John Doe", salary: 60000, department: "marketing" },
    { name: "Alice Cooper", salary: 75000, department: "engineering" },
    { name: "Seamus Finnigan", salary: 85000, department: "logistics" }
]

//interate through array - employee = each object
for (employee of employees) {
    console.log(employee.name)
}

//average salary example
let total = 0

//get sum
for (employee of employees) {
    total += employee.salary
}

//get avergae
console.log(total / employees.length) //📤 73333.33333333333
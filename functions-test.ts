import addNumbers, { addStrings, format, fetchData } from "./functions";

console.log(addNumbers(2, 3))
console.log(addStrings('Hello', 'World!'))
console.log(addStrings('Hello'))

console.log(format('Ismael', 3))

fetchData('test').then( (resolve) => console.log(resolve))
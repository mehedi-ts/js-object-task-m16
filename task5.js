// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types

// let myObject = {

// name: 'John Doe',
// age: 25,
// city: 'Example City',
// isStudent: true
// };

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (let key in myObject) {
  const result = `${key} : ${myObject[key]} : ${typeof myObject[key]}`;
  console.log(result);
}

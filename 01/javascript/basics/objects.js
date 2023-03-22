// create an object
const person = {
  name: 'John',
  age: 30,
  isStudent: false,
};

const date = new Date(); // this creates a date object
/* 
date.getFullYear(): Returns the year (4 digits)
date.getMonth(): Returns the month (0-11)
date.getDate(): Returns the day of the month (1-31)
date.getDay(): Returns the day of the week (0-6)

*/

// accessing data on an object

const person2 = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'running', 'traveling'],
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001',
  },
};

console.log(person2.name); // "John"
console.log(person['age']); // 30

// using bracket notation
const myObj = {
  'property with spaces': 42,
};

console.log(myObj['property with spaces']);

// object can have values of any type
const person3 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['reading', 'hiking', 'cooking'],
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345',
  },
};

// Access properties of the object
console.log(person3.firstName); // Output: "John"
console.log(person3['lastName']); // Output: "Doe"
console.log(person3.hobbies[0]); // Output: "reading"
console.log(person3.address.city); // Output: "Anytown"

// change object property values

const person4 = {
  name: 'John',
  age: 30,
  city: 'New York',
};

// Change the value of the "age" property
person.age = 35;

// Change the value of the "age" property
person4['city'] = 'not New York';

console.log(person4.age); // Output: 35
console.log(person4.city); // Output: not New York

// adding new object properties
// create a new object
let person = {
  name: 'John',
  age: 30,
};

// add a new property using dot notation
person.email = 'john@example.com';

// add a new property using bracket notation
person['address'] = '123 Main St';

// deleting properties from objects
const myObj1 = {
  name: 'John',
  age: 30,
  city: 'New York',
};

delete myObj.city;

console.log(myObj);
// Output: { name: 'John', age: 30 }

// objects are stored by reference
// create an object
let obj1 = { name: 'John' };

// assign obj1 to obj2
let obj2 = obj1;

// change the name property of obj1
obj1.name = 'Jane';

// print obj2 to the console
console.log(obj2); // {name: "Jane"}

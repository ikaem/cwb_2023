// examples

const shoppingCart = [
  {
    id: 1,
    name: 'T-shirt',
    price: 20.0,
    quantity: 2,
  },
  {
    id: 2,
    name: 'Jeans',
    price: 50.0,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Sneakers',
    price: 80.0,
    quantity: 1,
  },
];

const fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango', 'pineapple'];

// array creation
const arrayLiteral = [1, 2, 3, 4, 5];
const arrayConstructor = new Array(5);

// 0-based
const myArray1 = ['apple', 'banana', 'orange'];
const firstElement = myArray1[0]; // "apple"

const lastElement = myArray[myArray1.length - 1];
console.log(lastElement); // "orange"

// adding elements to arrays

const myArray2 = ['apple', 'banana', 'orange'];
myArray2.push('pear');
console.log(myArray2);

const myArray3 = ['apple', 'banana', 'orange'];
myArray3.splice(1, 0, 'kiwi');
console.log(myArray3); // ["apple", "kiwi", "banana", "orange"]

const myArray4 = ['banana', 'orange'];
myArray4.unshift('apple');
console.log(myArray4); // ["apple", "banana", "orange"]

// removing items
const removeItemArray1 = ['apple', 'banana', 'orange'];
removeItemArray1.push('pear');
console.log(removeItemArray1); // ["apple", "banana", "orange", "pear"]

const removeItemArray2 = ['banana', 'orange'];
removeItemArray2.unshift('apple');
console.log(removeItemArray2); // ["apple", "banana", "orange"]

const removeItemArray3 = ['apple', 'kiwi', 'banana', 'orange'];
removeItemArray3.splice(2, 1);
console.log(removeItemArray3); // ["apple", "kiwi", "orange"]
['apple', 'banana', 'orange'];

// replacing and updating items
const replaceItemArray1 = ['apple', 'banana', 'orange'];
const bananaIndex = replaceItemArray1.indexOf('banana'); // if no such item, value returned is -1
replaceItemArray1[bananaIndex] = 'better banana';

// iterating over arrays

// for loop
const myForLoopArray = ['apple', 'banana', 'orange'];

for (let i = 0; i < myForLoopArray.length; i++) {
  const currentFruit = myForLoopArray[i];
  console.log('this is current fruit: ', currentFruit);
}

// arrays are stored in memory as reference
const originalArray = [1, 2, 3];
const newArray = originalArray;

newArray[1] = 4;

console.log(originalArray); // [1, 4, 3]
console.log(newArray); // [1, 4, 3]

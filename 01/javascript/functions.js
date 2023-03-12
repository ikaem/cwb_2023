// simple example
function addNumbers(a, b) {
  const result = a + b;

  return result;
}

// function that does not return value
function sayHello(name) {
  console.log('Hello, ' + name + '!');
}

// caloing a function

function sayHello() {
  console.log('Hello!');
}

sayHello();

function sayHello(name) {
  console.log('Hello, ' + name + '!');
}

sayHello('Alice');

// functions can be assinged as a value to a variable
// create a function
function multiply(a, b) {
  return a * b;
}

// assign multiply to another variable
const myFunc = multiply;

const result = myFunc(3, 4);

// call myFunc with arguments
console.log(result); // output: 12

// practical use of a function
function getDate(format) {
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  // format the date string based on the input format argument
  if (format === 'MM/DD/YYYY') {
    return `${month}/${day}/${year}`;
  } else if (format === 'YYYY-MM-DD') {
    return `${year}-${month}-${day}`;
  } else {
    return `${day}/${month}/${year}`;
  }
}

// call the function with a specific format argument
const dateFormatted = getDate('MM/DD/YYYY');

console.log(dateFormatted); //

function calculateTotal(cart) {
  let total = 0;

  // loop through the cart items and add up their prices
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }

  return total;
}

// example shopping cart items
const cart = [
  { name: 'Item 1', price: 10 },
  { name: 'Item 2', price: 20 },
  { name: 'Item 3', price: 30 },
];

// call the function with the cart items
const totalCost = calculateTotal(cart);

console.log(`You need to pay ${totalCost} dollars.`); // output: "You need to pay 60 dollars."

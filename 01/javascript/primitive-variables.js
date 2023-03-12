let isThisOfficeFarAway = false;

const randomAddress = 'Somewhere in Zagreb 3';

const distance1FromOfficeInKm = 2;
const distance2FromOfficeInKm = 18;

const isLocationAtDistance2Preferred = true;

if (isLocationAtDistance2Preferred) {
  isThisOfficeFarAway = true;
}

console.log('Is this office far away: ', isThisOfficeFarAway ? 'Yes' : 'No');

// declaring variable
const countryName = 'karlo';
let populationNumber = 3000000;

console.log('doing a census...');

populationNumber = 9000000;

// bad naming
const n = 'karlo';
const a = 37;
const f = true;
const test = 'My address';

// good naming
const firstName = 'karlo';
const age = 37;
const isFarAway = true;
const address = 'My address';

// names of varaibles are case sensitive
const isThisCamelCase = true;
const IsThisCamelCase = true;
const ISTHISCAMELCASE = false;
const isthiscamelcase = false;

// number types
const integerNumber = 10;
const doubleNumber = 5.4;

// number operations
const applesAmount = 10;
const peopleNumber = 6;

const applesPerPeople = applesAmount / peopleNumber;

const applesIfEachPersonHadApplesAmount = applesAmount * peopleNumber;

const numberOfThings = applesAmount + applesAmount;
const numberOfUnusedApplesIfOneApplePerPerson = applesAmount - peopleNumber;

// modulo
const moduloRemainder = applesAmount % peopleNumber; // this will be 4

// check even or odd
const number1 = 3;
const number2 = 4;

const number1Remainder = number1 % 2; // -> number is odd;
const number2Remainder = number2 % 2; // -> number is even;

// strings
const anotherFirstName = 'Jackie';
const anotherLastName = 'Chan';
const anotherFirstNameInitial = 'J';
const anotherLastNameInitial = 'C';

// with inner quotes

// use different quotes around whole string
const stringWithInnerQuotesOnContent = "People 'like' when they are criticized";

// escape inner quotes
const stringWithInnerQuotesOnContent2 =
  "People really 'like' when they are criticized";

// string interp0lation
const stringWithInnerQuotesOnContent3 = `People really really "like" when they are criticized`;

// string concatenation
const str1 = 'Hello';
const str2 = 'world';
const message = str1 + ' ' + str2;
console.log(message); // outputs: Hello world

const str3 = 'Hello';
const str4 = 'world';
const message2 = str3.concat(' ', str4);
console.log(message2); // outputs: Hello world

// interpolation
const newName = 'John';
const newAge = 30;
const greeting = `Hello, my name is ${newName} and I am ${newAge} years old.`;
console.log(greeting);

// accessing string elements
const someString = 'three';
const firstCharacter = someString[1];

const someStringLength = someString.length;
const lastCharacther = someString[someStringLength - 1];

// booleans
const isSomethingCorrect = true;

console.log('is it correct?', isSomethingCorrect);

if (isSomethingCorrect) {
  console.log("I'm doing it then...");
}

if (!isSomethingCorrect) {
  console.log("I'm not doing it then...");
}

// "convert" everthing to a boolean
const emptyString = '';
const zeroNumber = 0;
let undefinedVariable;
const nullVariable = null;

if (!emptyString) {
  console.log('falsy string');
}

if (!zeroNumber) {
  console.log('falsy string');
}

if (!undefinedVariable) {
  console.log('falsy undefined');
}

if (!nullVariable) {
  console.log('falsy null');
}

// const

// no value types
let undefinedValue; // this has value of undefined
const nullValue = null;

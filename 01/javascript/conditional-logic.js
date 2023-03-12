// ifs statement
const num1 = 10;

if (num1 > 0) {
  console.log('The number is positive.');
}

// if else statement

const randomNum = Math.floor(Math.random() * 100); // generates a random number between 0 and 99

const isEven = randomNum % 2 === 0;

if (isEven) {
  console.log(`${randomNum} is an even number.`);
} else {
  console.log(`${randomNum} is an odd number.`);
}

// else if

const num2 = Math.floor(Math.random() * 100); // generates a random number between 0 and 99

const isDivisibleBy2 = num2 % 2 === 0;
const isDivisibleBy3 = num2 % 3 === 0;

if (isDivisibleBy2 && isDivisibleBy3) {
  console.log(`${num2} is divisible by both 2 and 3.`);
} else if (isDivisibleBy2) {
  console.log(`${num2} is divisible by 2 but not by 3.`);
} else if (isDivisibleBy3) {
  console.log(`${num2} is divisible by 3 but not by 2.`);
} else if (num2 === 0) {
  console.log(`${num2} is zero and is divisible by any number.`);
} else {
  console.log(`${num2} is not divisible by 2 or 3.`);
}

// switch statement

let day = 3;

switch (day) {
  case 0:
    console.log('Sunday');
    break;
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  default:
    console.log('Invalid day');
    break;
}

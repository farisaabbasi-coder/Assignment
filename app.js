const username = prompt("Enter your name:");
alert("Hello " + username);

const celsius = Number(prompt("Enter a temperature in Celsius:"));
const fahrenheit = (celsius * 9 / 5) + 32;
alert(celsius + "°C = " + fahrenheit + "°F");

const score = Number(prompt("Enter your score:"));
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 75) {
  grade = "B";
} else if (score >= 60) {
  grade = "C";
} else {
  grade = "F";
}
alert("Your grade is " + grade);

const s1 = Number(prompt("Enter score 1:"));
const s2 = Number(prompt("Enter score 2:"));
const s3 = Number(prompt("Enter score 3:"));
const s4 = Number(prompt("Enter score 4:"));
const average = (s1 + s2 + s3 + s4) / 4;
alert("Average: " + average);

const a = Number(prompt("Enter the first number:"));
const b = Number(prompt("Enter the second number:"));
const c = Number(prompt("Enter the third number:"));
let max = a;
if (b > max) max = b;
if (c > max) max = c;
alert("The largest number is " + max);

let multiples = "";
let sum = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    multiples += i + " ";
    sum += i;
  }
}
alert("Multiples of 3: " + multiples + "\nSum: " + sum);

let fizzbuzz = "";
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    fizzbuzz += "FizzBuzz ";
  } else if (i % 3 === 0) {
    fizzbuzz += "Fizz ";
  } else if (i % 5 === 0) {
    fizzbuzz += "Buzz ";
  } else {
    fizzbuzz += i + " ";
  }
}
alert(fizzbuzz);

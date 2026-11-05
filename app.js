  // ===== Task A: Greeting & Name Length =====
const userName = prompt("Enter your name:");
if (userName) {
  console.log(`Hello, ${userName}! Your name has ${userName.length} letters.`);
} else {
  console.log("No name entered.");
}

// ===== Task B: Temperature Conversion =====
function celsiusToFahrenheit(c) {
  return (c * 9 / 5) + 32;
}

console.log("0°C =", celsiusToFahrenheit(0));     // 32
console.log("25°C =", celsiusToFahrenheit(25));   // 77
console.log("100°C =", celsiusToFahrenheit(100)); // 212

// ===== Master Project: Grade & Average Calculator =====
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 75) return "B";
  if (score >= 60) return "C";
  return "F";
}

function calculateAverage(numbers) {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total / numbers.length;
}

const scores = [95, 72, 40, 88];
for (const s of scores) {
  console.log(`${s} -> ${getGrade(s)}`);
}
console.log("Average:", calculateAverage(scores));

// ===== Task C: Largest Number (using if, not Math.max) =====
function largest(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}

console.log("Largest of 4, 9, 2:", largest(4, 9, 2)); // 9

// ===== Task D: Multiples of 3 from 1 to 20 =====
let sum = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
    sum += i;
  }
}
console.log("Sum of multiples of 3:", sum); // 63

// ===== Bonus: FizzBuzz from 1 to 30 =====
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
//  find numbers from 100 to 1000 that are divisible by 5 and 6, display the number with 10 per line separated by one space

let i = 100;
const validValues = [];
while (i <= 1000) {
  if (i % 5 === 0 && i % 6 === 0) {
    validValues.push(i);
  }
  i++;
}

for (let x = 0; x < validValues.length; x += 10) {
  console.log(validValues.slice(x, x + 10));
}

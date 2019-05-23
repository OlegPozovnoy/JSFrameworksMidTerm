const tax = 0.13;
const disc = 0.1;
let sum = 0;
let items = [0.59, 0.75, 1.25, 8.36];

for (let item of items) {
  sum += item;
}

if (sum > 10) {
  const discount = sum - sum * 0.1;
  console.log(`Your total is ${discount * (1 + tax)}`);
} else {
  console.log(`Your total is ${sum * (1 + tax)}`);
}

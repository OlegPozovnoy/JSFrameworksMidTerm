function farewell(name) {
  console.log(`Goodbye ${name}`);
}

function greeting(name, callback) {
  console.log(`Hello ${name}`);
  callback(name);
}

greeting("Oleg", farewell);

function sayHiMoe() {
  console.log(`Hi Moe`);
}

greeting("Oleg", sayHiMoe);

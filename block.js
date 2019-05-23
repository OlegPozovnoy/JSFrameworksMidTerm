function sayHi(name) {
  console.log(`Hello ${name}`);
}

sayHi("Keval");
sayHi("Devon");

setInterval(sayHi, 2500, "Oleg");

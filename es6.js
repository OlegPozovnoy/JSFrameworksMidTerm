const dob = "1985-02-01";

let name = "Shaun";

const temps = [1, 2, 3, 4];

for (let temp of temps) {
  console.log(temp);
}

const bio = { name: `sdf`, age: 55 };

for (let key in bio) {
  console.log(key);
  console.log(bio[key]);
}

function Person() {
  var that = this;
  this.age = 0;

  setInterval(function() {
    that.age++;
    console.log(that.age);
  }, 1000);
}

function Person1() {
  this.age = 0;

  setInterval(() => {
    this.age++;
    console.log(that.age);
  }, 1000);
}

let peep = new Person1();

const twoParam = (param1, param2) => {
  return param1 + param2;
};

const oneParam = param1 => {
  return param1;
};

function Student(id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;
}

Student.prototype.output = function() {
  console.log(`${this.id}: ${this.name}:${this.age}`);
};

class Student {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  output() {
    console.log(`${this.id}: ${this.name}:${this.age}`);
  }
}

let Student = new Student(123, "Shaun", 22);
Student.output();

class Person extends Student {}

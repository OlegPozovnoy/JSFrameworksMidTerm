console.log("Hello World");

if (true) {
  const dob = "1978-12-22";
  let age = 40;
}

const dob = "1978-12-22";
let age = 40;

console.log(`My bday is ${dob} and I am ${age}.`);
console.log("My bday is " + dob + " and I am " + age + ".");

let marvel = [
  "Captain America",
  "Black Widow",
  "Mysterio",
  "Iron Spider",
  "Kluh",
  "Giant Man",
  "Thanos"
];

console.log(typeof marvel);
console.log(marvel.length);
marvel.push("Iron Man");
marvel.unshift("Thor (Jane)");
console.log(marvel.length);

for (let i = 0; i < marvel.length; i++) {
  console.log(marvel[i]);
}

for (let hero of marvel) {
  console.log(hero);
}

marvel.forEach(function(hero, i) {
  console.log(hero);
  console.log(i);
});

marvel.forEach((hero, i) => {});

const student = {
  id: 123456789,
  name: "Shaun McKinnon",
  age: 40.33,
  bio: function() {
    return `${name} is ${age} years old.`;
  },
  interests: ["Diablo", "Diablo", "Diablo"]
};

console.log(student.name);
for (let key in student) {
  console.log(key);
  console.log(student[key]);
}

let name = "Takudzwa";
console.log(name);

const age = 25;
console.log(age);

let isStudent = true;
console.log(isStudent);

let city = null;
console.log(city);

let country = undefined;
console.log(country);

let fruits = ["apple", "banana", "cherry"];
console.log(fruits);

let items = ["porsche", 21, true, null];
console.log(items);

const things = ["porsche", 21, true, null];
console.log(things);

const person = {
  name: "Takudzwa",
  surname: "Kanokanga",
  age: 30,
  location: "Harare",
  gender: "female",
  hobbies: ["reading", "traveling", "cooking"],
};
console.log(person);

let colors = ["red", "green", "blue", "yellow", "purple", "orange"];
console.log(colors[0]);
console.log(colors[2]);
colors.push("maroon");
console.log(colors);
colors.pop();
console.log(colors);
colors.shift();
console.log(colors);
colors.unshift("pink");
console.log(colors);
colors.length;
console.log(colors.length);
colors.forEach((b) => {
    console.log(b);
});

colors.map((b) => {
    console.log(b);
});

let student = {
    name: "Takudzwa",
    surname: "Kanokanga",
    age: 30,
    gender: "Male",
    location: "Harare",
}

console.log(student.name);
console.log(student.surname);
console.log(student.age);   
console.log(student.gender);
console.log(student.location);
student["name"]
console.log(student["name"]);
student.age = 31;
console.log(student);

student.surname = "Thole";
console.log(student);
student.location = "Bulawayo";
console.log(student);
student.gender = "Any";
console.log(student);

student.hobbies = ["reading", "traveling", "cooking"];
console.log(student.hobbies);
student.hobbies.push("gaming");
console.log(student.hobbies);
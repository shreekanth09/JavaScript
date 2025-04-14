"use strict";
// console.log(this);
// const calMe = function (birthYear) {
//   //in this funciton this keyword is undefind ,bcz its gets its own key word
//   console.log(2025 - birthYear);
//   console.log(this);
// };
// calMe(2004);

// const calAge = birthYear => {
//   console.log(2025 - birthYear);      //in arrow funciton this keyword is a window ,bcz arrow function does not get its own this keyword
//   console.log(this);
// };
// calAge(2004);

//this keyword using in method inside the object
// const shreekanth = {
//   year: 2004,

//   calMe: function () {
//     console.log(this);
//     console.log(2025 - this.year);
//   },
// };

// shreekanth.calMe();

// const shiva = {
//   year: 2000,
// };
// shiva.calMe = shreekanth.calMe; //the copiying method form one object to onther call method boarling
// shiva.calMe(); //this key word always points to an object and it calling a method here method is calMe
// // this keywod is dynamic
// // it depance how the funciton is call
// const f = shiva.calMe; // we just copeing the funciton into f variable
// f(); // it throws an error that undefined and not a function

// USING normal vs arrow function
const shree = {
  firstName: "shreekanth",
  greet: () => `hey ${this.firstName}`,
};
shree.greet();

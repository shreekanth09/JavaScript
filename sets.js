// const orderSet = new Set(["shree", "shree", "shiva", "uday", "sohan"]); //set is used to delete the repeatation elements
// console.log(orderSet);
// console.log(orderSet.has("shree")); //has method ,check the element is present or not
// orderSet.add("mane");
// console.log(orderSet.values());
// console.log(orderSet.delete("shree"));
// // console.log(orderSet.clear());
// for (let val of orderSet) {
//   console.log(val);
// }

//strings
// const airline = "this is e new one";
// const plane = "B60SSC";
// console.log(plane[0]);
// console.log("B60SSC"[3]);
// console.log(airline.length);
// console.log(airline.indexOf("e")); //it goes with front
// console.log(airline.lastIndexOf("e")); //it come from last
// console.log(airline.indexOf("p")); // it gets -1 cz element not present
// console.log(airline.slice(4)); // it cuts and countinue
// console.log(airline.slice(4, 8)); //bigun and end
// console.log(airline.slice(0, airline.indexOf(" "))); // used to print first word[dont forget the space ]
// console.log(airline.slice(airline.lastIndexOf(" "))) + 1; // used to print last word[dont forget the space ] +1 is used to remove th space
// let myName = "   shreekanth  ";
// console.log(myName.trim()); // used to erase the space
let announce = "hi may nam is shreekanth ,may habbi is studing";
let replace = announce.replace("nam", "name"); //replace metod
// console.log(replace);
let replaceall = announce.replaceAll("may", "my");
console.log(replaceall);

// --OTHER METHODS ARE--
announce.startsWith();
announce.endsWith();

// let names = "jOnAS";
// let names = "shrEEkaNth";
// let low = names.toLowerCase();
// let Up = low[0].toUpperCase() + low.slice(1);

// console.log(Up);

//split() method
console.log("shree kanth".split(" "));

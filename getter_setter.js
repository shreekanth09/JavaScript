//getters and setters are used to get and set the values
const accounts = {
  name: "shreekanth",
  movements: [10, 20, 30, 60, 55],
  get lates() {
    return this.movements.slice(-1).pop(); //slice used to point at the last element and pop is used to take that element out
  },
  set lates(moves) {
    //setter and getter name should be same ,in this case the same name is "lates"
    this.movements.push(moves);
  },
};
console.log(accounts.lates);
console.log((accounts.lates = 10)); //we dont set like lates(10),becouse it(setter) is not a function it is a property
console.log(accounts.movements);
//note getters and setters not often used it used miner times

const students = {
  name: ["shreekanth", "prashanth", "shiva", "sohan"],
  usn: [95, 96, 97, 98],
  get us() {
    return this.name.slice(-1).pop();
  },
  set us(mov) {
    this.name.push(mov);
  },
};
console.log(students.us);
console.log((students.name = "mohan"));
console.log(students.name);
//
//object.create
const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthyear); //birthyear ,we can give randome name but it should be given to that perticular object
    // console.log(2024 - this.present);
    console.log(this.name);
  },
  intit(firstrname, birt) {
    //it is not a constructor ,it is a method
    this.name = firstrname;
    this.birthyear = birt;
  },
};
const shree = Object.create(PersonProto);
console.log(shree);
shree.name = "shreekanth";
shree.birthyear = 2004;
shree.present = 2025;
shree.calcAge();
//
console.log(shree.__proto__ === PersonProto);
//
//lets create one more example
const shiv = Object.create(PersonProto);
shiv.intit("shivaprasad", 2009);
shiv.calcAge();

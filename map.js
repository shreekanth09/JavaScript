const arr = [10, 20, 30, 40, 50];
const newOne = arr.map((add) => console.log(add));
//it used print go with each element

//onther example

//using map method and  also some array methods spilt join etc

const createUserName = function (user) {
  const newOne = user
    .toLocaleLowerCase()
    .split(" ") //used to spilt full name into 3 parts
    .map((name) => {
      return name[0];
    })
    .join(""); // used to join the function
  return newOne;
};
const names = "Steven Thomas Williams"; //we want to make it stw;

console.log(createUserName(names));

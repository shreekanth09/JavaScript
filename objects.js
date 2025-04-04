const info={
    firstName:"shreekanth",
    lastName:"shiva",
    // age:21,
    birth:2004,
    work:"devolaper",
    frds:["uday","sohan","shiva"],
    job:"developer",
    license:true,
    // clcage:function(){         //passiong funciton inside an object
    //     console.log(this);
    //     // return  2025-this.birth;    // this keyword using to acces the key in the object;
    //     this.age=2025-this.birth;//this is used to add an property in our object
    //     return this.age;
    // }
    find:function(){
        return `${this.firstName} is a ${2025-this.birth} year old ${this.work} and hi has ${this.license ? "a":"no"} license`;
    }
    
};
console.log(info.find());
// const key="Name";
// console.log(info["first"+key]); //something u didnt know
// console.log(info["last"+key]);
// console.log(info.age);
// console.log(info["frds"]);
// console.log(info.clcage());

// const choose=prompt("what passion do you like choose ,firstName,age,job ");        
// console.log(info[choose]);  //thsi is called bracket notation
// console.log(info.choose);  // its dont work 

//lear how to add new properties to our object
// info.location="javagal";
// info["state"]="karnataka";
// console.log(info);
const agecal=birth=>2025-birth;  // here we dont want to return anything
const result=agecal(2004);
console.log(result);


const age=(birt)=>{            //here we should return the value 
    const age= 2025-birt;
    return age;
}
const age1=age(2000);
console.log(age1);
// class ToyotaCar{
//     start(){
//  console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brand=brand;
//     }
// }
// let shift =new ToyotaCar();
// shift.setBrand("shreekanth");
// let maruti=new ToyotaCar();
// maruti.setBrand("prashu");
// class myClass{
//     clsName(){
//         console.log("BE \n");
//     }
//     branch(){
//         console.log("CSE");
//     }
// setStudentNm(Name){
//   this.Nama=Name;
// }
// }
// let obj = new myClass();
// obj.setStudentNm("shreekanth");
class myClg{
    constructor(){
        this.callme="shee"
    }
    dog(){
        console.log("dog is borking");
    }
    man(){
        console.log("Man is eating");
    }
}
let obj=new myClg();
// obj.setName());


//constructor                                    //constructor

// class myName{
//     constructor(name,milage){
//         this.Name=name;
//         this.milage=milage;
//     }
// }
// let show=new myName("shreekanth","shiva");

// class adding{
//     constructor(a,b){
//         let sum=a+b;
//         this.sum=a+b;
//     }
// }
// let myadd=new adding(10,20);

// class prinf{
//     constructor(name){
//         console.log("hellow Mr.")
//         this.showName=name;
//     }
// }
// let obj=new prinf("krishna");

// class showName{
//     show(name){
//         console.log("show my name");
//         this.name=name;
//     }
// }
// let your=new showName();
// your.show("krishna");

// class myName{
//     constructor(name){
//         this.nameis=name;
//     }
// }
// let show=new myName("shreekanth");

// class myName{
//     constructor(Name){
//         this.info=Name;
//        m // console.log(info);
//     }
// }
// let nows=new myName("shreekanth");
// nows.constructor("shreekanth");

 //                                            //inheritence 
// class Parent{
//     hello(){
//         console.log("hello bro");
//     }
//     noOne(){
//         console.log("what are you doing");
//     }
// }
// class child extends Parent{

// }
// let obj =new child();
// let shree=new child();

// class worker{
//     eat(){
//         console.log("eating the food");
//     }
//     sleep(){
//         console.log("sleeping on the bed");
//     }
// }
// class Engineers extends worker{
//     work(){
//         console.log("working");
//     }
// }
// class Bank extends Engineers{
//     emp(){
//         console.log("employes are working");
//     }
// }
// let shree=new Bank();

class myName{
    myn(){
        console.log("my name is shreekanth jc ");
    }
    mySum(){
        let a=10,b=20;
       let  s=a+b;
       console.log(s);
    }
}
class myfrdname extends myName{
    myfrd(){
        console.log("his name is shiva");
    }
}
class onthr extends myfrdname{
    onther(){
    console.log("onther frd name is uday");
}
}
let getit =new onthr();
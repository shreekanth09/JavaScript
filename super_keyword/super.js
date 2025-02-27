// class parent{
//     constructor(Name){
//         this.info=Name;
//         // console.log("enter parent class");
//     }
// }
// class child extends parent{
//     constructor(Name){
       
//         // console.log("enter child class");
//     //    console.log("asfkak")
       
//         //
//         super(Name);
//         this.one=Name;
//         // console.log("sskjskj")
//     }
// }
// let obj=new child("shreekanth");


// class parent{
//     constructor(){
//         console.log(" 2nd ,my name is shreekanth");
//         // this.ourName="prashanth";
//         this.ourName="prashanth";
//     }
//     eat(){
//         console.log("it eat first");
//     }
// }
// class child extends parent{
//     constructor(name,ourName){
//         console.log("its first");
//         super(ourName);
//         // super.eat();
//        this.myname=name;
//     }
//     world(){
//         console.log("its my world");
//         super.eat();
//     }
// }
// let obj=new child("shiva");



//PRACTIES
// class userClass{
//     constructor(name,email){
//         this.name=name;
//         this.emial=email;
//     }
//     viewData(){
//         console.log("data is viewed");
//     }
// }
// let obj=new userClass("shreekanth","shrikanths@188gmail.com");
// class hardwork{
//     constructor(callme,myachi){
//         this.name=callme;
//         this.achiv=myachi;
//     }
//     doThis(){
//         console.log("I can do this all day");
//     }
// }
// class succusess extends hardwork{
//     constructor(callme,myachi){
//         console.log("yes ! i did it");
//         super(callme,myachi);
//         super.doThis();
//         this.myname=callme;
//     }
// }
// let effort=new succusess("shreekath","CEO of Google");

let a=5;
let b=10;
console.log("a+b=",a+b);
console.log("a+b=",a+b);
try{
    console.log("a+b=",a+c);
}catch(err){
    console.log(err);
}
console.log("a+b=",a+b);
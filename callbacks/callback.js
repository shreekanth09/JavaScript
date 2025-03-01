// function sum(a,b){
//     console.log(a+b);
// }
// function calc(a,b,sumof){
//     sumof(a,b);
//     // console.log(sumof);
// }
// calc(6,2,sum);


// function myName(a,b){
//     let job=a+b;
//     console.log(job);
//     // return job;
// }
// function calc(a,b,sum){
//     sum(a,b);
// }
// calc(1,6,myName);
// function getData(dataId,nextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(nextData){
//         nextData();
//         }
//     },2000);
// }
// getData(1,()=>{
//     console.log("getting for data 2.....")
//     getData(2,()=>{
//         console.log("getting for data 3....")
//         getData(3);
//     });
// });

function getData(dataId,nextData){
    setTimeout(()=>{
        console.log(dataId);
        if(nextData){
            nextData();
        }
    },2500);
}
console.log("I am your.... ");
getData("shreekanth",()=>{
    console.log("and I'm going to tell you that.!");
    getData("I fellen love with you...!",()=>{
        console.log("my dear..");
        getData("Mrs Shreekanth");
    });
});
// getData.style.backgroundColor="pink";









































 
// function getData(dataId,nextData){
//     setTimeout(()=>{
//         console.log("Data ",dataId);
//         if(nextData){
//             nextData();
//         }
//     },2000);
// }
// // below the code is know as CALLBACK Hell,its not good for understanding
// getData(1,()=>{
//     console.log("getting for data 2....");
//     getData(2,()=>{
//         console.log("getting for data 3....");
//         getData(3,()=>{
//             console.log("getting for data 4....");
//             getData(4);
//         });
//     });
// });//NOTE: for solving call back hell there is a beautiful topic call Promisess...
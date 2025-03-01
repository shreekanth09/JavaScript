

                  //CALLBACK hell....
// function getData(getID,nextId){
//     setTimeout(()=>{
//         console.log("data",getID);
//      if(nextId){
//         nextId();
//      }
//     },3000);
// }
// console.log("fetching data 1...");
// getData(1,()=>{
//     console.log("fetching data 2...");
//     getData(2,()=>{
//         console.log("fetching data 3...");
//         getData(3)
//     });
// });

// PROMISE CHAINE
function getMyadd(myID){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("mydata: ",myID);
        resolve("done");
    },3000);
});
}
console.log("fetching data 1....")
getMyadd(1).then(()=>{
    console.log("fetching data 2....");
    getMyadd(2).then(()=>{
        console.log("fetching data 3....");
        getMyadd(3).then(()=>{
            console.log("fetching data 4....");
            getMyadd(4);
        });
    });
});
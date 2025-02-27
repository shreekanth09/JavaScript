// function myInfo(dataID){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data ID :",dataID);
//         resolve("done");
//     },2000);
// });
// }
        
// async function output() {
//     console.log("printing information....");
//     await myInfo(1);
//     await myInfo(2);
//     await myInfo(3);
    
// }


function myInfo(dob){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data of birth is:",dob);
            resolve("done");
        },2000);
    });
}
function myInfo2(day){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("birth day is:",day);
            resolve("done");
        },2000);
    });
}

function myInfo3(place){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("birth place is:",place);
            resolve("done");
        },2000);
    });
}
async function result(dob,day,place){
    await myInfo(" 18-06-2004",dob);
    await myInfo2("friday",day);
    await myInfo3("Javagal",place);
}
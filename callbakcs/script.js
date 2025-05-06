// console.log(1);
// console.log(2);
// setTimeout(function () {
//   console.log(3);
// }, 2000);
// console.log(4);

//callback
// function sum(a, b) {
//   console.log(a + b);
// }
// function calculate(a, b, sumcallback) {
//   //here sumcallback is a call back funciton
//   sumcallback(a, b);
// }
// calculate(1, 2, sum);

//callback hell
// function getData(dataID, nextData) {
//   setTimeout(() => {
//     console.log("dataId", dataID);
//     if (nextData) {
//       nextData();
//     }
//   }, 3000);
// }
// console.log("fetching data 1....");
// getData(1, () => {
//   console.log("fetching data 2....");
//   getData(2, () => {
//     console.log("fetching data 3....");
//     getData(3);
//   });
// });

//
//
///// PROMISES ...
// let promise = new Promise((res, rej) => {
//   console.log("i am a promie");
//   // res("one");
//   rej("i got error");
// });

// function getData(dataID, nextData) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("dataId", dataID);
//       res("susscefull");
//       if (nextData) {
//         nextData();
//       }
//     }, 6000);
//   });
// }

// const getPromise = () => {
//   return new Promise((res, rej) => {
//     console.log("i am a promise");
//     // res("sussusful");
//     rej("cought erroe");
//   });
// };
// const proms = getPromise();
// proms.then((res) => {
//   // result("it completed");
//   console.log("completed", res);
// });
// //for error
// proms.catch((rej) => {
//   console.log("got an error", rej);
// });
//
//
//promise chaining
function asynch1(geteData, nextData) {
  return new Promise((reso, rej) => {
    setTimeout(() => {
      console.log("i'am", geteData);
      reso("completed");
      // if (nextData) {
      //   nextData();   //this is not requried in promises
      // }
    }, 4000);
  });
}

// function asynch2() {
//   return new Promise((reso, rej) => {
//     setTimeout(() => {
//       console.log("data 2");
//       reso("completed");
//     }, 4000);
//   });
// }
// const p1 = asynch1("shreekanth");

// console.log("fetching the data");
// p1.then((res) => {
//   // console.log(res);
//   console.log("fetching the data");
//   let p2 = asynch1("shiva");
//   p2.then((res) => {
//     // console.log(res);
//   });
// });
//
///////////////////////////////////////// simple form of promise chaining
//
//
// console.log("fetching data ....");
// asynch1("shreekanth").then((res) => {
//   console.log(res);
//   console.log("fetching data ....");
//   asynch1("shiva").then(() => {
//     console.log(res); // one sali calll madudre saaku
//   });
// });
//
//////////////////////////////////////// ACTUAL promise chaining is this
console.log("fetching data ....");
asynch1("shree")
  .then((res) => {
    console.log(res);
    console.log("fetching data ....");
    return asynch1("shiva");
  })
  .then((res) => {
    console.log(res);
    console.log("fetching data ....");
    return asynch1("prashu");
  })
  .then((res) => {
    console.log(res);
  });

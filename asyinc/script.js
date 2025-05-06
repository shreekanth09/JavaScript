// Asynic and await
function api(name, next) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("todays weather is 30", name);
      res("complete"); // if you dont give this it async fun couldednt excute more the ones
      //   if (next) { //dont require
      //     next();
      //   }
    }, 3000);
  });
}

// async function sk() {
//   //sk is a synnc funciton it alsways return a promise
//   await api("Degree");
//   await api("Ph");
//   await api("cm");
// }
// sk();
// there is systme called ,IIFE (immediately invoked finction expression ) we dont use aften or lot of, it calls itslef
(async function () {
  //sk is a synnc funciton it alsways return a promise
  await api("Degree");
  await api("Ph");
  await api("cm");
})();

//asynic always return promises

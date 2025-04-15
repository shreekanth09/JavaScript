const cost = [10, 20, 30, 40];
// chaing of three methods also called pipelining
const uroToUSD = 1.1;
const crtToUSD = cost
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    // it is used to check wheather filter method did the mistake or not ,it is very imp step to cross checking the methods
    console.log(mov, i, arr);
    return mov * uroToUSD;
  })
  // .map(mov => mov * uroToUSD)
  .reduce((acc, cur) => acc + cur, 0);
console.log(`${crtToUSD} INR`);

//filter method
const movements = [10, -10, 300, 400, 500];
const deposit = movements.filter((mov) => mov > 0); //it filter out the negative values
// if we use map insted of filter method we get only boolian vlaues true of flase
console.log(movements);
console.log(deposit);

const withdrawal = movements.filter((mov) => mov < 0);
console.log(withdrawal);
// filter method used to filter the values what we wanted

const fruits=fruite=>fruite*4;

const somejuices=(apple,orange)=>{
    const first=fruits(apple);        //calling a function inside a function
    const second=fruits(orange);
    const juice=`juice with ${first} apple and jucie with ${second} oranges are very testie`;
    return juice;
}
console.log(somejuices(2,4));
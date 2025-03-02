let btn=document.querySelectorAll("#click");
let chace=document.querySelector(".sk");
let chaces=document.querySelector(".sk1");
let chacet=document.querySelector(".sk2");
btn.forEach((click)=>{
    console.log(click);
   click.addEventListener("click",()=>{
    console.log("hello bro");
    // click.innerText="css";
    chace.innerText="myname";
    chace.style.backgroundColor="red";
    chaces.innerText="yorname";
    chaces.style.backgroundColor="yellow";
    chacet.innerText="hisName";
    chacet.style.backgroundColor="orange";

   })
})

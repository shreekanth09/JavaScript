let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec  = document.getElementById('sec');

function displayrTime(){
    let date= new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    let hRotation = 30 * hrs + mins/2;
    let mRotation = 6 * mins;
    let sRotation = 6 * secs;
    
    hr.style.transform =`rotate(${hRotation}deg)`;
    min.style.transform =`rotate(${mRotation}deg)`;
    sec.style.transform =`rotate(${sRotation}deg)`;
    
}
setInterval(displayrTime,1000);
let getdays = document.getElementById("days");
let gethours = document.getElementById("hours");
let getminutes = document.getElementById("minutes");
let getseconds = document.getElementById("seconds");

let deadline = new Date("Mar 28,2023 23:59:59").getTime();


let showTime = setInterval(() => {
    let now = new Date().getTime();
    let t = deadline - now;



    if (t > 0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((t % (1000 * 60)) / 1000);
        getdays.innerText = days;
        gethours.innerText = hours;
        getminutes.innerText = minutes;
        getseconds.innerText = seconds;
    } else {
        clearInterval(showTime);
        getdays.innerText = "Sorry! Time Out";
        gethours.innerText = "Sorry! Time Out";
        getminutes.innerText = "Sorry! Time Out";
        getseconds.innerText = "Sorry! Time Out";
        let playmusic=document.getElementById("playmusic");
        playmusic.innerHTML=`<embed src="/audio/hbd.mp3" autostart="true" width="2" height="0" type="audio/mpeg">`
    }



}, 1000);
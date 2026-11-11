setInterval(() => {

    let seconds = Number(document.querySelector(".seconds").innerHTML) +1;
    let minute = Number(document.querySelector(".minute").innerHTML);
    let hour=Number(document.querySelector(".hours").innerHTML);
    let date=Number(document.querySelector(".date").innerHTML);
    if (seconds === 60) {
        seconds = 0;
        minute++;
    }
    if (minute===60) {
        minute=0;
        hour++;
    }
    if (hour===24) {
        hour=0;
        date++;
    }

    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".minute").innerHTML = minute;
    document.querySelector(".hours").innerHTML = hour;
    document.querySelector(".date").innerHTML = date;
}, 1000);
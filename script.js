
let stWork  = document.querySelector('#stWork');
let stBreak = document.querySelector('#stBreak');
let rsWork  = document.querySelector('#rsWork');
let endWork = document.querySelector('#endWork');

let timer1 = document.getElementById('timerdisplay1');
let timer2 = document.getElementById('timerdisplay2');

let timercount1;
let timercount2;
let secondsW = 00;
let minsW = 00;
let hoursW = 00;
let secondsB = 00;
let minsB = 00;
let hoursB = 0;
let stFlag = 0; 
let brFlag = 0; 
let rsFlag = 0; 


function startTimer() {
    secondsW++;
    if(secondsW==60) {
        secondsW=0;
        minsW+=1;
    }
    
    if(minsW==60) {
        minsW =0;
        secondsW=0;
        hoursW+=1;
    }
    timer1.innerHTML = hoursW + " : " + minsW + " : " +secondsW;
    stWork.disabled = true;
}

function startBreak() {
    secondsB++;
    if(secondsB==60) {
        secondsB=0;
        minsB+=1;
    }
    
    if(minsB==60) {
        minsB =0;
        secondsB=0;
        hoursB+=1;
    }
    timer2.innerHTML = hoursB + " : " + minsB + " : " +secondsB;
    stBreak.disabled = true;
}

function resumeWork() {
    startTimer();
    clearInterval(timercount2)
}

function endTimer (){
    clearInterval(timercount1);
    clearInterval(timercount2);
    secondsW=0;
    minsW=0;
    hoursW=0;
    secondsB=0;
    minsB=0;
    hoursB=0;
    timer1.innerHTML = hoursW + " : " + minsW + " : " +secondsW;
    timer2.innerHTML = hoursB + " : " + minsB + " : " +secondsB;
    stWork.disabled = false;
    stBreak.disabled = false;
    rsWork.disabled = false;
}

stWork.addEventListener('click', function() {
    clearInterval(timercount1);
    clearInterval(timercount2);
    timercount1 = setInterval(function () {
        startTimer()
    },700);
});

stBreak.addEventListener('click', function() {
    clearInterval(timercount2);
    clearInterval(timercount1);
    timercount2 = setInterval(function () {
        startBreak()
    },700);
});

rsWork.addEventListener('click' , function () {
    clearInterval(timercount2);
    clearInterval(timercount1);
    timercount1 = setInterval(function () {
        startTimer()
    },700);
    rsWork.disabled = true;
});

endWork.addEventListener('click' , endTimer);


    

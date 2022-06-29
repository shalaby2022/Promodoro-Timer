// var obj = {
//     name:'ahmed',
//     age:'23',
//     stats:'single',
//     address:'alex'
// }

// var obj2 = new Object();
// obj2.name="ahmed";
// obj2.age="27";
// obj2.stats="single";
// obj2.address="Alex";

// console.log(obj2.name);
// console.log(obj2['age']);
// console.log(Object.values(obj2));
// console.log(Object.keys(obj2));
// console.log();

// var y = Object.entries(obj2);
// y.forEach(function(val,ind){
//     console.log(ind + " - " + val[0] + " : " + val[1])
// })


// var first = document.getElementById("input1");
// var second = document.getElementById("input2");

// function printname(){
    
//     var fullName = first.value + " " + second.value;
//     alert(fullName)
// }

// var button = document.getElementById("btn");
// button.addEventListener('click',printname())

// var product = [100, 89, 321, 341, 743, 6754, 52, 36];
// for(var i =1 ; i <(product.length+1) ;i++ ){
//     console.log( i + " - " +    (product[i-1] - (product[i-1] * (i / 10))))
// };


//---------------------------- Task-6 ---------------------//

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


    
//     function Calculator(num1,num2) {

//         this.numberone = num1;
//         this.numbertwo = num2;
//     }
//     timesMethod 
// }
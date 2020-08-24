let playbtn=document.querySelector(".play");
let microSecDisplay=document.querySelector(".micro-sec");
let secDisplay=document.querySelector(".sec");
let minDisplay=document.querySelector(".min");
let hourDisplay=document.querySelector(".hour");
let figures=document.querySelector(".figures");
let lapseDisplay=document.querySelector(".lapses");


let adder;


playbtn.addEventListener("click", ()=>{
  addSec();
});


let micSecTimer;
let secTimer;
let minTimer;
let hourTimer;

function addSec() {
  micSecTimer=parseInt(microSecDisplay.textContent);
  secTimer=parseInt(secDisplay.textContent);
  minTimer=parseInt(minDisplay.textContent);
  hourTimer=parseInt(hourDisplay.textContent);
  adder=setInterval(function() {
    micSecTimer+=1;
    microSecDisplay.textContent=(micSecTimer<10)? "0" + micSecTimer:micSecTimer;
    if (micSecTimer === 100) {
      micSecTimer =1;
      secTimer+=1;
      secDisplay.textContent=(secTimer<10)? "0" + secTimer:secTimer;

      if (secTimer===60) {
        minTimer+=1;
        secTimer=0;
        minDisplay.textContent=(minTimer<10)? "0" + minTimer:minTimer;

        if (minTimer===59) {
          minTimer=0;
          hourTimer+=1;
          hourDisplay.textContent=(hourTimer<10)? "0" + hourTimer:hourTimer;
        }
      }
    }
  },10);
  adder;
}


let lapTime={milliSec:0,sec:0,min:0,hr:0};
let lapMinni;
let lapSec;
let lapMin;
let lapHour;
  
function lapser() {  
  if (micSecTimer < lapTime.milliSec) {
    secTimer--;
    lapMinni=micSecTimer - lapTime.milliSec + 100;
  }
  else {
    lapMinni= micSecTimer - lapTime.milliSec;
  }

  if (secTimer < lapTime.sec) {
    minTimer--;
    lapSec = secTimer - lapTime.sec + 60;
  }
  else {
    lapSec = secTimer - lapTime.sec;
  }

  if (minTimer < lapTime.min) {
    hourTimer--;
    lapMin = minTimer - lapTime.min + 60;
  }
  else {
    lapMin = minTimer - lapTime.min;
  }

  lapHour = hourTimer - lapTime.hr;

  lapTime={
    sec:secTimer,
    min:minTimer,
    milliSec:micSecTimer,
    hr:hourTimer
  }


  lapHour=(lapHour < 10) ? "0" + lapHour: lapHour;
  lapMin=(lapMin < 10) ? "0" + lapMin: lapMin;
  lapSec=(lapSec < 10) ? "0" + lapSec: lapSec;
  lapMinni=(lapMinni< 10) ? "0" + lapMinni: lapMinni;
  
    let divDisplay=document.createElement("DIV");
    let textDisplay=document.createTextNode(`${lapHour}:${lapMin}:${lapSec}:${lapMinni}  -   ${hourDisplay.textContent}:${minDisplay.textContent}:${secDisplay.textContent}:${microSecDisplay.textContent}`);
    divDisplay.setAttribute("id", "lap-id");
    divDisplay.appendChild(textDisplay);
    lapseDisplay.appendChild(divDisplay);  
}
let lapsBtn=document.querySelector(".laps");
lapsBtn.addEventListener("click", lapser);

let stop=document.querySelector(".stop");
stop.addEventListener("click", stopper);

function stopper() {
  clearInterval(adder);
  micSecTimer=micSecTimer;
  secTimer=secTimer;
  minTimer=minTimer;
  hourTimer=hourTimer;

  lapTime={
    min:lapTime.min,
    sec:lapTime.sec,
    hr:lapTime.hr,
    milliSec:lapTime.milliSec
  };
}


function clearer() {
  let reset=document.querySelector(".reset");
  reset.addEventListener("click", ()=>{
    stopper();

    microSecDisplay.textContent="00";
    secDisplay.textContent="00";
    minDisplay.textContent="00";
    hourDisplay.textContent="00";
    lapseDisplay.innerHTML= "";
    lapTime={
      min:0,
      sec:0,
      hr:0,
      milliSec:0
    };
  })
}
clearer();
'use-strict'

var timeout = 90;  
var countClock = document.querySelector('.current-time');
countClock.innerHTML = timeout;

var popUp = document.querySelector('.end-screen-text')
var instructions = document.querySelector('.screen-text-beginning')


var interval = setInterval(function (){
  var countClock = document.querySelector('.current-time');
  countClock.innerHTML =(--timeout);
  if (timeout < 1 ){
    clearInterval(interval);
    instructions.classList.add('end-screen-text')
    popUp.classList.remove('end-screen-text')
    popUp.classList.add('end-screen-text-Active')
    document.querySelector('.final-score').innerHTML = score;
    cleanupUpgrades()
    clearInterval(intervalId)
  }
 
},1000);



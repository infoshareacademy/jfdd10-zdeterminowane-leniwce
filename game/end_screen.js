'use-strict'

var timeout = 2;  
var countClock = document.querySelector('.current-time');
countClock.innerHTML = timeout;

var popUp = document.querySelector('.end-screen-text')

var interval = setInterval(function (){
  var countClock = document.querySelector('.current-time');
  countClock.innerHTML =(--timeout);
  if (timeout < 1 ){
    clearInterval(interval);
    popUp.classList.remove('end-screen-text')
    popUp.classList.add('end-screen-text-Active')
    document.querySelector('.final-score').innerHTML = score;
    cleanupUpgrades()
  }

  
},1000);

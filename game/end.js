'use-strict'

var timeout = 30;  
var countClock = document.querySelector('.current-time');
countClock.innerHTML = timeout;

var popUp = document.querySelector('.pop-up')

var interval = setInterval(function (){
  var countClock = document.querySelector('.current-time');
  countClock.innerHTML =(--timeout);
  if (timeout < 1 ){
    clearInterval(interval);
    // popUp.classList.add('.pop-up-continer-active')
  }

},1000);
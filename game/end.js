'use-strict'

var timeout = 30;  
var countClock = document.querySelector('.current-time');
countClock.innerHTML = timeout;

var interval = setInterval(function (){
  var countClock = document.querySelector('.current-time');
  countClock.innerHTML =(--timeout);
  if (timeout < 1 ){
    clearInterval(interval);
  }
},1000);
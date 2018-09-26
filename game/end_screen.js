'use-strict'

var timeout = 30;  
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
    
    clickField.removeEventListener('click', handleCardClick)
  }

},1000);

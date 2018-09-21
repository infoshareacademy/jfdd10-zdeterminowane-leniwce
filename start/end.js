'use-strict'

var timeout = 30  
var clock = document.querySelector('.clock')
var clock = document.querySelector('.clock')
clock.innerHTML ='TIME LEFT: ' + timeout + ' seconds'

var interval = setInterval(function (){
  var clock = document.querySelector('.clock')
  clock.innerHTML ='TIME LEFT ' + (--timeout) + ' seconds'
  if (timeout < 1 ){
    clearInterval(interval);
  }
},1000);
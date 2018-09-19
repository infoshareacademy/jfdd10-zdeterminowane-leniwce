var timeout = 30
undefined
document.querySelector('.aalamkotaa')
<pre class=​"aalamkotaa" style>​…​</pre>​
document.querySelector('.aalamkotaa').innerHTML =  'Zostalo: ' + timeout + ' sek';
"Zostalo: 30 sek"
setInterval( function(){ document.querySelector('.aalamkotaa').innerHTML =  'Zostalo: ' + (timeout--) + ' sek'; }, 1000 ) 
10
var interval = setInterval( function(){ if( timeout < 1 ){ clearInterval(interval); } 
ocument.querySelector('.aalamkotaa').innerHTML =  'Zostalo: ' + (timeout--) + ' sek'; }, 1000 ) 

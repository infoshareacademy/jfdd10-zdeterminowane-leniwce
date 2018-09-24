

var automateOneField = document.querySelector('.auto-one');
var score = parseInt(document.querySelector(".current-score").innerText);
var price = 50;
var count = 0;
var power = 10;
var automateOneTotal = 0;

// TODO make numbers floor

automateOneField.addEventListener('click', function () {
    if (price <= score) {
        count++;
        score = score - price;
        price = price * 1.5;

        document.querySelector(".auto-one-cost").innerHTML = price;
        document.querySelector(".auto-one-count").innerHTML = count;

    } else {
        return;
    }


    // works

});

setInterval(function () {
    
    automateOneTotal = power * count;
    score += automateOneTotal;

    document.querySelector(".current-score").innerHTML = score;

}, 1000)

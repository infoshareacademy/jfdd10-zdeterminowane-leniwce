


    var automateOneField = document.querySelector('.auto-one');
    var score = parseInt(document.querySelector(".current-score").innerText);
    var price = 50;
    var count = 0;
    var power = 10;
    var automateOneTotal = 0;
    
    
    automateOneField.addEventListener('click', function () {
        if (price <= score) {
            count++;
            score = score - price;
            price = Math.floor(price * 1.5);
    
            document.querySelector(".auto-one-cost").innerHTML = price;
            document.querySelector(".auto-one-count").innerHTML = count;
    
        } else {
            return;
        }
    
    
        // works
    
    });

    



setInterval(function () {

    var autoOneCost = parseInt(document.querySelector(".auto-one-cost").innerHTML);

    autoOneCost <= score ? automateOneField.classList.add('available') : automateOneField.classList.remove('available');
    var upgradePrice = parseInt(document.querySelector(".click-up-cost").innerHTML);

    upgradePrice <= score ? upgradeField.classList.add('upgrade-available') : upgradeField.classList.remove('upgrade-available');

    automateOneTotal = power * count;
    score += automateOneTotal;

    document.querySelector(".current-score").innerHTML = score;
    document.querySelector(".current-score-per-second").innerHTML = automateOneTotal + scoreOnClick;
    scoreOnClick = 0;


}, 1000)

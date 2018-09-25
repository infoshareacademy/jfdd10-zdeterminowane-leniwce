var score = 0;
var scoreOnClick = 0;

function change_score(mod) {
    score += mod;
    document.querySelector(".current-score").innerHTML = score;
}


var clickField = document.querySelector('.click-me')

clickField.addEventListener('click', function () {
    change_score(1 + upgrade);
    scoreOnClick += (1 + upgrade)
    clickField.classList.add('slide-out');
    setTimeout(function () {
        clickField.classList.remove('slide-out');
    }, 100)

})


var score = parseInt(document.querySelector(".current-score").innerText);
var upgrade = 0;
var price = 20;
var power = 10;
var upgradeCount = 0;


var clickUpgradeField = document.querySelector(".click-upgrade.upgrade-item")

clickUpgradeField.addEventListener('click', function () {
    if (score < price) {
        return;
    }
    upgradeCount += 1;
    upgrade += 4;
    change_score(-price);
    price += 20;

    document.querySelector('.click-up-cost').innerText = price;
    document.querySelector('.click-up-count').innerText = upgradeCount;
})



var automateOneField = document.querySelector('.auto-one');
var upgradeField = document.querySelector('.click-upgrade');
var upgradeOneTotal = 0;

var upgradePower = 10;

setInterval(function () {

    var upgradePrice = parseInt(document.querySelector(".click-up-cost").innerHTML);

    upgradePrice <= score ? upgradeField.classList.add('upgrade-available') : upgradeField.classList.remove('upgrade-available');

    upgradeOneTotal = upgradePower * upgradeCount;
    score += upgradeOneTotal;

    document.querySelector(".current-score").innerHTML = score;
    document.querySelector(".current-score-per-second").innerHTML = upgradeOneTotal + scoreOnClick;
    scoreOnClick = 0;


}, 1000)
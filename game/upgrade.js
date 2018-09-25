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

var upgrade = 0;
var price = 20;

function clickUpgradeScore(modify) {
    upgrade += modify;
}

var clickUpgradeField = document.querySelector(".click-upgrade.upgrade-item")

clickUpgradeField.addEventListener('click', function () {
    if (score < price) {
        return;
    }
    clickUpgradeScore(4);
    change_score(-price);
    price += 20;
})
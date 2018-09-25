var score = 0;

function change_score(mod) {
    score += mod;
    document.querySelector(".current-score").innerHTML = score;
}


var clickField = document.querySelector('.click-me')

clickField.addEventListener('click', function () {
    change_score(1 + upgrade);
    clickField.classList.add('slide-out');
    setTimeout(function () {
        clickField.classList.remove('slide-out');
    }, 100)

})

var upgrade = 0;

function clickUpgradeScore(modify) {
    upgrade += modify;
}

var clickUpgradeField = document.querySelector(".click-upgrade.upgrade-item")

clickUpgradeField.addEventListener('click', function () {
    if (score < 20) {
        return;
    }
    clickUpgradeScore(9);
    change_score(-20);
})
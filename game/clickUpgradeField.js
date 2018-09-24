// functions for click power field


var clickUpgradeField = document.querySelector(".click-upgrade.upgrade-item")

clickUpgradeField.addEventListener('click', function () {
    if (score < 20) {
        return;
    }
    clickUpgradeScore(4);
    change_score(-20);

    // animation

/*
    clickUpgradeField.classList.add('slide-out');
    setTimeout(function () {
        clickUpgradeField.classList.remove('slide-out');
    }, 100)  
*/
})
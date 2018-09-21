// functions for click power field


var clickUpgradeField = document.querySelector(".click-upgrade.upgrade-item")

clickUpgradeField.addEventListener('click', function () {
    clickUpgradeScore(5);

    // animation

/*
    clickUpgradeField.classList.add('slide-out');
    setTimeout(function () {
        clickUpgradeField.classList.remove('slide-out');
    }, 100)  
*/
})
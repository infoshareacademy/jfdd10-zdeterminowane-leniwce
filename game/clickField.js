// functions for click field 


var clickField = document.querySelector('.click-me')
var scoreOnClick = 0;

clickField.addEventListener('click', function () {
    change_score(1 + upgrade);
    scoreOnClick += (1 + upgrade);
    console.log(scoreOnClick);

    // animation
    clickField.classList.add('slide-out');
    setTimeout(function () {
        clickField.classList.remove('slide-out');
    }, 100)

})
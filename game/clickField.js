// functions for click field 


var clickField = document.querySelector('.click-me')

clickField.addEventListener('click', function () {
    change_score(1 + upgrade);
    // animation
    clickField.classList.add('slide-out');
    setTimeout(function () {
        clickField.classList.remove('slide-out');
    }, 100)

})
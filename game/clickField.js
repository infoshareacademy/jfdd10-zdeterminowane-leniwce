// functions for click field 


var clickField = document.querySelector('.click-me')

clickField.addEventListener('click', function () {
    // animation
    clickField.classList.add('slide-out');
    setTimeout(function () {
        clickField.classList.remove('slide-out');
        change_score(1);
    }, 100)

})
// functions for click field 


var clickField = document.querySelector('.click-me')

clickField.addEventListener('click', function () {
    change_score();

    // animation
    clickField.classList.add('slide-out');
    setTimeout(function () {
        clickField.classList.remove('slide-out');
    }, 100)

})
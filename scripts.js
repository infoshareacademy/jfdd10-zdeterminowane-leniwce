var formBtn = document.querySelector('.form-btn');
var formContainer = document.querySelector('.form-container')



// formBtn.addEventListener('click', sendForm);


function sendForm() {
    console.log('clicked');
    formWindow = document.querySelector('.form')
    formContainer.removeChild(formWindow);

    formSent();



}

function formSent() {
    var newForm = document.createElement('div');
    newForm.classList.add('form');
    newForm.innerHTML = 'You have applied successfully! <br> We will notify you when project oficially starts! <br> Your data is kept safe in our SlothBase';
    formContainer.appendChild(newForm);
}


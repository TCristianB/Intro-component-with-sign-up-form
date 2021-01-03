const inputForm = document.querySelectorAll('.input-form')
const iconError = document.querySelectorAll('.icon-error')
const textError = document.querySelectorAll('.text-error')
const inputEmail = document.querySelector('.input-email')
const submitButton = document.getElementById('input-button')

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    for (let i = 0; i < inputForm.length; i++) {
        if(!inputForm[i].value) {
            iconError[i].classList.add('visible')
            textError[i].classList.add('visible')
        } else {
            iconError[i].classList.remove('visible')
            textError[i].classList.remove('visible')
        }
    }
})


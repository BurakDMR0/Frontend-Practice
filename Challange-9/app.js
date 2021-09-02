const btn = document.querySelector('.btn');
const email = document.querySelector('.input');
const errorLogo = document.querySelector('.error');
const errorMassage = document.querySelector('.error-massage');

btn.addEventListener('click', () => {
    if (email.classList.contains('wrong')) {
        email.classList.remove('wrong')
        console.log('wrong')
        errorLogo.classList.remove('active')
        errorMassage.classList.remove('active')
    } else {
        console.log('wrong')
        email.classList.add('wrong')
        errorLogo.classList.add('active')
        errorMassage.classList.add('active')
    }
})
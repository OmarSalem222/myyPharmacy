let btnSignUp = document.querySelector('.signUp');
let signUpForm = document.querySelector('.signUpForm');
let signUpFormClose = document.querySelector('.close');

btnSignUp.addEventListener('click', function(){
    signUpForm.style.display = 'block';
})

signUpFormClose.addEventListener('click', function(){
    signUpForm.style.display = 'none';
})

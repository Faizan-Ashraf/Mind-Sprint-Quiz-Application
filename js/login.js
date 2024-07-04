let eEmail = document.getElementById('eEmail');
let ePassword = document.getElementById('ePassword');


validate = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    eEmail.innerText = "";
    ePassword.innerText = "";

    if(email.length < 1) 
    {
        eEmail.innerText = "Email cannot be empty!";
        return false;
    }
    
    else if(password.length < 1) {
        ePassword.innerText = "Password cannot be empty!";
        return false;
    }
    
}

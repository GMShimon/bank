document.getElementById('login-submit').addEventListener('click', function(){
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //validation 
    if(userEmail == 'simon.rosedale99@gmail.com' && userPassword == 'AimN'){
        window.location.href = 'banking2.html';
    }
    else{
        alert('Your email or password is wrong');
        passwordField.value = '';
    }    
});


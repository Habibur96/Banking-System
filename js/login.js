
document.getElementById('login-submit').addEventListener('click', function () {

    const email = document.getElementById('login-email')
    const a = email.value;
    const password = document.getElementById('login-password')
    const b = password.value;

    // check email and password
    if (a == 'noyon@gmail.com' && b == "20100096") {
        window.location.href = 'banking.html';
    }
    else {
        console.log('Invalid');
    }

})
document.get






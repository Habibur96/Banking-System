
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

// handle deposit button event



// keyup
// document.getElementById('serect-info').addEventListener('keyup', function (event) {

//     const deleteField = document.getElementById('serect-info');
//     if (event.target.value == 'Delete' || event.target.value == 'delete') {
//         document.getElementById('click').removeAttribute('disabled');
//     }

//     else {
//         document.getElementById('click').setAttribute('disabled', true)
//     }
// });
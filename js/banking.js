

// handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function () {

    //get the amount deposited
    const a = document.getElementById('click-deposit')

    const c = a.value;
    const num2 = parseFloat(c);
    a.value = '';

    //update deposit total
    const b = document.getElementById('dolar');
    const e = b.innerText;
    const num1 = parseFloat(e);

    const d = num1 + num2;

    b.innerText = d;

    // update account balance

    const q = document.getElementById('balance');
    const z = q.innerText;
    const num3 = parseFloat(z);
    const f = num2 + num3;


    q.innerText = f;



})
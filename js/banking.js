

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

});

// handle withdraw event handler

document.getElementById('withdrow-button').addEventListener('click', function () {

    const withdrawInput = document.getElementById('Withdrow-input');
    const x = withdrawInput.value;

    const s = parseFloat(x);

    withdrawInput.value = '';

    const ty = document.getElementById("withdrow1");

    // update withdrow total

    const t = ty.innerText;
    const z = parseFloat(t);
    const u = s + z;
    ty.innerText = u;

    // update balance


    const o = document.getElementById('balance');
    const ff = o.innerText;
    const tt = parseFloat(ff);
    const finalBalance = tt - s;
    o.innerText = finalBalance;
})
















// handle deposit button event

function getInputValue(inputId) {
    //get the amount deposited
    const a = document.getElementById(inputId)

    const c = a.value;
    const num2 = parseFloat(c);
    // if (num2 >= 0) {
    a.value = '';
    return num2;
    // }

}

function updateTotalField(totalField, amount) {
    const b = document.getElementById(totalField);
    const e = b.innerText;
    const num1 = parseFloat(e);
    const d = num1 + amount;
    b.innerText = d;
}

function updateBalance(amount, isAdd, value) {
    const q = document.getElementById(amount);
    const z = q.innerText;
    const num3 = parseFloat(z);
    // const f = num2 + num3;
    // if (value > 0) {
    if (isAdd == true) {
        const f = value + num3;
        q.innerText = f;
    }

    else {
        const f = num3 - value;
        q.innerText = f;
    }
    // }
    // if (isAdd == true) {
    //     const f = value + num3;
    //     q.innerText = f;
    // }
    // else {
    //     const f = num3 - value;
    //     q.innerText = f;
    // }
    // q.innerText = f;
}

document.getElementById('deposit-button').addEventListener('click', function () {

    // //get the amount deposited
    // const a = document.getElementById('click-deposit')

    // const c = a.value;
    // const num2 = parseFloat(c);
    // a.value = '';
    // ======================================================
    //update deposit total
    // const b = document.getElementById('dolar');
    // const e = b.innerText;
    // const num1 = parseFloat(e);



    const num2 = getInputValue('click-deposit');
    if (num2 > 0) {
        updateTotalField('dolar', num2);
        updateBalance('balance', true, num2)
    }



    // const d = num1 + num2;



    // update account balance




    // const q = document.getElementById('balance');
    // const z = q.innerText;
    // const num3 = parseFloat(z);
    // const f = num2 + num3;
    // q.innerText = f;

});

// handle withdraw event handler

document.getElementById('withdrow-button').addEventListener('click', function () {


    const num2 = getInputValue('Withdrow-input');
    if (num2 > 0) {
        updateTotalField('withdrow1', num2);
        updateBalance('balance', false, num2)
    }

    // const withdrawInput = document.getElementById('Withdrow-input');
    // const x = withdrawInput.value;

    // const s = parseFloat(x);

    // withdrawInput.value = '';

    // const s = getInputValue('Withdrow-input');

    // const ty = document.getElementById("withdrow1");

    // // update withdrow total

    // const t = ty.innerText;
    // const z = parseFloat(t);
    // const u = s + z;
    // ty.innerText = u;

    // update balance


    // const q = document.getElementById('balance');
    // const z = q.innerText;
    // const num3 = parseFloat(z);
    // const f = num2 + num3;
    // q.innerText = f;

    // const o = document.getElementById('balance');
    // const ff = o.innerText;
    // const tt = parseFloat(ff);
    // const finalBalance = tt - num2;
    // o.innerText = finalBalance;
})














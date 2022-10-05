const inputForm = document.querySelector('.input-form');
const clearbtn = document.querySelector('.clear-btn');
const equalto = document.querySelector('.equalto');


function show(value) {
    inputForm.value += value;
}


// clear button functionality
clearbtn.addEventListener('click', function() {
    inputForm.value = ' ';
});


equalto.addEventListener('click', function() {
    try {
        // statements
        let x = inputForm.value;
        let result = eval(x);
        inputForm.value = result;
    } catch (e) {
        // statements
        alert('Wrong input, please check again!');
        console.log(e.message);
    }

});
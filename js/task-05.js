
let input = document.querySelector("#name-input");
let span = document.querySelector("#name-output");

input.oninput = function () {
    if (input.value === '') {
        span.textContent = 'Anonymous';
    } else{
        span.textContent = input.value;
    }
}

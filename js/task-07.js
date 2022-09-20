const input = document.querySelector('#font-size-control')
const span = document.querySelector("#text")

input.addEventListener("input", inputText)

function inputText(element) {
    span.style.fontSize = element.currentTarget.value + "px";
}
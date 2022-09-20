
const decrement = document.querySelector("[data-action=decrement]");
const incremen = document.querySelector("[data-action=increment]");

let counterValue = 0;
function dataAction() {
    document.querySelector('#value').textContent = counterValue;
};
const one = () => {
  counterValue += 1;
  dataAction()
};
const minusOne = () => {
  counterValue -= 1;
  dataAction()
};
incremen.addEventListener('click', one);
decrement.addEventListener('click', minusOne);

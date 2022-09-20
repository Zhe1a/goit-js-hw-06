
const inputColor = document.querySelector("#validation-input")
inputColor.addEventListener('blur', color)
function color () {
    if (this.dataset.length == this.value.length) { 
        this.classList.remove('invalid');
        this.classList.add('valid');
    } else {
        this.classList.remove('valid');
        this.classList.add('invalid');
    }
  };

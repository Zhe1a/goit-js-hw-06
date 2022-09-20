const button = document.querySelector(".change-color")
const span = document.querySelector(".color")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.addEventListener("click",() =>{
  let hexColor =  getRandomHexColor()
  document.body.style.backgroundColor = hexColor
  span.textContent = hexColor
})

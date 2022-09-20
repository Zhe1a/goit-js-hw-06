const form = document.querySelector(".login-form")
function loginForm(element) {
    element.preventDefault()
    const {
        elements: { email, password }
      } = element.currentTarget;
      if(email.value  === '' || password.value === '') {
       return alert('fill in all the fields below first')
      }
      const userDetails = { email: email.value, Password: password.value }
    
      console.log(userDetails)
      element.currentTarget.reset()
}
form.addEventListener('submit',loginForm)

const submit = document.querySelector("#submit");


submit.addEventListener("click", function (event) {
  event.preventDefault();
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");

  if(nameInput.value == ''){
    const messageError = document.createElement('p')
    messageError.textContent = 'Veuillez remplir les champs'
    messageError.classList.add('message-error')
    console.log(nameInput.parentElement);
    nameInput.parentElement.append(messageError)
  }

  if(emailInput.value == ''){
    const messageError = document.createElement('p')
    messageError

  }

});

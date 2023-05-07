const inputButtonForm = document.querySelector('.box-button')
console.log(inputButtonForm)

inputButtonForm.addEventListener('click', function (e) {
    e.preventDefault()
    const error = document.querySelector('#error')
    const inputNome = document.querySelector('#nome')
    const inputEmail = document.querySelector('#email')
    const inputSenha = document.querySelector('#senha')

    if(!inputNome.value || !isNaN(inputNome.value)){
        error.innerHTML += 'Por favor, digite um nome válido!' 
        return
    } else {
        error.innerHTML = ''
    } 

    if(!inputEmail.value || !isNaN(inputEmail.value)){
        error.innerHTML += 'Por favor, digite um email válido!' 
        return
    } else {
        error.innerHTML = ''
    }
    if(!inputSenha.value || !isNaN(inputSenha.value)){
        error.innerHTML += 'Por favor, digite uma senha válida!' 
        return
    } else {
        error.innerHTML = ''
    }

    inputNome.value = ''
    inputEmail.value = ''
    inputSenha.value = ''

    alert('Seu formulário foi enviado com sucesso!')
})


let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')
let btnEnviar = document.querySelector('#enviar')
let nomeOk = false
let emailOk = false
let msgOk = false

btnEnviar.disabled = true

nome.addEventListener('keyup', () => {
    if (nome.value.length < 3) {
       nome.style.borderColor = '#E03F3D'
       nomeOk = false
    } else if(nome.value == '' || nome.value == null) {
        nome.style.borderColor = '#E03F3D'
        nomeOk = false
    } else {
       nome.style.borderColor = 'green'
       nomeOk = true
    }
 })

email.addEventListener('keyup', () => {
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        email.style.borderColor = '#E03F3D'
        emailOk = false
    } else if(email.value == '' || email.value == null) {
        email.style.borderColor = '#E03F3D'
        emailOk = false
    } else {
        email.style.borderColor = 'green'
        emailOk = true
    }
})

mensagem.addEventListener('keyup', () => {
    if (mensagem.value.length < 10 || mensagem.value.length > 500) {
       mensagem.style.borderColor = '#E03F3D'
       msgOk = false
    } else if(mensagem.value == '' || mensagem.value == null) {
        mensagem.style.borderColor = '#E03F3D'
        msgOk = false
    } else {
       mensagem.style.borderColor = 'green'
       msgOk = true
    }

    if (nomeOk && emailOk && msgOk) {
        btnEnviar.disabled = false
    } else {
        btnEnviar.disabled = true
    }
 })

btnEnviar.addEventListener('click', () => {
    let carregamento = document.querySelector('#carregamento')
    carregamento.style.display = 'flex'
    let form = document.querySelector('form')
    form.style.display = 'none'
})
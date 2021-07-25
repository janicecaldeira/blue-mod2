let nome = document.querySelector('#name')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#message')
let btnEnviar = document.querySelector('#btn btn-big btn-primary')
let form = document.querySelector('contact-form')

nome.addEventListener('keyup', () => {
    if (nome.value.length < 3) {
       nome.style.inputColor = 'red'
    } else if(nome.value == '' || nome.value == null) {
        nome.style.fontColor = 'white'
    } else {
       nome.style.color = 'green'
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
    if (mensagem.value.length < 10 || mensagem.value.length > 150) {
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

form.addEventListener('submit', () => {
    let carregamento = document.querySelector('#carregamento')
    carregamento.style.display = 'flex'
    let form = document.querySelector('contact-form')
    form.style.display = 'none'
})
let nome = document.querySelector('name')
let email = document.querySelector('email')
let mensagem = document.querySelector('message')
let form = document.querySelector('form')

nome.addEventListener('keyup', () => {
    if (nome.value.length < 3) {
       nome.style.color = 'red'
    } else if(nome.value == '' || nome.value == null) {
        nome.style.color = 'white'
    } else {
       nome.style.color = 'green'
    }
 })

email.addEventListener('keyup', () => {
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        email.style.color = 'red'
    } else if(email.value == '' || email.value == null) {
        email.style.color = 'white'
    } else {
        email.style.color = 'green'
    }
})

mensagem.addEventListener('keyup', () => {
    if (mensagem.value.length < 10 || mensagem.value.length > 150) {
       mensagem.style.borderColor = 'red'
    } else if(mensagem.value == '' || mensagem.value == null) {
        mensagem.style.borderColor = 'white'
    } else {
       mensagem.style.borderColor = 'green'
    }
 })

form.addEventListener('submit', () => {
    let carregamento = document.querySelector('#carregamento')
    carregamento.style.display = 'flex'
    let form = document.querySelector('contact-form')
    form.style.display = 'none'
})
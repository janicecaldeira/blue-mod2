let inputNome = document.querySelector('#nome')
let inputEmail = document.querySelector('#email')
let textareaMensagem = document.querySelector('#mensagem')
let btnEnviar = document.querySelector('#enviar')
 
inputNome.addEventListener('keyup', () => { 
    if(inputNome.value.length > 2){
        inputNome.style.borderColor = 'green'
    }
    else if(inputNome.Value == '' || inputNome.Value == null){
        inputNome.style.borderColor = '#E03F3D'
    }
})

inputEmail.addEventListener('keyup', () => {
    if(inputEmail.value.indexOf('@') == -1 || inputEmail.value.indexOf('.') == -1){
        inputEmail.style.borderColor = 'red'
    }
    else {
        inputEmail.style.borderColor = 'green'
    }
    if(inputEmail.Value == '' || inputEmail.Value == null){
        inputNome.style.borderColor = '#E03F3D'
    }
})

textareaMensagem.addEventListener('keyup', ()=>{
    if(textareaMensagem.value.length >= 10){
        textareaMensagem.style.borderColor = 'green';
    }
    else if(textareaMensagem.Value == '' || textareaMensagem.Value == null){
        textareaMensagem.style.borderColor = '#E03F3D'
    }
})

btnEnviar.addEventListener('click', () => {
   alert('Formulário enviado com sucesso!')
})
const form = document.getElementById ('form')
const containerMensagemSucesso = document.querySelector('.success-message');

form.addEventListener('submit', function(e) {
    let formEValido = false
    
    e.preventDefault();

    
    const campoA = document.getElementById('numeroA').value
    const campoB = document.getElementById('numeroB').value;
    
    const mensagemSucesso = `Valido! O valor digitado no campo B : <b>${campoB}</b> é maior que o valor do Campo A: <b>${campoA}</b> !`
    
    

    if (Number(campoB) > Number(campoA)) {
               
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block'

        document.getElementById('numeroA').value = ''
        document.getElementById('numeroB').value = ''   
        document.querySelector('.erro-mensagem').style.display = 'none';

    } else {
        
        document.querySelector('.erro-mensagem').style.display = 'block';
        document.getElementById('numeroA').value = ''
        document.getElementById('numeroB').value = ''
        containerMensagemSucesso.style.display = 'none'

    }
  
})

document.getElementById('clearButton').addEventListener('click', function() {
document.getElementById('form').reset();

containerMensagemSucesso.style.display = 'none'
document.querySelector('.erro-mensagem').style.display = 'none';

})
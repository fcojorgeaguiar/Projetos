const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordconfirmation = document.getElementById('password-confirmation')


form.addEventListener('submit', (event)=>{
     event.preventDefault()
     checkform()
    
     
})
username.addEventListener("blur", ()=>{
    checkInputUsername()
})
email.addEventListener("blur", ()=>{
    checkInputEmail()
})

password.addEventListener("blur", ()=>{
    checkInputPassword()
})

passwordconfirmation.addEventListener("blur", ()=>{
    checkInputPasswordConfirmation()
})

function checkInputUsername(){
    const usernamevalue = username.value
    if(usernamevalue === ''){
       errorInput(username, "Preencha o nome de usuário!")
    } else{
        const formItem = username.parentElement
        formItem.className = "form-content"
    }
}

function checkInputEmail(){
    const emailValue = email.value
    if(emailValue === ''){
        errorInput(email, "Preencha com um email válido!")
    } else {
        const formItem = email.parentElement
        formItem.className = "form-content"
    }
}

function checkInputPassword(){
    const passwordValue = password.value
    if(passwordValue === ''){
        errorInput(password, "Crie uma senha!")
    } else if(passwordValue.length < 8){
       errorInput(password, "A senha deve ter no mínimo 8 caracteres!")
    } else{
         const formItem = password.parentElement
         formItem.className = "form-content"
    }
}
function checkInputPasswordConfirmation(){
    const passwordValue = password.value
    const confirmationPasswordValue = passwordconfirmation.value
    if (confirmationPasswordValue === ""){
        errorInput(passwordconfirmation, "Confirme seu email!")
    } else if(confirmationPasswordValue !== passwordValue){
        errorInput(passwordconfirmation, "As senhas não são iguais!")
    } else {
        const formItem = passwordconfirmation.parentElement
        formItem.className = "form-content"
    }
}

function checkform(){
    checkInputUsername()
    checkInputEmail()
    checkInputPassword()
    checkInputPasswordConfirmation()
    const formItem = form.querySelectorAll('.form-content-error')
    const isValue = [...formItem].every((item)=>{
        return item.className == "form-content"

    })

    if(isValue){
        alert("Cadastrado com sucesso!")
    }
    
}

function errorInput(input, message){
    const formItem = input.parentElement
    const textMessage = formItem.querySelector("p")
    textMessage.innerText = message
    formItem.className = 'form-content-error'
}
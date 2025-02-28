const form = document.getElementById('form')
const user = document.getElementById('username')
const senha = document.getElementById('password')
const mu = document.getElementById('m-u')
const ms = document.getElementById('m-s')

form.addEventListener('submit', (event)=>{
      event.preventDefault()
      logar()

})

user.addEventListener('blur', ()=>{
   document.getElementById('username').style.border = '2px solid rgba(255, 255, 255, .2)'
   mu.innerText = ''
})

senha.addEventListener('blur', ()=>{
   document.getElementById('password').style.border = '2px solid rgba(255, 255, 255, .2)'
   ms.innerText = ''
})

function logar(){
  const u = user.value
  const s = Number(senha.value)
  if(u == 'user@email.com' && s == 987654321){
    alert("BEM-VINDO!")
    document.querySelector('input').style.border = '2px solid rgba(255, 255, 255, .2)'
    const p = document.querySelector('p')
    p.innerText = ''
  } else{
    if(u==''){
      document.getElementById('username').style.border = '2px solid #ff0000'
      document.getElementById('m-u').style.color = '#ff0000'
      mu.innerText = 'Preencha o nome de usuário!'
    } else{
      
      if(u=='user@email.com'){
        document.getElementById('username').style.border = '2px solid rgba(255, 255, 255, .2)'
        mu.innerText = ''
      } else {
        document.getElementById('username').style.border = '2px solid #ff0000'
      document.getElementById('m-u').style.color = '#ff0000'
      mu.innerText = 'Usuário incorreto!'
      }
    }
    if (s == 0){
      document.getElementById('password').style.border = '2px solid #ff0000'
      document.getElementById('m-s').style.color ='#ff0000'
      ms.innerText = 'Preencha a senha!'
    } else{
      if(s==987654321){
         document.getElementById('password').style.border = '2px solid rgba(255, 255, 255, .2)'
         ms.innerText = ''
      } else {
        document.getElementById('password').style.border = '2px solid #ff0000'
      document.getElementById('m-s').style.color = '#ff0000'
      ms.innerText = 'Senha incorreta!'
      }
    }
  }
}
   

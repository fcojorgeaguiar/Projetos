let user = document.getElementById('user')
let senha = document.getElementById('password')


function logar(){
    const u = user.value
    const s = Number(senha.value)

    if (u =='' && s == 0){
        vermelho()
    } 
}

user.addEventListener('blur', ()=>{
    colorido()
    document.getElementById('user').style.border='2px solid rgb(255, 255, 255)'
})

senha.addEventListener('blur', ()=>{
    colorido()
    document.getElementById('password').style.border='2px solid rgb(255, 255, 255)'
})

function vermelho(){
     document.getElementById('i').style.border = '6px solid rgb(250, 8, 8)'
     document.getElementById('ii').style.border = '6px solid rgb(250, 8, 8)'
     document.getElementById('iii').style.border = '6px solid rgb(250, 8, 8)'
     document.getElementById('user').style.border='2px solid rgb(250, 8, 8)'
     document.getElementById('password').style.border='2px solid rgb(250, 8, 8)'
}

function colorido(){
    document.getElementById('i').style.border = '6px solid #00ff0a'
     document.getElementById('ii').style.border = '6px solid #00e1ff'
     document.getElementById('iii').style.border = '6px solid #fffd44'

}
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){
    let dateToday = new Date()
    let h = dateToday.getHours()
    let m = dateToday.getMinutes()
    let s = dateToday.getSeconds()
    
    if(h < 10){h = '0'+h}
    if(m < 10){m = '0'+m}
    if(s < 10){s = '0'+s}

    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s

    if (h <= 11){
        manha()
    } else if(h > 11 && h < 18){
        tarde()
    } else {
        noite()
    }
   
})

function manha(){
    document.body.style.background = 'linear-gradient(120deg, #027333, #04D939)'
}

function tarde(){
    document.body.style.background = 'linear-gradient(120deg, #ffe53bd8, #ff2525da)'
}

function noite(){
    document.body.style.background = 'linear-gradient(120deg, #024059, #026873)'
}
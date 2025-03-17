const timeEl = document.getElementById("time")
const MarksList = document.getElementById("marks-list")
const noite = document.getElementById('noturno')
const dia = document.getElementById('diurno')
let intervalId = 0
let timer = 0
let marks = []

const m = document.getElementById('modo')
m.addEventListener('click', ()=>{
    if (dia.checked){
    document.body.style.background = 'linear-gradient(180deg, #F2CB05, #F29F05)'
     document.getElementById('stopwatch').style.background = "#fff"
     document.getElementById('time').style.background = '#fff'
     document.getElementById('modo').style.background = '#fff'
     document.getElementById('modo').style.color = '#000'
     document.getElementById('time').style.color = '#000'
     document.getElementById('time').style.border = '3px solid #f2cb05'
     document.getElementById('reset').style.background = '#f2cb05'
     document.getElementById('power').style.background = '#f2cb05'
     document.getElementById('mark').style.background = '#f2cb05'
     document.getElementById('marks-list').style.color = '#000'
    } else if(noite.checked){
        document.body.style.background = 'linear-gradient(180deg, #323050,  #45214A)'
         document.getElementById('stopwatch').style.background = "#262626"
         document.getElementById('time').style.background = '#262626'
         document.getElementById('modo').style.background = '#262626'
         document.getElementById('modo').style.color = '#fff'
         document.getElementById('time').style.color = '#fff'
         document.getElementById('time').style.border = '3px solid #9f6bff'
         document.getElementById('reset').style.background = '#e0e7ff'
         document.getElementById('power').style.background = '#e0e7ff'
         document.getElementById('mark').style.background = '#e0e7ff'
         document.getElementById('marks-list').style.color = '#fff'
    }
})

const formatTime = (time) =>{
    const hours = Math.floor( time / 360000)
    const minutes = Math.floor((time % 360000) / 6000)
    const seconds = Math.floor((time % 360000) / 100)
    const hundredths = time % 100
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundredths.toString().padStart(2, '0')}`
}

const addMarkList = (markIndex, markTime) =>{
  MarksList.innerHTML = `<p>Marca ${markIndex}: ${formatTime(markTime)}</p>`
}

const markTime = ()=>{
    marks.push(timer)
    addMarkList(marks.length, timer)
}

const toggleTime = () =>{
    const button = document.getElementById("power")
    const action = button.getAttribute("action")
    clearInterval(intervalId)

    if (action == 'start' || action == "continue"){
        intervalId = setInterval(() => {
            timer += 1
            setTimer(timer)
        }, 10);
        button.setAttribute('action', 'pause')
        button.innerHTML = '<i class="fa-solid fa-pause"></i>'
    } else if(action == 'pause'){
        button.setAttribute('action', 'continue')
        button.innerHTML = '<i class="fa-solid fa-play"></i>'
    }
}

const resetTime = ()=>{
    clearInterval(intervalId)
    timer = 0
    marks = []
    setTimer(timer)
    MarksList.innerHTML = ''
    const button = document.getElementById("power")
    button.setAttribute('action', 'start')
    button.innerHTML = '<i class="fa-solid fa-play"></i>'

}

const setTimer = (time)=>{
    timeEl.innerText = formatTime(timer)
}

document.getElementById('power').addEventListener('click', toggleTime)
document.getElementById('mark').addEventListener('click', markTime)
document.getElementById('reset').addEventListener('click', resetTime)
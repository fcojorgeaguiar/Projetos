const sem = document.getElementById('semana')
const dia = document.getElementById('dia')
const data = document.getElementById('data')
const assunto1 = document.getElementById('a1')
const assunto2 = document.getElementById('a2')
const assunto3 = document.getElementById('a3')
const corpo = document.body;

dia.style.display = 'none'
assunto3.style.display = 'none'

const calendario = setInterval(function time(){
    const dataToday = new Date()
    const s = dataToday.getDay()
     switch(s){
        case 0:
            sem.innerHTML = 'Domingo'
            assunto1.innerText = 'Interpretação de textos.'
            assunto2.innerText = 'Conjuntos; problemas aritiméticos.'
            corpo.style.backgroundColor = '#4C5958'
            break
        case 1:
            sem.innerHTML = "Segunda-Feira"
            assunto1.innerText = 'Ortografia; divisão silábica; acentuação gráfica.'
            assunto2.innerText = 'Sistemas'
            corpo.style.backgroundColor ='#10403B'
            break
        case 2:
            sem.innerHTML = 'Terça-Feira'
            assunto1.innerText = 'Substantivos; numerais; artigos; interjeições.'
            assunto2.innerText = 'Funções; equações.'
            corpo.style.backgroundColor = '#0CF25D'
            break
        case 3:
            sem.innerHTML = 'Quarta-Feira'
            assunto1.innerText = 'Adjetivo.'
            assunto2.innerText = 'Trigonometria; geometria plana.'
            corpo.style.backgroundColor = '#2A8C82'
            break
        case 4: 
            sem.innerHTML = 'Quinta-Feira'
            assunto1.innerText = 'Pronomes'
            assunto2.innerText = 'Geometria espacial'
            corpo.style.backgroundColor = '#A62B1F'
            break
        case 5: 
            sem.innerHTML = 'Sexta-Feira'
            assunto1.innerText = 'Verbos.'
            assunto2.innerText = 'Probabilidade; análise combinatória; estatística'
            corpo.style.backgroundColor = '#214001'
            break
        case 6:
            sem.innerHTML = 'Sábado'
            assunto1.innerText = 'Sintaxe; pontuação; advérbio; preposições. '
            assunto2.innerText = 'Raciocínio Lógico'
            corpo.style.backgroundColor = '#161F30'
     }
})

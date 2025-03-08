const sem = document.getElementById('semana')
const dia = document.getElementById('dia')
const data = document.getElementById('data')
const assunto1 = document.getElementById('a1')
const assunto2 = document.getElementById('a2')
const assunto3 = document.getElementById('a3')
const d1 = document.getElementById('d1')
const d2 = document.getElementById('d2')
const d3 = document.getElementById('d3')
const d4 = document.getElementById('d4')
const d5 = document.getElementById('d5')
const d6 = document.getElementById('d6')
const d7 = document.getElementById('d7')
const d8 = document.getElementById('d8')
const d9 = document.getElementById('d9')
const d10 = document.getElementById('d10')
const d11 = document.getElementById('d11')
const d12 = document.getElementById('d12')
const d13 = document.getElementById('d13')
const d14 = document.getElementById('d14')
const d15 = document.getElementById('d15')

const ciclo = []
ciclo[0] = d2
assunto3.innerText = ciclo[0]


const calendario = setInterval(function time(){
    const dataToday = new Date()
    const s = dataToday.getDay()
     switch(s){
        case 0:
            sem.innerHTML = 'Domingo'
            assunto1.innerText = 'Noções de Direito Constitucional: Dos Princípios Fundamentais (Art. 1º ao 4º, CF); Dos Direitos e Garantias Fundamentais (Art. 5º ao 11);'
            assunto2.innerText = 'Noções básicas de relações humanas. Motivação. Comunicação. Comunicação interpessoal. Noções de recebimento e transmissão de informações.'
            break
        case 1:
            sem.innerHTML = "Segunda-Feira"
            assunto1.innerText = 'Noções de Direito Administrativo: Estado, Governo e Administração Pública: conceitos, elementos, poderes, natureza, fins e princípios; Direito Administrativo: conceito, fontes e princípios. Divisão administrativa. Órgãos e entidades públicas.'
            assunto2.innerText = 'Fundamentos básicos de administração: conceitos, características e finalidade. Funções administrativas. Técnicas administrativas e organizacionais.'
            break
        case 2:
            sem.innerHTML = 'Terça-Feira'
            assunto1.innerText = 'Ato Administrativo: conceito, requisitos, atributos, classificação e espécies. Invalidação, anulação e revogação. '
            assunto2.innerText = 'Poderes administrativos: poder vinculado; poder discricionário; poder hierárquico; poder disciplinar; poder regulamentar; poder de polícia; uso e abuso do poder. Redação oficial  ofícios, comunicações internas, cartas, requerimentos, protocolo, expedição e distribuição de correspondência.'
            break
        case 3:
            sem.innerHTML = 'Quarta-Feira'
            assunto1.innerText = 'Licitações e contratos. Lei 14.133/21.'
            assunto2.innerText = 'Noções básicas de atendimento ao público. Atendimento ao público, qualidade no atendimento.'
            break
        case 4: 
            sem.innerHTML = 'Quinta-Feira'
            assunto1.innerText = 'Serviços públicos: conceito e princípios.'
            assunto2.innerText = 'Racionalização do trabalho. Higiene e segurança do trabalho: conceito, importância, condições do trabalho.'
            break
        case 5: 
            sem.innerHTML = 'Sexta-Feira'
            assunto1.innerText = 'Servidores (arts. 39-41, CF).'
            assunto2.innerText = 'Etiqueta no trabalho, qualidade de vida no trabalho.'
            break
        case 6:
            sem.innerHTML = 'Sábado'
            assunto1.innerText = 'Improbidade administrativa, processo administrativo.'
            assunto2.innerText = 'Controle de materiais, organização de arquivos. Rotinas administrativas: técnicas de arquivo e protocolo.'
     }
})

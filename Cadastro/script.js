let nome = document.getElementById('nome')
let idade = document.getElementById('idade')
let m = document.getElementById('masc')
let f = document.getElementById('fem')
let resultado = document.querySelector('div#resultado')
let imagem = document.createElement('img')
imagem = document.setAttribute('id', 'perfil')


function finalizar(){ 
    let i = Number(idade.value)
    let n = nome.value
    let s = ''
   if (n == '' || i == 0){
      window.alert('Preencha os dados antes de continuar')
   } else {
    resultado.style.background = "#ffffff"
    resultado.innerHTML="<h2>Seu perfil</h2>"
    if(m.checked){
       s = m.value
       imagem.setAttribute('src','Imagens/masculino.png')
    } else {
       s = f.value
       imagem.setAttribute('src', 'Imagens/feminino.png')
    }
    resultado.appendChild(imagem)
    resultado.innerHTML +=`<p><strong>Nome:</strong> ${n}</p>`
    resultado.innerHTML +=`<p><strong>Idade:</strong> ${i}</p>`
    resultado.innerHTML +=`<p><strong>Sexo:</strong> ${s}`
   }


}
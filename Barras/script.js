let trilho = document.querySelector(".trilho");
let body = document.querySelector("body");
let skills = document.querySelector (".skills");




trilho.addEventListener('click', ()=>{
    trilho.classList.toggle("dark");
    body.classList.toggle("dark");
    skills.classList.toggle("dark");
})
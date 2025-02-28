let car ={
    rodas: 4,
    portas: 4
}
car['cor'] = "vermelho"
console.log(car)


let propriedade = 'cor'
car[propriedade] = 'azul'


console.log(`Agora a cor do carro é ${car[propriedade]}`)
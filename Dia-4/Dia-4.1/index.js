// Requisição de informações
let nome = (prompt("Qual o seu nome?"))
let idade = (prompt("qual a sua idade?"))
let cnh = (prompt("possui cnh?"))
let carro = (prompt("Possui carro próprio?"))

//resultados

if (idade < 18 || cnh != "sim") {
    console.log( nome + ", tu não pode dirigir, maluco. Desce do carro!")
}
if (idade >= 18 && cnh == "sim" && carro != "sim") {
    console.log( nome + ", tu até poderia dirigir, mas é muito liso")
}
if (idade >= 18 && cnh == "sim" && carro == "sim") {
    console.log( nome + ", pode voar na nave, Bruxão!")
}



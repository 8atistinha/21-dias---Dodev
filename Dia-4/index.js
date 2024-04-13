// Variaveis

let fome = (prompt("O senhor gostaria de aloçar agora?"))
let dinheiro = (prompt("Mas o senhor tem dinheiro mesmo???"))
let restAberto = (prompt("Pode vir quando estivermos com atendimento presencial?"))

if (fome == "nao" || dinheiro == "nao") {
    console.log("Pode ir comer em casa, vagabundo!")
} else  {
    
}
if (fome == "sim" && dinheiro == "sim" && restAberto == "sim") {
    console.log("Hoje vai almoçar fora!")
} else {
    
}
if (fome == "sim" && dinheiro == "sim" && restAberto == "nao") {
    console.log("Vai ter que pedir quentinha mesmo")
} else {
    
}
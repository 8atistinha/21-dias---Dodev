// Variaveis
let n1 = Number(prompt("Escolha um numero") )
let n2 = Number(prompt("Escolha mais um numero") )
let op = Number(prompt("escolha uma operação matemática:" + "\n1 = + \n2 = - \n3 = * \n4 = /"))

switch (op) {
    case 1:
        console.log(n1 + " + " + n2 + " = " + (n1+n2)) 
        break;
    case 2:
        console.log(n1 + " - " + n2 + " = " + (n1-n2))
        break;
    case 3:
        console.log(n1 + " * " + n2 + " = " + (n1*n2))
        break;
    case 4:
        console.log(n1 + " / " + n2 + " = " + (n1/n2))
        break;
    default:
        console.log("Escolha uma operação válida")
        break;
}


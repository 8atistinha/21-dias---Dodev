// Requisicao de informaçoes
let num1 = Number(prompt("escolha um numero"))
let num2 = Number(prompt("Escolha outro numero"))
let operation = prompt("Qual operação matematica gostaria de aplicar?")

switch(operation){
    case "soma":
        console.log("A soma dos numeros é: " + num1 + " + " + num2 + " = " + (num1 + num2))
        break;

    case "subtracao":
        console.log("A subtracao dos numeros é: " + num1 + " - " + num2 + " = " + (num1 - num2))
        break;

    case "multiplicacao":
        console.log("A multiplicacao dos numeros é: " + num1 + " * " + num2 + " = " + (num1 * num2))
        break;

    case "divisao":
        console.log("A divisao dos numeros é: " + num1 + " / " + num2 + " = " + (num1 / num2))

    default:
        console.log("opcao inválida")
        break;
}
let nomeDoUsuario = prompt("Insira seu nome");
console.log(nomeDoUsuario);
let idadeDoUsuario = prompt("Insira sua idade");
console.log(idadeDoUsuario);
let pesoDoUsuario = prompt("Insira seu peso");
console.log(pesoDoUsuario);
let alturaDoUsuario = prompt("Insira sua altura (em centimetros)");
console.log(alturaDoUsuario);

let idadeDoUsuarioNum = Number(idadeDoUsuario);
let anoDeNacimento = (2023 - idadeDoUsuarioNum);
let pesoDoUsuarioNum = Number(pesoDoUsuario);
let alturaDoUsuarioNum = Number(alturaDoUsuario / 100);
let iMC = (pesoDoUsuarioNum / (alturaDoUsuarioNum * alturaDoUsuarioNum));
let iMCParse = parseInt(iMC)

console.log("olá " + nomeDoUsuario + ", você tem " + idadeDoUsuario + "anos, nasceu em "
 + anoDeNacimento + ", tem " + alturaDoUsuarioNum + " de altura, pesa " + pesoDoUsuarioNum +
  "kg e seu IMC é " + iMCParse + "Kg/m2");
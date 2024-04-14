// Coletando Variaveis 

let fome = prompt("esta com fome? (S/N)")


if (fome == "n") {
    console.log("Tudo bem, fica para outro dia")
} else {
let dinheiro = prompt("tens dinheiro? (S/N)")
    if (dinheiro == "n")
    console.log("Tudo bem, fica para outro dia")
    else {
    let rest = prompt("Pode vir até aqui? (S/N)")
        if (rest == "s")
        console.log("estaremos esperando por voce!")
        else {
        console.log("Gostaria de uma quentinha?")
        }
    }    
}



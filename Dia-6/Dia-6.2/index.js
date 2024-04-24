// Tabuada + duas tabuadas seguintes

let Tabuada = Number(parseInt(prompt("escolha um numero inicial para ver as tabuadas")))

for (let contador2 = Tabuada; contador2 < Tabuada+3; contador2++) {
    console.log("tabuada do " + contador2)
    for (let contador = 0; contador <= 10; contador++) {
        console.log(contador2 + " * " + contador + " = " + (contador2*contador))
        
    }
}


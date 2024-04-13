let num1 = Number(prompt("informe a tabuada que deseja ver"))
for (let num2 = num1; num2 <= num1 + 2; num2++) {
    console.log("tabuada do numero: " + num2)
    for (let num3 = 0; num3 <= 10; num3++) {
    console.log(num2 + " * " + num3 + " = " + (num2*num3))
    }
}
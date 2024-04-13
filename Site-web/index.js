let numero = parseInt(prompt("Digite um número: "));

document.write(`<pre>`);
document.write(`Número ${numero}:\t\tNúmero ${numero + 1}:\t\tNúmero ${numero + 2}:\n`);

for (let i = 1; i <= 10; i++) {
    document.write(`${numero} x ${i} = ${numero * i}\t\t`);
    document.write(`${numero + 1} x ${i} = ${(numero + 1) * i}\t\t`);
    document.write(`${numero + 2} x ${i} = ${(numero + 2) * i}\n`);
}

document.write(`</pre>`);

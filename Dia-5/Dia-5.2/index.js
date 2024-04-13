// Opcoes do cliente

let nome = prompt("Qual o seu nome?")
let abast = prompt("Deseja abastecer?")

if(abast == "sim"){
        tipo = prompt("gostaria de abastecer com gasolina ou etanol?")

        switch (tipo) {
            case "gasolina":
                valor = Number (prompt(nome + ", quantos reais você gostaria de abastecer?"))
                    
                console.log(nome + ", foi abastecido " + ((valor/5).toFixed(2)) + " litros")
                 break;
            case "etanol":
                valor = Number (prompt(nome + ", quantos reais você gostaria de abastecer?"))
                console.log(nome + ", foi abastecido " + ((valor/3).toFixed(2)) + " litros")
        
            default:
                break;
        }
} else {}

let calib = prompt("Tambem gostaria de calibrar os pneus?")

        switch (calib) {
            case "sim":
                console.log("pneus calibrados com sucesso! Volte sempre senhor")
                break;
            case "nao":
                console.log("Tudo bem " + nome + ", volte sempre!")    
                break;
        
            default:
                break;
        }
    


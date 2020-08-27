/*
Crie uma função com as seguintes características:
- A função deve receber 3 parâmetros.
- Se somente um argumento for passado, retorne o valor do argumento.
- Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
- Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado 
  dividido pelo terceiro.
- Se nenhum argumento for passado, retorne "não recebeu parâmetro"
*/

/* primeira tentativa!!! 
readline = require("readline-sync")
const numA = parseInt(readline.question("Digite um numero: "))
const numB = parseInt(readline.question("Digite um numero: "))
const numC = parseInt(readline.question("Digite um numero: "))

function numeros(numA, numB, numC){
    if (numA >= 1 && numB == "" && numC == "")
        return numA;
   else if (numA >= 1 && numB >= 1 && numC =="")
        return (numA + numB);
    
    else if (numA >= 1 && numB >= 1 && numC >= 1)
        return ((numA + numB) / numC);

    //else (numA >= "" && numB >= "" && numC >= "")
       // return "";
    else 
    console.log("não recebeu parâmetro")
}

console.log(numA)
console.log(numA + numB)
console.log((numA + numB) / numC)
console.log("não recebeu parâmetro")
*/

// segunda tentiva!!!!! Dica da prof.

const readline = require(`readline-sync`)

const par1 = parseInt(readline.question("Digite um numero: "))
const par2 = parseInt(readline.question("Digite um numero: "))
const par3 = parseInt(readline.question("Digite um numero: "))

function calculo(par1, par2, par3) {
 
    if (par1 && !par2 && !par3) {       // ! negação é usado para ver se a variável está vazia
        console.log("A função recebeu somente um parâmetro: " + par1)

    } else if (!par1 && par2 && !par3) {
        console.log("A função recebeu somente um parâmetro: " + par2)

    } else if (!par1 && !par2 && par3) {
        console.log("A função recebeu somente um parâmetro: " + par3)

    } else if (par1 && par2 && !par3) {
        console.log(`A função recebeu o primeiro e segundo parâmentos, a soma deles é ${par1 + par2}`)

    } else if (!par1 && par2 && par3) {
        console.log(`A função recebeu o segundo e terceiro parâmetros, a soma deles é ${par2 + par3}`)

    } else if (par1 && !par2 && par3) {
        console.log(`A função recebeou o primeiro e terceiro parâmentros, a soma deles é ${par1 + par3}`)
        
    } else if (par1 && par2 && par3) {
        console.log(`A função recebeu todos os parâmentros, o resultado é ${(par1 + par2) / par3 }`)

    } else {
        console.log("Não recebeu parâmentro")
    }
}

calculo(par1, par2, par3)









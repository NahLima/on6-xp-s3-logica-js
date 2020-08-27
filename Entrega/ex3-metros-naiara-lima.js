//Faça um programa que receba um valor em metros e e chame uma função que converta em milímetros.

// *1000 (calculo)


const readline = require("readline-sync")
const metros = parseInt(readline.question("Digite quantos metros você precisa converter: "))

function milimetros(metros) {
  return(metros * 1000)
}
console.log(`A conversão é:  ${milimetros(metros)}` + `mm`)


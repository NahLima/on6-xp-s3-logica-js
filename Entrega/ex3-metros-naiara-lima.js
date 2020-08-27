//Faça um programa que receba um valor em metros e e chame uma função que converta em milímetros.

// *1000 (calculo)


const readline = require("readline-sync")
const metros = parseInt(readline.question("Digite quantos metros você precisa converter: "))

function milimetros(metros) {
  return(metros * 1000)
}
console.log(`A conversão é:  ${milimetros(metros)}` + `mm`)

console.log("___________________________________op2_____________________________")

const query = require(`synchronous-user-input`);// funciona igual ao readline-sync
const metro = parseFloat(query("Digite quantos metros quer converter: "))

function convert(){
  console.log(`${metro} metros convertidos em milimitros fica: `);
  return(metro*1000).toLocaleString(`pt-BR`)
}
console.log(convert())

console.log("___________________________________op3_____________________________")

function converte(){
  let metro = 5;
  return metro * 1000
}
console.log(converte())

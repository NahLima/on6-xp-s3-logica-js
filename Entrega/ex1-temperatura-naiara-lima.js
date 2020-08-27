/*1. Crie uma função que receba uma temperatura em Celsius 
e chame uma função que converta para Fahrenheit. F = *9C/5 + 32

Celcius to Fahrenheit
*9/5+32 (calculo)
*/


const readline = require("readline-sync")
const celsius = parseInt(readline.question("Digite a temperatura em celsius: "))

function farenheit(celsius) {
  return(celsius * 9/5) + 32
}
console.log("A temperatura em farenheit é: " + farenheit(celsius))


/* Agora faça o contrário, uma função que receba uma
temperatura em Fahrenheit e chame uma função que converta para Celsius.
*/

//  Fahrenheit to Celcius
// F - 32 * 5/9  (calculo)



const readline = require("readline-sync")
const farenheit = parseInt(readline.question("Digite a temperatura em farenheit: "))

function celsius(farenheit) {
  return(farenheit - 32) * 5/9
}
console.log("A temperatura em celsius é: " + celsius(farenheit).toFixed(2))

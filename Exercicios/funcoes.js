// Crie uma função para verificar se um valor é Truthy

isTruth = (data) => !!data;

console.log(isTruth('teste'));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

perimeter = (side) => side * 4;

console.log(perimeter(5));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

myName = (name, secondName) => `${name} ${secondName}`;

console.log(myName('Vitor', 'Matias'));

// Crie uma função que verifica se um número é par

isEven = (number) => (number % 2 === 0 ? 'O número é par' : 'O número é ímpar');

console.log(isEven(6));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

whatType = (data2) => typeof data2;

console.log(whatType(''));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));

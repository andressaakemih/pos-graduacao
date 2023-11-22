/*
Escreva um algoritmo para ler o salário mensal atual de um funcionário 
e o percentual de reajuste. Calcular e escrever o valor do novo salário.
*/

// Minha solução
var salario = 3865;
var reajuste = salario * 0.12;

salarioAtualizado = salario + reajuste;

console.log(salarioAtualizado);

// Solução do professor
var salario = 3865;
var percentual = 12;
var aumento = 0;
var salarioReajustado = 0;

aumento = salario * percentual/100;
salarioReajustado = salario + aumento;

console.log("O salário reajustado é: " + salarioReajustado);
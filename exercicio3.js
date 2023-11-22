/*
O custo de um carro novo ao consumidor é a soma do custo de fábrica com a 
porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).
Supondo que percentual do distribuidor seja de 28% e os impostos de 45%, 
escrever um algoritmo para ler o custo de fábrica de um carro, calcular e
escrever o custo final ao consumidaor.
*/

var custoFabrica = 40000;
var distribuidor;
var impostos;
var custoFinal;

distribuidor = custoFabrica * 28/100;
impostos = custoFabrica * 45/100;

custoFinal = custoFabrica + impostos + distribuidor;

console.log("O custo final do carro ao consumidor é: R$" + custoFinal)
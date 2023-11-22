/*
Faça um algoritmo que efetue o cálculo da quantidade de litros de combustível gastos em uma
viagem, sabendo-se que o carro faz 12km com um litro. Deverão ser fornecidos o tempo gasto 
na viagem e a velocidade média.

Utilizar as seguintes fórmulas:
distancia = tempó * velocidade
litros usados = distancia/12;

O algoritmo deverá apresentar os valores da velocidade média, tempo gasto na viagem,
distância percorrida e a quantidade de litros utilizados na viagem.
*/

var tempo = 5;
var velocidade = 120;
distancia = tempo * velocidade;
var litrosUsados = distancia/12;

console.log("A velocidade média foi: " + velocidade + "Km/h");
console.log("O tempo gasto na viagem foi: " + tempo + " Horas");
console.log("A distância percorrida foi: " + distancia + "Km");
console.log("O consumo de combustível foi: " + litrosUsados + " litros");
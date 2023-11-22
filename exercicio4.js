/*
Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média 
final deste aluno. Considerar que a média é ponderada e que o peso das notas é 
2, 3 e 5. Fórmula para o cálculo da médial final é:
medid final = n1 * 2 + n2 * 3 + n3 * 5/10; 
*/

var nota1 = 10;
var nota2 = 8;
var nota3 = 6;

media = (nota1*2 + nota2*3 + nota3*5)/10;

console.log("A média ponderada é " + media);
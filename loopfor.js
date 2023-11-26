// for
var a = [10,20,30,40,50,60];

a.forEach(valor => console.log(valor));

var tot = 0;
a.forEach(valor => {
    tot += valor;
})

console.log(tot);

a.forEach(function(valor, indice, array){
    console.log(array[indice]) 
});


// for in
var carro = [{modelo: 'Nivus', marca: 'Volkswagen', ano: 2023},
            {modelo: 'Compass', marca: 'Jeep', ano: 2023},
            {modelo: 'T-Cross', marca: 'Volkswagen', ano: 2023}]

for (let caracteristica in carro) {
    console.log(carro[caracteristica]);
}

// for of
for (let c of carro) {
    console.log(c.ano);
}
//Algoritmo 5
//Some os valores das listas a = [1, 2, 3, 4, 5], b = [6, 7, 8, 9, 10].
a = [1, 2, 3, 4, 5];
b = [6, 7, 8, 9, 10];

let resultado = a.reduce((acumulador, item)=>{
    return acumulador + item;
}, b.reduce((acumulador, item)=> acumulador + item));

console.log(resultado);



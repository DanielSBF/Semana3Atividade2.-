//Algoritimo 2
//Esse algoritimo verifica quantas letras iguais existe em um array e retorna essa quantidade em um objeto com a chave sendo a propria letra e o valor sendo o total de vezes que ela aparece no array.

const letras = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
];//Instancia um array com subarrays de "letras"

let resultado = letras.flat().reduce((objeto, numero) => {//O método flat concatena os subarrays e retorna um único array de letras. O método reduce itera esse retorno, recebe um callback que irá retorna um objeto com o total de cada letra do array.
if (objeto[numero]) {//verifica se existe a letra no array.
    objeto[numero] += 1;//se existir soma o valor da chave em 1
} else {
    objeto[numero] = 1;//se não, recebe, pois aparece uma única vez
}
return objeto;//retorna o objeto
}, {});//inicializa o acumulador com um objeto vazio
   


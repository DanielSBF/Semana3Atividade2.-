//Algoritimo 1
//Esse algoritimo retornará a fibonnaci de um número, utilizando métodos map e reduce para fazer o calculo.

const tamanho = prompt('Digite o tamanho da lista de números'); //Comando de entrada para o usuário digitar o tamanho da lista
const lista = new Array(tamanho).fill(null); //instancia um array com o tamnho dado pelo usuario e preenche cada posição do array com null, note que tamanho é uma string, recomendo passar ela para Float ou INT, para evitar possivéis erros.
lista
 .map(function (item, index) { // método map para iterar o array lista, recebe uma callback que retorna o indice da lista somado mais um, isso vai gerar um novo array com elementos de 1 a N(tamanho).
   return index + 1; //retorna o indice do array somado mais um
 })
 .reduce(function (acumulador, item) { //método reduce para iterar o array lista, e recebe um callback que retorna a multiplicação de dois parâmetros.
   return acumulador * item; //retorna o parâmetro acumulador multiplicado pelo item
 });

new Array(tamanho)//Instancia um novo array de tamanho dado pelo prompt do usuario, note que esse array não é salvo em nenhuma variável, logo ele perderá a referência.
 .fill(null)//preenche todas as posições do array com Null
 .map((item, index) => index + 1)//método map itera o array, recebe um callback que retorna o index somado em 1, 
 .reduce((acumulador, item) => acumulador + item);//método reduce itera o array, recebe um callback que retorna o acumulador somado com o item(elemento do array)

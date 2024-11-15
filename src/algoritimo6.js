//Algoritmo 6: Construa uma string que representa uma estrutura em HTML que seja capaz de listar de forma 
//ordenada os itens = ["Guarabira", "Belém", "Sapé"].

let itens = ["Guarabira", "Belém", "Sapé"];

itens.sort();

let htmlString = "<ol>";
for (let i = 0; i < itens.length; i++) {
    htmlString += "\n<li>" + itens[i] + "</li>";
}; 
htmlString += "\n</ol>";
console.log(htmlString);
console.log(typeof(htmlString));

//Algoritmo 3
//Esse algoritimo calcula as médias dos estudantes e verifica as médias acima de 90 pontos.

const estudantes = [
 { nome: 'Alice', notas: [100, 60, 92] },
 { nome: 'João', notas: [75, 30, 85] },
 { nome: 'Charles', notas: [90, 95, 85] },
 { nome: 'Paulo', notas: [100, 100, 100] },
];//Instancia um array de objetos, contendo o nome do estudante e as notas do mesmo.


const estudantesMedias = estudantes.map((estudante) => {//método map itera o array de objetos, recebe um callback e retorna um novo array de objetos com as médias calculadas dos estudantes.
 const total = estudante.notas.reduce((soma, nota) => soma + nota);//acessa as notas de cada estudante (estudante.notas) e utiliza o método reduce para calcular a média das notas, e salva na variável total.
 let {nome} = estudante;//desestrutura o objeto estudante para ter acesso direto a chave nome.
 return { nome, media: total / estudante.notas.length };//retorna objeto com o nome e a média calculada de cada estudante
});//esse novo array de objetos fica salvo em "estudantesMedias"

const melhoresMedias = estudantesMedias.filter(//método filter no array estudantesMedias, recebe um callback para filtrar as médias acima de 90.
 (student) => student.media > 90,//retorna os estudantes com médias acima de 90
);



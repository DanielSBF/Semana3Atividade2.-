//Algoritimo 4
//Esse algoritimo verifica a média salarial de cada funcionario por departamento, e retorna os maiores pagamentos por departamento

const funcionarios = [
    { nome: 'João', salario: 30000, departamento: 'TI' },
    { nome: 'Janete', salario: 70000, departamento: 'RH' },
    { nome: 'Sofia', salario: 100000, departamento: 'RH' },
   ];//Instancia um array de objetos de funcionarios.

const funcionariosPorDepartamento = funcionarios.reduce(//Método reduce no array de objetos funcionarios, recebe um callback que irá colocar os funcionarios em seus departamentos.
(acumulador, funcionario) => {
    const departamento = funcionario.departamento;//acessa o departamento do funcinario e salva na variavel departamento
    if (!acumulador[departamento]) {//se não existir departamento
    acumulador[departamento] = [];//inicializa um array no departamento
    }
    acumulador[departamento].push(funcionario);//adiciona o funcionario no departamento
    return acumulador;// retorna o objeto
},
{},
);
console.log(funcionariosPorDepartamento);

const mediasSalarioPorDepartamento = Object.keys(//esse método transforma as chaves de um objeto em um array de chaves
funcionariosPorDepartamento,//passa o array como parametro
).map((departamento) => {//método map para iterar o array, recebe um callback que retorna as medias do salario por departamento
const total = funcionariosPorDepartamento[departamento].reduce(//método reduce para callcular a soma de salario dos funcionarios e salva na variavel total.
    (acumulador, funcionario) => acumulador + funcionario.salario, //soma os salarios dos funcionarios
    0,
);
return {
    departamento: departamento,// salva departamento na chave departamento
    media: total / funcionariosPorDepartamento[departamento].length,//salva a media dos funcionarios na chave total
};//retorna um objeto com duas chaves, departamento e a media salarial dos funcionarios
});


const maioresPagamentos = mediasSalarioPorDepartamento.filter(//método filter itera no array, recebe um callback que filtra os pagamentos acima de 65000
(departamento) => departamento.media > 65000,//verifica o pagamento de salario por departamento
);


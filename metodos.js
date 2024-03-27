
// Este código cria uma matriz chamada `redesSociais` que contém três strings representando nomes de redes sociais: "facebook", "instagram" e "twitter". Em seguida, ele usa um loop `for` para iterar sobre cada elemento da matriz e exibir uma mensagem no console para cada rede social, indicando que o usuário tem um perfil nessa rede social. A mensagem exibida inclui o nome da rede social atual, que é acessado usando a variável `i` como índice para acessar cada elemento da matriz durante a iteração.

const redesSociais = ["facebook", "instagram", "twitter"];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);

}

// O código JavaScript fornecido itera sobre um array chamado redesSociais usando o método forEach. Para cada elemento do array, o código imprime uma mensagem no console indicando o índice do elemento e o nome da rede social.

redesSociais.forEach(function (item, indice) {
    console.log(`# ${indice}Eu tenho perfil na rede social: ${item}`);
})

console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");


// O código JavaScript fornece um exemplo do uso do método map em um array chamado alunos. Ele cria um novo array chamado alunos2, onde cada elemento é um objeto com as propriedades nome e curso.

// O método map é chamado no array alunos. Ele itera sobre cada elemento do array e retorna um novo array com os resultados de uma função de callback aplicada a cada elemento.
// Para cada elemento item do array alunos, uma função de callback é executada.
// Dentro da função de callback, cada elemento item é substituído por um objeto com duas propriedades: nome (o valor do elemento original) e curso (definido como 'frontend').
// O objeto resultante é retornado e inserido no novo array alunos2.

const alunos = ["sanderson", "melanie", "heitor", "maria"];

const alunos2 = alunos.map(function (item) {
    item = {
        nome: item,
        curso: 'frontend'
    }
    return item;
})

console.log(alunos2);

// O código JavaScript usa o método find em um array de objetos chamado alunos2 para encontrar um objeto específico com o nome 'sanderson'. Em seguida, ele imprime as informações do objeto encontrado no console.

const sanderson = alunos2.find(function (item) {
    return item.nome == 'sanderson';
});

console.log(sanderson);

console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxx")

// O código JavaScript usa o método map para criar um novo array contendo o dobro de cada número no array original numeros.

const numeros = [1, 2, 3, 4, 5]

const doboDosNumeros = numeros.map(function (numeroAtual) {
    numeroAtual = numeroAtual * 2;
    return numeroAtual
})
console.log(numeros);
console.log(doboDosNumeros);


console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxx")

// // O método push é usado para adicionar novos elementos ao final do array alunos2.
// Dois novos objetos são adicionados ao array usando a sintaxe de objeto JavaScript.
// Cada objeto tem duas propriedades: nome e curso, que são definidas com os valores 'lucio' e 'backend' para o primeiro objeto, e 'rebeca' e 'backend' para o segundo objeto.
// Após a execução, o array alunos2 terá dois novos objetos no final, representando os alunos 'Lucio' e 'Rebeca', ambos no curso de 'backend'.

alunos2.push(
    {
    nome: 'lucio',
    curso: 'backend'
    },
    {
        nome: 'rebeca',
        curso: 'backend'
    }
)

const testeEvery = alunos2.every(function (item) {
    return item.curso === 'frontend'
})

// O código parece estar correto agora. Ele utiliza o método every para verificar se todos os alunos do array alunos2 estão no curso de 'frontend'

console.log(alunos2);
console.log(testeEvery);

console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");

// O método filter cria um novo array contendo todos os elementos do array original que passam por um teste especificado na função de callback.
// A função de callback recebe cada elemento do array como argumento.
// No código, a função de callback verifica se a propriedade curso de cada aluno é igual a 'frontend'.
// Os elementos que passam no teste são incluídos no novo array retornado pelo método filter.
// O novo array é armazenado na variável filterAlunos.
// Por fim, o novo array é exibido no console.

const filterAlunos = alunos2.filter(function(item){
    return item.curso === 'frontend';
})

console.log(filterAlunos);

console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");

// O método reduce executa uma função de callback em cada elemento do array, resultando em um único valor de retorno.
// A função de callback recebe dois argumentos: o acumulador e o valor atual.
// No código, a função de callback recebe o acumulador (inicializado como 0) e o valor atual do elemento do array.
// A função de callback adiciona o valor atual ao acumulador.
// O valor atualizado do acumulador é retornado para a próxima iteração.
// O valor final do acumulador é retornado após percorrer todos os elementos do array.
// O resultado da soma é armazenado na variável soma.
// Por fim, o resultado da soma é exibido no console.

const nums = [10, 20, 30, 40, 50];

const soma = nums.reduce(function(acumulador, indice){
    acumulador += indice
    return acumulador
}, 0)

console.log(nums);
console.log(soma);


// A utilização do método reduce é bastante comum em situações onde precisamos calcular um valor único a partir de uma lista de valores. Aqui estão alguns exemplos de uso do método reduce no mundo real:

// Total de vendas em uma loja online: Suponha que você tenha uma lista de objetos representando vendas em uma loja online, onde cada objeto contém o valor da venda. Você pode usar o reduce para calcular o total de vendas realizadas em um determinado período de tempo.

const vendas = [
    { valor: 100 },
    { valor: 150 },
    { valor: 200 }
  ];
  
  const totalVendas = vendas.reduce((total, venda) => total + venda.valor, 0);
  console.log(totalVendas); // Saída: 450

//   Cálculo de média de notas: Imagine que você tenha uma lista de notas de alunos e deseja calcular a média das notas. Você pode usar o reduce para calcular a soma das notas e, em seguida, dividir pelo número total de notas para obter a média.

const notas = [8, 7, 9, 6, 8];
const somaNotas = notas.reduce((total, nota) => total + nota, 0);
const media = somaNotas / notas.length;
console.log(media); // Saída: 7.6




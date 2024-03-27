
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
    return item.curso = 'frontend'
})


console.log(alunos2);
console.log(testeEvery);

console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
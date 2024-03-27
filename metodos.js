
// Este código cria uma matriz chamada `redesSociais` que contém três strings representando nomes de redes sociais: "facebook", "instagram" e "twitter". Em seguida, ele usa um loop `for` para iterar sobre cada elemento da matriz e exibir uma mensagem no console para cada rede social, indicando que o usuário tem um perfil nessa rede social. A mensagem exibida inclui o nome da rede social atual, que é acessado usando a variável `i` como índice para acessar cada elemento da matriz durante a iteração.

const redesSociais = ["facebook", "instagram", "twitter"];

for (let i=0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
    
}

redesSociais.forEach(function(item, indice){
    console.log(`# ${indice}Eu tenho perfil na rede social: ${item}`);
})
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

const alunos = ["sanderson", "melanie", "heitor", "maria"];

const alunos2 = alunos.map(function(item){
    item = {
        nome: item,
        curso: 'frontend'
    }
    return item;
})

console.log(alunos2);

const numeros = [1, 2, 3, 4, 5]

const doboDosNumeros = numeros.map(function(numeroAtual){
    numeroAtual = numeroAtual * 2;
    return numeroAtual
})
console.log(numeros);
console.log(doboDosNumeros);


const despesas = [1000, 2000, 1430, 850]

const totalDeDespesas = despesas.reduce(function(acumulador, despesa){
   return acumulador += despesa 
}, 0)

console.log(totalDeDespesas);

console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");

const vendas = [500, 555, 654, 100, 620];

const imposto = vendas.reduce((total, venda) => total + venda * 0.8, 0)

console.log(imposto);
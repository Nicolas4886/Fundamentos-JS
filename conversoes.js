// = para atribuição de valor
// == para comparação geral, ex: 456 é igual à "456".
// === para comparação detalhista, ex: o "456" não é igual ao 456 por conta das aspas.
// tipo de dado
// booleanos

// conversão implícita
const numero = 456;
const numeroString = Number("456");

// Number()
// String()
// console.log(numero + numeroString)

// conversão explícita

// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação
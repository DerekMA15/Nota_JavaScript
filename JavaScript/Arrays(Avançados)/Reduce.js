// Reduce -> prático para reduzir todos arrays a um único elemento
const numrs = [50, 5, 8, 9, 10, 2, 3, 11, 22, 32, 45, 54, 28, 7]; 

// Somar todos os números
const total = numrs.reduce(function(acumulador,valor){
  acumulador += valor;
  return acumulador;
}, 0);//valor inicial para o acumulador

console.log(total);// out: 286

//retornar um array com os valores pares(filter)

const arrayPares = numrs.reduce(function(acumulador, valor){
  if( valor % 2 == 0){acumulador.push(valor)}; // add ao array
  return acumulador;
}, []); // Envez de inicializar como um valor, colocamos um array vazio, agora ele vai retornar um array só com números pares, que nem o filter faria

console.log(arrayPares); /*out: [
                                  50,  8, 10,  2,
                                  22, 32, 54, 28
                                ] */

const numrs2 = [17, 50, 5, 8, 9, 10, 2, 3, 11, 22, 32, 45, 54, 28, 7]; 

// ERRO DE INICIALIZAÇÃO
const acumulaPares1 = numrs2.reduce(function(acumulador, valor){
  if(valor % 2 == 0) {acumulador += valor};
  return acumulador;
});
console.log(acumulaPares1);// out: 223, mesmo tendo somado só os números pares ele retornou um valor impar
// temos que tomar cuidado porque ele inicializa no valor 17, logo soma um impar e suja a nossa função

const acumulaPares2 = numrs2.reduce(function(acumulador, valor){
  if(valor % 2 == 0) {acumulador += valor};
  return acumulador;
}, 0);// addicionei um inicializador ao final para garantir que seja no zero

console.log(acumulaPares2);// out: 206


const pessoas = [
{nome: 'Derek', idade: 21 },
{nome: 'Raissa', idade: 47 },
{nome: 'Isabelly', idade:62 },
{nome: 'Vitor', idade: 62 },
{nome: 'Lucas', idade: 18 },
{nome: 'Erick', idade: 32  }
]

// retorna a pessoa mais velha
const pessoaMaisVelha = pessoas.reduce(function(acumulador, valor){
 // o acumulador sempre pegará o primeiro elemento ao inicializar
 if(acumulador.idade > valor.idade ) return acumulador;
 return valor; 
});

console.log(pessoaMaisVelha); // out: { nome: 'Vitor', idade: 62 }

// Map -> altera os valore e retorna com a mesma quantidade de indices do array original
//             0   1  2  3  4   5  6   7   8   9  10  11  12  13
const numrs = [50, 5, 8, 9, 10, 2, 3, 11, 22, 32, 45, 54, 28, 7]; 

//Dobrar os números

/*const numerosEmDobro = numrs.map(function(valor){
  return valor * 2;
})
    Forma com função normal  
*/
//  Forma com arrow function 
const numerosEmDobro = numrs.map(valor => valor*20);

console.log(numerosEmDobro); //out: [ 100, 10, 16, 18, 20,  4, 6, 22, 44, 64, 90, 108, 56, 14] 

// retorna um array apenas com o nome da pessoa

const pessoas = [
  {nome: 'Derek', idade: 21 },
  {nome: 'Raissa', idade: 47 },
  {nome: 'Isabelly', idade:62 },
  {nome: 'Vitor', idade: 62 },
  {nome: 'Lucas', idade: 18 },
  {nome: 'Erick', idade: 32  }
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);// out: [ 'Derek', 'Raissa', 'Isabelly', 'Vitor', 'Lucas', 'Erick' ]

// retorna apenas a chave idade do nosso array de objetos

// retorno sem as chaves(tudo dentro de um array)
const idades = pessoas.map(obj => obj.idade);
console.log(idades); // out: [ 21, 47, 62, 62, 18, 32 ]

//const idades2 = pessoas.map(function(obj){return {idade:obj.idade}}); 
const idades2 = pessoas.map(objs =>({idade: objs.idade})); 
console.log(idades2);/* out:[
                              { idade: 21 },
                              { idade: 47 },
                              { idade: 62 },
                              { idade: 62 },
                              { idade: 18 },
                              { idade: 32 }
                            ]*/

// Adicionar uma chave de id a cada objeto do nosso array
const comIds = pessoas.map(function(obj,indice) {
  obj.id = indice + 1;
  return obj;
});


console.log(pessoas); /*out: [
                              { nome: 'Derek', idade: 21, id: 1 },
                              { nome: 'Raissa', idade: 47, id: 2 },
                              { nome: 'Isabelly', idade: 62, id: 3 },
                              { nome: 'Vitor', idade: 62, id: 4 },
                              { nome: 'Lucas', idade: 18, id: 5 },
                              { nome: 'Erick', idade: 32, id: 6 }
                            ]*/
console.log(comIds);  /*out: [
                              { nome: 'Derek', idade: 21, id: 1 },
                              { nome: 'Raissa', idade: 47, id: 2 },
                              { nome: 'Isabelly', idade: 62, id: 3 },
                              { nome: 'Vitor', idade: 62, id: 4 },
                              { nome: 'Lucas', idade: 18, id: 5 },
                              { nome: 'Erick', idade: 32, id: 6 }
                            ]*/

/*Note que tanto no array original quanto no nosso array comIds estão iguais, isso acontece 
 porque trabalhamos usando por referência, ele cria um novo array, mas objetos dentro são os 
 mesmos do original, se não queremenos que isso aconteça, devemos fazer dessa forma: */

 const pessoas1 = [ //novo array para fazermos da nova forma
  {nome: 'Derek', idade: 21 },
  {nome: 'Raissa', idade: 47 },
  {nome: 'Isabelly', idade:62 },
  {nome: 'Vitor', idade: 62 },
  {nome: 'Lucas', idade: 18 },
  {nome: 'Erick', idade: 32  }
];

const addIDs = pessoas1.map(function(obj, indice) {
  // Aqui que está o "pulo do gato" porque devemos criar um novo obj usando spread, observe: 
  const newObj = {...obj}; // fez a copia de todos os objetos do original e agora podemos mexer conservando-os
  newObj.id = indice + 1;
  return newObj; // ou retorne o argument 'obj'

})

console.log(pessoas1);/* out: [
                                { nome: 'Derek', idade: 21 },
                                { nome: 'Raissa', idade: 47 },
                                { nome: 'Isabelly', idade: 62 },
                                { nome: 'Vitor', idade: 62 },
                                { nome: 'Lucas', idade: 18 },
                                { nome: 'Erick', idade: 32 }
                              ]*/

console.log(addIDs);/* out: [
                              { nome: 'Derek', idade: 21, id: 1 },
                              { nome: 'Raissa', idade: 47, id: 2 },
                              { nome: 'Isabelly', idade: 62, id: 3 },
                              { nome: 'Vitor', idade: 62, id: 4 },
                              { nome: 'Lucas', idade: 18, id: 5 },
                              { nome: 'Erick', idade: 32, id: 6 }
                            ]*/
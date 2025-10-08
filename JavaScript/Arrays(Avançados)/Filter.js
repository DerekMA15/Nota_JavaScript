// Map, Filter e Reduce

// Filter -> semrpre vai retornar a quantidade de arrays ou menos 

//             0   1  2  3  4   5  6   7   8   9  10  11  12  13
const numrs = [50, 5, 8, 9, 10, 2, 3, 11, 22, 32, 45, 54, 28, 7]; 

// ---------------------------------------------------------------------------------------

function callBackFilter(valor){ // não precisamos de indice e do array nos argumentos

   /* if(valor > 10){
      return true;
    }
    else{
      return false;
    } */ // método mais "rudimentar, porque não precisamos fazer essas duas condicionais"

  
    // Retornar os numeros maiores que 10 
    return valor > 10; // Esse return ja nos garantirar o mesmo que essas duas condicionais iam fazer
}
const filtro = numrs.filter(callBackFilter); 
console.log(filtro)// out: [50, 11, 22, 32, 45, 54, 28 ]
// ---------------------------------------------------------------------------------------

// forma mais prática quando não vamos reutilzar aquela função em outro local, atráves da função anonima.
const filtro2 = numrs.filter(valor => valor < 10); // arrow functio
console.log(filtro2)// out: [ 5, 8, 9, 2, 3, 7 ]

// ---------------------------------------------------------------------------------------

const filtro3 = numrs.filter(function (valor){return valor < 5}); //  função anonima  
console.log(filtro3)// out: [ 2, 3 ]

// ---------------------------------------------------------------------------------------

const filtro4 = numrs.filter((valor, indice) => {
    console.log(valor,indice);
    return valor > 10; 
  // Esse escopo só ira se retorna(impresso o valor no terminal) caso o return seja verdadeiro(aquela atribuição é uma condicional que retorna true ou false), caso seja false apenas irá ignorar  
});  

// ---------------------------------------------------------------------------------------

// Exemplo 2, um array com objetos dentro onde cada objeto representa um indice do array
const pessoas = [
{nome: 'Derek', idade: 21 },
{nome: 'Raissa', id0ade: 47 },
{nome: 'Isabelly', idade:62 },
{nome: 'Vitor', idade: 62 },
{nome: 'Lucas', idade: 18 },
{nome: 'Erick', idade: 32  }
]

// retorna pessoas que tem no máximo 5 letras no nome

//Usando Arrow Function
const filtroTamanhoNome = pessoas.filter((pessoa) => pessoa.nome.length === 5 );
console.log(filtroTamanhoNome); /* out: [
                                          { nome: 'Derek', idade: 21 },
                                          { nome: 'Vitor', idade: 62 },
                                          { nome: 'Lucas', idade: 18 },
                                          { nome: 'Erick', idade: 32 }
                                        ]
                                  */

// ---------------------------------------------------------------------------------------

//Usando Função anonima
const filtroTamanhoNome2 = pessoas.filter(function(pessoa){ 
  return pessoa.nome.length === 8 });

console.log(filtroTamanhoNome2); // out: [ { nome: 'Isabelly', idade: 62 } ]

// retorna pessoas que tem mais de 30 anos 

const filtroIdadeAcimaDe30 = pessoas.filter(pessoa => pessoa.idade > 30);
console.log(filtroIdadeAcimaDe30); /* out: [
                                              { nome: 'Isabelly', idade: 62 },
                                              { nome: 'Vitor', idade: 62 },
                                              { nome: 'Erick', idade: 32 }
                                            ]
*/

const fitroPessoasQueTerminaComA = pessoas.filter(pessoas => pessoas.idade.toLowerCase().endWitch('a')); 
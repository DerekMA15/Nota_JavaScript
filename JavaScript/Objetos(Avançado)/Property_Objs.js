// defineProperty - defineProperties

/* JavaScript é uma linguagem orientada a objetos 
construída em torno de um modelo de protótipo. 

 Um prototype é simplesmente um objeto do qual outro 
 objeto herda propriedades.
 
 gemini: O prototype é o mecanismo que o JavaScript
         utiliza para realizar essa herança.
-------------------------------------------------------------------------------------- 
[Objeto pai] (protótipo)
const animal = {
  som: 'Som genérico de animal',
  fazerSom: function() {
    console.log(this.som);
  }
};

  [Objeto filho]
const cachorro = Object.create(animal);
cachorro.som = 'Au au!'; // Propriedade específica do cachorro

cachorro.fazerSom(); // Saída: Au au!

O que aconteceu aqui?

    cachorro.fazerSom() é chamado.

    O JavaScript procura o método fazerSom diretamente no objeto cachorro. Não encontra.

    O JavaScript então olha para o protótipo de cachorro, que é o objeto animal.

    Ele encontra fazerSom em animal e o executa.

    Dentro de fazerSom, this se refere ao objeto que fez a chamada, ou seja, cachorro. Por isso, this.som acessa a propriedade som de cachorro, e não a de animal.

O prototype é, portanto, o mecanismo de herança do JavaScript. */


// --------------------------------------------------------------------------------------
function Produto(nome, preco, estoque){
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;
}

const p1 = new Produto('arroz', 8, 10);

console.log(p1)// out: Produto { nome: 'arroz', preco: 8, estoque: 10 }


// --------------------------------------------------------------------------------------

//Mas como deixar um atributo privado ou força-lo a se tornar privado?

function Produto1(nome, preco, estoque){
  this.nome = nome;
  this.preco = preco;
  
  Object.defineProperty(this,'estoque',{
    enumerable: true, // mostra a chave
    value: estoque, // valor
    writable: false, // Se pode alterar o objeto
    configurable: false // se pode apagar, editar em outros objetos(configuravel)
  });
//--------------------------------------------------------------------------------------

  //Agora envez de fazer manualmente um por um abrindo um método, utilizamnos o 
  // Properties que agloba todas e lá fazemos as configurações desejadas 
  // EXEMPLO: 
  Object.defineProperties(this,{
    nome:{
        enumerable: true, // mostra a chave
        value: nome, // valor
        writable: false, // Se pode alterar o objeto
        configurable: false // se pode apagar, editar em outros objetos(configuravel)
      },
    preco:{
        enumerable: true, // mostra a chave
        value: nome, // valor
        writable: false, // Se pode alterar o objeto
        configurable: false // se pode apagar, editar em outros objetos(configuravel)
    }
  })
}

const p2 = new Produto('açucar', 3, 7);

console.log(p2)
console.log(Object.keys(p2));
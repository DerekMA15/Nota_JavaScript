//Getters e Setters -> são métodos para criar uma barreira e não modificar diretamente o nosso objeto

function Produto1(nome, preco, estoque){
  this.nome = nome;
  this.preco = preco;
  let estoquePrivado = estoque;

  Object.defineProperty(this,'estoque',{
    enumerable: true, 
    configurable:true,


    // funções construtoras 
    get: function(){
      return estoquePrivado;
    },

    set: function(valor){
      if (typeof valor !== 'number'){
       throw new TypeError('Bad Value');
      }
      else{
        this.estoque = valor;
      }
    }

  });

}
// Métodos uteis 


// fazer referência de um objeto 
function carro(nome, preco){
  this.nome = nome;
  this.preco = preco;
  carro2 = carro;

};

const prisma = new carro('prisma', 80.000);


console.log(prisma)

/* Acessando Chaves, Valores e Entradas

Extrair informações de um objeto é uma das tarefas mais comuns. Para isso, os seguintes métodos são indispensáveis:

    Object.keys(obj): Retorna um array contendo os nomes (chaves) de todas as propriedades de um objeto. 
    É ideal para quando você precisa iterar sobre as chaves ou simplesmente listá-las.
    

const produto = {
  nome: 'Notebook',
  preco: 3500,
  marca: 'ExemploTech'
};

console.log(Object.keys(produto));
// Saída: [ 'nome', 'preco', 'marca' ]

Object.values(obj): De forma similar ao keys, este método retorna um array com os valores de todas as propriedades de um objeto.
JavaScript

console.log(Object.values(produto));
// Saída: [ 'Notebook', 3500, 'ExemploTech' ]

Object.entries(obj): Este método retorna um array de arrays, onde cada subarray contém um par [chave, valor] das propriedades do objeto. É extremamente útil para iterar sobre chaves e valores simultaneamente utilizando for...of ou métodos de array como forEach.
JavaScript

    for (const [chave, valor] of Object.entries(produto)) {
      console.log(`${chave}: ${valor}`);
    }
     Saída:
      nome: Notebook
     preco: 3500
     marca: ExemploTech

Modificando e Combinando Objetos

A criação e a combinação de objetos são operações centrais no desenvolvimento com JavaScript.

    Object.assign(alvo, ...fontes): Copia os valores de todas as propriedades enumeráveis de um ou mais objetos de origem para um objeto de destino. É comumente utilizado para mesclar objetos.
    JavaScript

    const configuracoesBase = { tema: 'dark', layout: 'compacto' };
    const configuracoesUsuario = { layout: 'expandido', notificacoes: true };

    const configuracoesFinais = Object.assign({}, configuracoesBase, configuracoesUsuario);
    console.log(configuracoesFinais);
     Saída: { tema: 'dark', layout: 'expandido', notificacoes: true }

    Nota: As propriedades do último objeto fonte sobrescrevem as dos anteriores em caso de conflito.

Verificando Propriedades

Antes de acessar uma propriedade, muitas vezes é necessário verificar sua existência para evitar erros.

    obj.hasOwnProperty(propriedade): Retorna true se o objeto possui a propriedade especificada como uma propriedade própria (não herdada).
    JavaScript

    console.log(produto.hasOwnProperty('nome'));      // Saída: true
    console.log(produto.hasOwnProperty('toString')); // Saída: false (herdada do protótipo)

Controlando Modificações

Em certos cenários, é importante garantir que um objeto não seja alterado acidentalmente.

    Object.freeze(obj): "Congela" um objeto. Após a execução deste método, não é possível adicionar, remover ou modificar as propriedades do objeto.
    JavaScript

const configuracoesApp = {
  versao: '1.0.0',
  apiURL: 'https://api.exemplo.com'
};

Object.freeze(configuracoesApp);

configuracoesApp.versao = '1.0.1'; // Esta alteração será ignorada
console.log(configuracoesApp.versao); // Saída: 1.0.0

Object.seal(obj): "Sela" um objeto, o que impede a adição de novas propriedades e a remoção das existentes. No entanto, os valores das propriedades existentes ainda podem ser alterados.
JavaScript

const usuario = {
  nome: 'Ana',
  idade: 30
};

Object.seal(usuario);

usuario.idade = 31;      // Permitido
delete usuario.nome;     // Não permitido
usuario.email = 'a@a.com'; // Não permitido

console.log(usuario);
 Saída: { nome: 'Ana', idade: 31 } 
 */
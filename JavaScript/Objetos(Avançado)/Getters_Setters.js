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
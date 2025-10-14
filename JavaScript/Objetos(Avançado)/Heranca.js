// Herança

//Produto: Camiseta, caneca, lapis
function Produto(preco, nome){
  this.preco = preco;
  this.nome = nome;
};

Produto.prototype.aumento = function(quantia){
  this.preco += quantia;
};

Produto.prototype.desconto = function(quantia){
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
  Produto.call(this, nome, preco);
  this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const camisa1 = new Camiseta('Polo', 50, 'cinza');
console.log(camisa1); //out: Camiseta { preco: 'Polo', nome: 50, cor: 'cinza' }


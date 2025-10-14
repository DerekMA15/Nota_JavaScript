// função construtora
function Pessoa(nome, sobrenome){
  this.nome = nome; 
  this.sobrenome = sobrenome;
  //método
  this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
};

// agora pense na seguinte situação, cada vez que eu criar um novo objeto, esse objeto vai ter um método
// somente para si, envez de todos terem o mesmo método atrelado, isso vai ser uma grande perca de perfomence pensando em maior escala
// para isso iremos usar os protótipos(prototypes do JS) para passar propriedades e métodos de um obj para o outro(HERANÇA).

// Definição da Palavra Protótipo:
// -> algo feito pela primeira vez e, muitas vezes, copiado ou imitado; modelo, padrão, cânone.

const pessoa1 = new Pessoa('Derek', 'Marques Almeida');
  console.log(pessoa1) /*out: Pessoa {
                                        nome: 'Derek',
                                        sobrenome: 'Marques Almeida',
                                        nomeCompleto: [Function (anonymous)]
                                      }*/
// Repare que o método vai incluindo junto e quando criamos diversos objetos cada um vai ter seu método gerando perca de perfomance
const pessoa2 = new Pessoa('Arthur', 'Marques Calvacante');
  console.log(pessoa2) /*out: Pessoa {
                                      nome: 'Arthur',
                                      sobrenome: 'Marques Calvacante',
                                      nomeCompleto: [Function (anonymous)]
                                    }*/
  
//----------------------------------------------------------------------------------------------------------------------------
// para isso usamos o prototype que ira fazer o papel de guardar todos os métodos que esses objetos vão ter em comum

// UTILIZANDO O PROTOTYPE
function Persona(nome, sobrenome){
  this.nome = nome; 
  this.sobrenome = sobrenome;
  //método
  //this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
};

//Persona.prototype.this.nomeCompleto = function(){return `${this.nome} ${this.sobrenome}`};

const persona1 = new Persona('Maria', 'Aparecida');
const persona2 = new Persona('Lucas', 'Camargo');

// Manipulando Prototypes

// New Object -> Objec.prototype - Quando criamos um objeto, automaticamente isso acontece
const objA = {
  chaveA: 'A'
  // __proto__: Object.prototype

};

// agora se eu quiser criar um ojeto que tenha o __proto__ do objeto pai(objA)
const objB = {
  chaveB: 'B'
  // __proto__: objA
};
// apenas fazer isso aqui :
Object.setPrototypeOf(objB,objA)
console.log(objB.chaveA); // out: A

const objC = new Object(); 
objC.chaveC = 'C';

Object.setPrototypeOf(objC,objB)
console.log(objC.chaveA); //out: A
console.log(objC.chaveB); //out: B
console.log(objC.chaveC); //out: C

//---------------------------------------------------------------------------------------------------------------------

function Produto(nome, preco){
  this.nome = nome;
  this.preco = preco;
};
// forma perfomatica e melhor controle dos métodos
Produto.prototype.desconto = function(desconto){
  this.preco = this.preco - (this.preco *(desconto/100))
}

const p1 = new Produto('camisa', 50); 
p1.desconto(100)
console.log(p1) // out: Produto { nome: 'camisa', preco: 0 }

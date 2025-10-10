// como criar objetos
// forma literal: function, [], const , diferente do java que você sempre precisa declarar qeu está fazendo um novo objeto
// no caso de objetos, sua forma literal são as chaves {} que substituem esse trabalho

//-----------------------------------------------------------------------------------------------------

const pessoa1 = {
  // atributos do meu obj
  nome : "Derek",
  sobrenome: "Marques Almeida",
  idade: 20,
  altura: 180
};

// formas de acessar o obj
console.log(pessoa1.nome);//out: Derek - Forma mais simples
console.log(pessoa1['sobrenome']);//out: Marques Almeida - Forma de notação muito mais dinamica e prática para requisições futuras. Ex:

const requisição = 'idade'; // interprete isso como uma  requisição de fora a qual eu escolhi oque olhar
console.log(pessoa1[requisição]);//out: 20

//-----------------------------------------------------------------------------------------------------

// forma mais verbosa de instanciar um objeto
const pessoa2 = new Object();
pessoa2.nome = 'lucas';
pessoa2.sobrenome = 'Otavio';
pessoa2.idade = 32; 
pessoa2.altura = 165;

//-----------------------------------------------------------------------------------------------------

//métodos atrelados ao obj
pessoa2.falarNome = function(){
    return(`${this.nome} ${this.sobrenome}`);
  };
console.log(pessoa2.falarNome()) //out: lucas Otavio

pessoa2.dataDeNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
  }
  console.log(pessoa2.dataDeNascimento());//out: 1993

// apagar atributos de um obj

delete pessoa2.nome;
console.log(pessoa2);/*{
                        sobrenome: 'Otavio',
                        idade: 32,
                        altura: 165,
                        1993
                        } */


for (chave in pessoa1){
  console.log(pessoa1[chave]);/*{
                          sobrenome: 'Otavio',
                          idade: 32,
                          altura: 165,
                          idade: 32,
                          altura: 165, */
};

//-----------------------------------------------------------------------------------------------------

// criar molde de obj para não precisar ficar criando funções manualmente

//Factory Functions / Contructor Functions / Classes (sintaxy sugar) -> para abstrair do POO mais confuso do JS
// a grande diferença entre a Factory e a Constructor é que o JS faz muita coisa diferente por conta do new
function criaPessoa(nome, sobrenome){
  return{
    nome,
    sobrenome,
    get nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`; 
      }
  }
}

// p1 = (ENDEREÇO DE MEMORIA) -> 'valor' [ A referência que aponta para os valores armazenados na memória]
// não é possivel alterar o endereço de memoria, mas podemos alterar o valor associado ao endereço da memória


const p1 = criaPessoa('Derek', 'Marques Almeida');
console.log(p1.nomeCompleto)//out: Derek Marques Almeida


// forma mais abtual em outras linguageens orientadas a objeto

function Pessoa(nome, sobrenome){
  this.nome = nome; 
  this.sobrenome = sobrenome;

  Object.freeze(this); // Serve para "Travalos" e não permitr alterações após seu instanciamento
}
const p2 = new Pessoa("Isabelly",'Dos Santos'); 
console.log(p2); //out: Pessoa { nome: 'Isabelly', sobrenome: 'Dos Santos' }


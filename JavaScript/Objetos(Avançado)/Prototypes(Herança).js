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

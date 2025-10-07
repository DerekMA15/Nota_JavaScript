const nomes = ['Eduardo', 'Maria','joão'];
nomes[2] = 'Joana'; 
console.log(nomes);// out: ['Eduardo', 'Maria','joana']

delete nomes[1];
console.log(nomes);// out: [ 'Eduardo', <1 empty item>, 'Joana' ], deletou o array sem excluir seu indice

// valores por referência
const novo = nomes;
novo.pop();
console.log(nomes);// out: [ 'Eduardo', <1 empty item> ]

// -------------------------------------------------------------------

// fazer o espalhamento/ criando uma cópia a partir do array anterior
nomes[1] = 'Derek'; 
const copia = [...nomes]; //copia = [ 'Eduardo', <1 empty item> ]

// agora tudo que eu faço em sua copia, não altera em nomes, diferente do método anterior.
const removido = copia.pop();
const removido2 = nomes.shift()
console.log(copia, removido);// out: [ 'Eduardo' ] 'Derek'
console.log(nomes, removido2);// out: [ 'Derek' ] 'eduardo'

// métodos pop() e shift()
// pop() = rmv um dado no final do array
// shift = rmv um dado do inicio do array

// -------------------------------------------------------------------
// métodos push() e unshift()
// Push() = add um novo dado ao final do array
// unshift = add um novo dado ao inicio do array


// -------------------------------------------------------------------

// método .slice(), serve para recortar o array

const carros = ['sedan', 'pajeiro', 'nãosei', 'outrocarro']; 
const carros_novo = carros.slice(0,2);
console.log(carros_novo); // out: [ 'sedan', 'pajeiro' ]

// -------------------------------------------------------------------

// método .split()
// separa uma string em pequenos arrays
const frase = 'Derek Marques Almeida'; 
const frase_nova = frase.split(' ');// identifica os espaços ' ' e corta em dados de um array
console.log(frase_nova); // out: [ 'Derek', 'Marques', 'Almeida' ]

// -------------------------------------------------------------------

// método .join()
// o oposto da métodos split, serve para unir os dados do array
frase_nova.join(' '); // add um espaço ' ' a cada dado do array
console.log(frase_nova);// out: [ 'Derek', 'Marques', 'Almeida' ]



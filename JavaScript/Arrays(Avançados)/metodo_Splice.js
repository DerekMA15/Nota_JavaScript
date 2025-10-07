// Método Splice
// o método splice é uma junção do pop, push, shift e unfshift e outras funcionalidades além
//                -6        -5       -4       -3        -2       -1
//                 0         1        2        3         4        5
const nomes = ['Eduardo', 'Maria', 'joão', 'Gabriel', 'Lucas', 'Marcos'];

//nomes.splice(índice, delete, elem1, elem2, elem3); // elem1,2 e 3 são adições no array
// pop
const removidos = nomes.splice(5,1); // (5,1)  = 'do indice 5(Marcos), remova 1 (contando dele em diante caso tivesse mais indices e eu colocasse um valor maior no segundo argumento, mas esse é o ultimo nesse caso)
console.log(nomes, removidos); /* out: [ 'Eduardo', 'Maria', 'joão', 'Gabriel', 'Lucas' ] [ 'Marcos' ]
                                diferente do pop que só retorna o dado, esse método retorna em um novo array */

const add = nomes.splice(3,0,'Lula'); // Quero que adicione um novo nome('Lula') no indice 3(no lugar do Gabriel) sem remover nenhum nome
console.log(nomes);// out: [ 'Eduardo', 'Maria', 'joão', 'Lula', 'Gabriel', 'Lucas' ] 

const addERemove = nomes.splice(3,2,'Derek'); // Quero que remova Lula e Gabriel e adicione 'Derek'
console.log(nomes, addERemove); // out: [ 'Eduardo', 'Maria', 'joão', 'Derek', 'Lucas' ] [ 'Lula', 'Gabriel' ]



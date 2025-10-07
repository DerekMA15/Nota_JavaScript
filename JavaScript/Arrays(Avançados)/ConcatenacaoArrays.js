const a1 = [1,2,3]
const a2 = [4,5,6]
const a3 = a1 + a2;// quando fazemos esse tipo de junção os arrays se tornam uma string

console.log(a3, typeof a3); // out: 1,2,34,5,6 string

const a4 = a1.concat(a2); // forma certa de concatenar dois arrays e eles continuarem sendo um array
const a5 = a1.concat(a2,[7,8,9], 'blabla');

console.log(a4, typeof a4) // out: [ 1, 2, 3, 4, 5, 6 ] object

// forma usando o '...' rest = > '...' spread
const a6 = [...a1, ...a2, 7,8,9 ] ; 
console.log(a6);



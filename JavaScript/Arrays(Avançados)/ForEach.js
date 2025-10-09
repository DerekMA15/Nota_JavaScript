const numrs = [50, 5, 8, 9, 10, 2, 3, 11, 22, 32, 45, 54, 28, 7]; 

numrs.forEach((valor,indice) => console.log(valor, indice));

let total = 0; 
const somaDosValores = numrs.forEach(valor => {total += valor});
console.log(somaDosValores);
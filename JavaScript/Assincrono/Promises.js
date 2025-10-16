// função de callBack

//Simulando uma função que retorna messagem de aguardo para algo assincrono

function rand(min,max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max- min) + min);
}

/*
function esperarAi(msg, tempo){
  setTimeout(() => {
    console.log(msg);
    }, tempo);
}

// essa função gera um efeito interessante porque uma vai retornar depois da outra (algo que não acontece como uma leitura de cima pra baixo - sincrona)
esperarAi('Frase 1', rand(1,10))
  esperarAi('Frase 2', rand(1,10))
    esperarAi('Frase 3', rand(1,10))
    

  teste1:
out:
    Frase 2
    Frase 1
    Frase 3
-----------------------------------------------
  teste2:
out:
    Frase 2
    Frase 3
    Frase 1
-----------------------------------------------
  teste3:
out:
    Frase 3
    Frase 1
    Frase 2

*/


// DA MANEIRA CORRETA

function esperarAi(msg, tempo){
  return new Promise((resolve,reject) => {
    // condicional para caso o valor incluido seja diferente do esperado e assi caia no catch()
    if (typeof msg !== 'string') reject('Bad Value');
    setTimeout(() => {
     resolve(msg);
    }, tempo)
  });
  // resolve = código respondeu com sucesso, retorne isso .then()
  // reject = "código respondeu inesperadamente, retorne isso .catch()
}

esperarAi('Frase 1', rand(1,10))
.then(resposta => {
    console.log(resposta);
    return esperarAi('Frase 2', rand(1,10));
  })
  .then(resposta => {
    console.log(resposta)
    return resposta + ' vai para outro then';
  })
  
  .then(resposta => {
    console.log(resposta);
    // * O erro de entrada na msg fooi submetido um number e vai direto para o catch 
    return esperarAi(33333,rand(1,10));
  })
  
  .then(() => {
    console.log('Ultimo a ser exibido');
  })
  .catch(erro => {
    console.log('ERRO:', erro);
  });

console.log("isso vai ser retornado antes de qualquer promise!");

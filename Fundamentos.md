# Fundamentos JavaScript╰(*°▽°*)╯

### 1. Tipos de Dados Primários
```javascript
// Primitivos
const nome = "João"          // string
const idade = 30             // number (inteiro ou float)
const ativo = true           // boolean
const nulo = null            // null
const indefinido = undefined // undefined
const simbolo = Symbol('id') // symbol (ES6+)

// Estruturas
const lista = [1, 2, 3]      // array
const objeto = {             // object
  chave: "valor" 
}
```
### 2. Variáveis e Escopos 
```javascript
// var (escopo de função - EVITAR)
var antigo = "hoisting"

// let (escopo de bloco - mutável)
let contador = 0
contador = 1 // permitido

// const (escopo de bloco - imutável)
const PI = 3.14
// PI = 3.1415 // TypeError!
```
### 3. Operadores Essenciais
```javascript
// Aritméticos
10 % 3 // resto (1)

// Comparação
"5" == 5  // true (coerção)
"5" === 5 // false (tipos diferentes)

// Lógicos
true && false // AND (false)
true || false // OR (true)
!true         // NOT (false)
```
### 4. Controle de Fluxo
```javascript
// Condicionais
if (idade >= 18) {
  console.log("Adulto")
} else if (idade >= 13) {
  console.log("Adolescente")
} else {
  console.log("Criança")
}

// Ternário
const status = idade >= 18 ? "Adulto" : "Menor"

// Switch
switch (diaDaSemana) {
  case 1:
    console.log("Segunda")
    break
  default:
    console.log("Fim de semana")
}
```
### 5. Loops e Iteração
```javascript
// for clássico
for (let i = 0; i < 5; i++) {
  console.log(i)
}

// for...of (arrays)
const frutas = ["maçã", "banana"]
for (const fruta of frutas) {
  console.log(fruta)
}

// while
let i = 0
while (i < 3) {
  console.log(i)
  i++
}
```
### 6. Funções Básicas
```javascript
// Declaração
function soma(a, b) {
  return a + b
}

// Expressão
const multiplica = function(a, b) {
  return a * b
}

// Arrow function (ES6+)
const divide = (a, b) => a / b

// Parâmetros default
function greet(nome = "Visitante") {
  return `Olá, ${nome}!`
}
```
### 7. Manipulação de Arrays
```javascript
const numeros = [1, 2, 3]

// Métodos importantes
numeros.push(4)      // adiciona no final
numeros.pop()        // remove do final
numeros.map(n => n*2) // [2, 4, 6]
numeros.filter(n => n > 1) // [2, 3]
numeros.reduce((acc, n) => acc + n, 0) // 6
```
### 8. Trabalhando com Objetos
```javascript
const pessoa = {
  nome: "Maria",
  idade: 25,
  profissao: "Dev"
}

// Acesso
pessoa.nome      // "Maria"
pessoa["idade"]  // 25

// Desestruturação (ES6+)
const { nome, ...resto } = pessoa

// Spread operator
const novaPessoa = { ...pessoa, idade: 26 }
```
### 9.Extra 
📌 Boas Práticas Iniciais
- Nomenclatura: Use camelCase e nomes descritivos

```javascript
// Ruim
const x = 10

// Bom
const maxAttempts = 10
```
- Imutabilidade: Prefira `const` sobre `let`

- Igualdade estrita: Use `===` em vez de `==`

- Early return: Simplifique condicionais

```javascript
// Ruim
function checkAccess(age) {
  if (age >= 18) {
    return true
  } else {
    return false
  }
}

// Bom
function checkAccess(age) {
  return age >= 18
}
```

### 🚀 Próximos Passos nos Fundamentos

- Entender typeof e verificação de tipos

- Aprender sobre truthy/falsy values

- Dominar métodos de array (find, some, every)

- Praticar desestruturação de objetos/arrays


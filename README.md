# JS_Notas

## 📌 Visão Geral

Este repositório contém anotações e roteiro de estudos para desenvolvedor back-end que deseja dominar JavaScript, Node.js e migrar para TypeScript.

<details> 
<summary> ✅ CheckList </summary>
  
### Fase 1: JavaScript Essencial 
- [X] Fundamentos da linguagem
- [ ] ES6+ (arrow functions, destructuring, modules)
- [ ] Assincronicidade (callbacks, promises, async/await)

### Fase 2: Node.js Básico 
- [ ] Core modules (fs, http, path)
- [ ] NPM e gerenciamento de pacotes
- [ ] Express.js (rotas, middlewares)

### Fase 3: Back-end Avançado 
- [ ] Bancos de dados (SQL/NoSQL)
- [ ] Autenticação (JWT, OAuth)
- [ ] Boas práticas (MVC, logging, testes)

### Fase 4: TypeScript (3-5 semanas)
- [ ] Tipos básicos e interfaces
- [ ] Node.js + TypeScript
- [ ] Padrões avançados (DTOs, Decorators)

</details>
<details>
  
<summary>  
  <strong> :D Fundamentos JavaScript </strong> 
</summary>
  
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
<details> 
<summary> ✅ CheckList </summary>
### 🚀 Próximos Passos nos Fundamentos
- Entender typeof e verificação de tipos

- Aprender sobre truthy/falsy values

- Dominar métodos de array (find, some, every)

- Praticar desestruturação de objetos/arrays

</details> 
</details>


<details>
<summary>
Dicas para um README eficaz:
</summary>
1. **Hierarquia clara**: Use headers (`##`, `###`) para organizar seções
2. **Elementos visuais**: Tabelas, lists e diff blocks facilitam a leitura
3. **Seções recolhíveis**: `<details>` para anotações técnicas detalhadas
4. **Checklists**: Permitem acompanhar progresso
5. **Links úteis**: Documentação oficial e recursos recomendados
6. **Destaques**: Emojis e formatação para ênfase (não exagere)
<details>

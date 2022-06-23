// Array com 5 nomes

let nome = ["Marcos","Paulo", "Pedro", "Miguel", "Pontes"];

console.log(nome);

// Adicionar um nome no começo

const adicionarNomeComeco = nome.unshift("Jão");
console.log(nome);

// Remover nome do final

const retirarNomeFinal = nome.pop();
console.log(nome);

// Adicionar dois nomes ao fim

const adicionarNomesFinal = nome.splice(5, 0, "Thiago", "Gabriela");
console.log(nome);

// Remover o primeiro nome

const removerNomeComeco = nome.shift();
console.log(nome);

// Organizar o Array:
let numbers = [7,5,6,3,8,9,2,1,4];

const organizarNumbers = numbers.sort();
console.log(numbers);
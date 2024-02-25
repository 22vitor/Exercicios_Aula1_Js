//Atividade 01: Crie um programa que peça ao usuário para digitar seu nome usando o prompt e, em seguida, exiba o nome na tela usando o console.

const nome = prompt("Digite seu nome: ")

alert(`O seu nome é ${nome}`)

//Atividade 02: Solicite ao usuário que insira dois números usando o prompt, some esses números e exiba o resultado usando o console.

const numero1 = Number(prompt("Digite o primeiro número: "))
const numero2 = Number(prompt("Digite o segundo número: "))

let soma 
soma = numero1+numero2

alert(`A soma de ${numero1} + ${numero2} é: ${soma}`)


// Atividade 03: Peça ao usuário para digitar sua idade usando o prompt e, em seguida, calcule e exiba o ano de nascimento usando o console.

const idade = Number(prompt("Digite a sua idade: "))

const data_atual = new Date()
const ano_atual = data_atual.getFullYear()

const ano_nasceu = ano_atual - idade

alert(`Você nasceu em ${ano_nasceu}`)

//Atividade 04 Crie um programa que solicite ao usuário que insira o raio de um círculo usando o prompt e, em seguida, calcule e exiba a área do círculo usando o console. 

const raio = Number(prompt("Digite o raio de um circulo: "))

const area = d = 120 * 2 ** 60

alert(`A area de um circulo é igual a ${area}`)

//Atividade 05: Crie um programa que solicite ao usuário que insira um valor em dólares usando o prompt. Em seguida, converta esse valor para euros (1 dólar = 0,85 euros) e exiba o resultado no console.

const dollar = Number(prompt("Digite o valor em dollar: "))

const euro = dollar * 0.85

alert(`O valor de US${dollar} foi convertido em €${euro}`)


//Atividade 06: Peça ao usuário que insira um preço de um produto usando o prompt. Em seguida, aplique um desconto de 10% a esse preço e exiba o preço com desconto no console.


const preco_produto = Number(prompt("Digite o preço do preco_produto:"))

const desconto = preco_produto * 0.10

const preco_final = preco_produto - desconto

alert(`O seu produto custava R$ ${preco_produto}\nVocê recebeu um desconto de R$ ${desconto}\nE você só vai pagar R$ ${preco_final}`)


//Atividade 07: Solicite ao usuário que insira um valor em metros usando o prompt e, em seguida, converta esse valor para centímetros (1 metro = 100 centímetros) e exiba o resultado no console.

const metros = Number(prompt("Digite o valor em metros: "))

const centimetros = metros * 100

alert(`O valor de ${metros} metros foi convertido para  ${centimetros} centímetros!`)
const [a] =[10]//desistruturação de array
console.log(a)
const [n1,n2,n4,n6=0]=[4,5,3]
console.log(n1,n2,n4,n6)
const [,[,nota]]=[7,[8,9]]//ignora o primeiro elemento ,o segundo é um array tbm , que o primeiro do segundo tb é ignorado
console.log(nota)
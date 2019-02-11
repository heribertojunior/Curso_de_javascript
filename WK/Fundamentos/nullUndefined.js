let valor // n atribuida
console.log(valor)//undefined , variavel nao foi atribuida a nenhum valor logo ela é indefinida n nula

valor = null //nulo siginifica nao estar apontando nehum endereço na memoria 
/*
null é usado pra zerar uma variavel referencia a um espaço na memoria no caso objeto
*/ 

console.log(valor)
const produto ={}
console.log(produto.preco)//aparece undefined pois o produto foi definido ja o preco nao 
//console.log(produto.preco.a)//aparece erro pois nao existe a em algo indefinido
produto.preco = 3.20
console.log(produto)
produto.preco = undefined //evite usar 
console.log(!!produto.preco)//aparece falso pois é indefinido
console.log(produto.preco)
delete produto.preco
console.log(produto.preco)

produto.preco = null //seria como se o produto n tivesse valor produto sem preço
console.log(!!produto.preco)
console.log(produto.preco)





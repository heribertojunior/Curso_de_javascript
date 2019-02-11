{{{{var sera = "SERA??"}}}}//variavel var é visivel fora do bloco que é construido
console.log(sera)

function teste (){
    var local = 123
    console.log(local)
}
teste()
console.log(local)//var dentro de funcao n acessivel por fora do bloco

/*
Quando se cria um var fora de uma função ele tem escopo(visibilidade) GLOBAL
ou seja var so tem dois escopos possiveis ou GLOBAL , ou visivel so na funcao
 */
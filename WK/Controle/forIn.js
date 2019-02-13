const notas=[6,5,8,9,7,1,4,2,3,6]
for(i in notas ){
    console.log(i,notas[i])
} 
const pessoa = {
    nome:'Joyce',
    sobrenome:'Correa',
    idade:29,
    peso:61
}
for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`) 
}
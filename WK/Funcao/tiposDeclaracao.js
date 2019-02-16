console.log(soma(2,4))
//Function declaration ,podem ser chamadas antes pois são carregadas na primeira linha de execução
function soma(x,y){
    return x+y
}
//function expression
const sub = function(x,y){
    return x- y
}
console.log(sub(4,2))//expression so pode ser chamado depois da criação da função , assim como named function expression
//named function expression
const mult = function mult(x,y){
    return x*y
}  

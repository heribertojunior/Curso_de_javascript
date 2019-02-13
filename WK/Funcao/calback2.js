const notas  = [6,7,8,3,9,5,1]

//sem callback
let notasBaixas = []
for(let i in notas){
    if(notas[i]<7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//com CallBack
notasBaixas = notas.filter(function(nota){
    return nota <7
})//se verdadeiro entra no array função filter
console.log(notasBaixas)

//callback com arrow
const notasBaixas3  = notas.filter(nota => nota<7)
console.log(notasBaixas3)
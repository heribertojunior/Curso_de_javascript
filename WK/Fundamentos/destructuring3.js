function rand({min=0,max=100}){//padrao caso n mande nehum parametro ele atribui esses valores
    const valor =Math.random()*(max-min)+min//random()numero aleatorio
    return Math.floor(valor)
}
const obj ={max:50,min:40}
console.log(rand(obj))
console.log(rand({min:10,max:100}))
console.log(rand({}))
const peso1 = 1.0
const peso2 = Number('2.1')
console.log(peso1,peso2)
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(peso1))
const avaliacao1 = 9.871
const avaliacao2 = 6.871
const total = avaliacao1*peso1+avaliacao2*peso2
const media = total/(peso1+peso2)

console.log(media.toFixed(2))//tofixed funcao controla casa decimais (N) a qntd de casas 
console.log(media.toString)//reorna string , mas tbm retor binario se fizer toString(2)
//Number funcao , numer tipo
/* aqui se divide por zero e faz operacao com string "" ex.:
*/
console.log("10"/2)
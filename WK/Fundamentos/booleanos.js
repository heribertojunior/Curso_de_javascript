let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)
isAtivo =1 
console.log(!!isAtivo)// != nao 
console.log(!isAtivo)
console.log("os verdadeiros")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo=3))
console.log('Os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=0))
let nome =''
console.log(nome||'Desconhecido')//faz uma comparacao boolean que leva a primeira informacao verdadeira
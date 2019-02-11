console.log('a= ',a)
var a = 2 /*ele usa hosting automaticamente no caso do var e leva a variavel pro inicio do codigo ,
 ela fica undefinede pq ela so foi declarada a cima (var a ) mas n é atribuido valor a mesma
 incluindo dentro de uma função*/
console.log('a= ',a)
console.log('b= ',b)// da erro pois let n funciona hoisting
let b =3
console.log('b= ',b)
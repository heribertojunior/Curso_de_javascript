console.log('01)','1'==1)//comparado sem se importar com tipo 
console.log('02)','1'===1)//comparando estritamente incluindo o tipo
console.log('03)','2'!=2)//diferente
console.log('04)','2'!==2)//estritamente diferente incluindo tipo

const d1= new Date(0)
const d2= new Date(0)
console.log('05)',d1===d2)//falso pois compara o endereço na memoria 
console.log('06)',d1.getTime()===d2.getTime())//verdadeiro pos o valor é igual 
//melhor usar ===
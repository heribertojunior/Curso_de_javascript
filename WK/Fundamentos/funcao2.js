//armazenando função em uma variavel 
const soma = function(a,b){
    console.log(a+b)
}
 soma(2,3)

 //Armazenando uma função Arrow(funcao reduzida) em uma variavel 
 const soma2 = (a,b)=>{
    return a+b 
 }
 console.log(soma2(7,1))

 //Retorno  implicito 
 const sub = (a,b)=>a-b

 console.log(sub(7,8))
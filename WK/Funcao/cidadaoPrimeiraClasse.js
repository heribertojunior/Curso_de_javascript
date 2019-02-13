//funções sempre retornam algo quando nao especificado elas retornam undefined 
//criando de forma literal
function fun1(){}
//armazenar uma função em uma variavel 
const fun2 = function (){}
//armazenar dentro de um array
const array =[function(a,b){return a +b},fun1,fun2]
console.log(array[0](2,3))
//armazenar em um atributo de objeto 
const obj = {}
obj.falar =  function(){return 'Epa'}
console.log(obj.falar())
//passar função como parametro pra outra funcao 
function run (fun){
    fun()
}
run(function(){console.log('Executando')})
//Uma função pode retorna/conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)//mds que bagunça kk
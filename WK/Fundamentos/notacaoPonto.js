console.log(typeof console.log())//console.log() usa notação ponsto pra acessar algo dentro de um objeto
console.log(Math.ceil(6.1))//ceil arredonda 

const obj1 ={}
obj1.nome ='Bola'// notação ponto usada para criar um atributo dinamicamente
console.log(obj1.nome)

function obj (nome){
    this.nome =  nome // this serve para ser chamado fora da classe ou objeto
    this.exec =  function(){
        console.log("EXEC..")
    } 
}
 const obj2  = new obj('Cadeira')
 const obj3 = new obj('Mesa')
 console.log(obj2.nome)
 console.log(obj3.nome)
 obj3.exec()
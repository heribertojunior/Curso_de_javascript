class Pessoa{
    constructor(nome){
        this.nome =  nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)

    }
}
const p1 = new Pessoa('Joao')
p1.falar()
//construtor
const pessoa = nome =>{return{falar:()=>console.log(`Meu nome é ${nome}`)}}

const p2 = pessoa('EOQ')
p2.falar()

function criarp(nome){
    return{
        nome,
    } 
}
console.log(criarp('Heriberto'))

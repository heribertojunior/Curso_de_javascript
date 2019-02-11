// par Nome/Valor é isso em baixo 
const saudacao =  'Oi' //constesto lexico 1

function exec(){
    const saudacao = 'Fala Tu' //Contexto lexico 2 
    return saudacao

}
// Objeto sao grupos alinhados de Pares nome/valor

const cliente ={
    nome: 'Pedro',
    idade: 32,
    peso:90,
    endereco:{
        logradouro:'Rua legal ',
        numero:123
    }
}
console.log(saudacao)//contexto lexico 1 
console.log(exec())//contexto lexico 2 chamando a variavel dentro da funcao pelo return
console.log(cliente)
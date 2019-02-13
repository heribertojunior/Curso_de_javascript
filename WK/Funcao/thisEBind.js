const pessoa={
    saudacao:"Bom dia ",
    falar(){
        console.log(this.saudacao)//this esta se referenciando ao bloco anterior sem this da erro
    }
}
pessoa.falar()
const falar = pessoa.falar
falar()//this aponta pra um saudação que n existe conflito entre paradigmas

const falar2 =  pessoa.falar.bind(pessoa)//bind define um this , no caso foi escolhido o contexto pessoa
falar2()//assim funciona

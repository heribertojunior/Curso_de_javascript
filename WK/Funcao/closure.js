//[e] o escopo criado quando uma funcao [e] declarada
//esse escopo permite a funcao acessar e manipular variaveis externas a funcao

//Contexto lexico em acao
const x = 'Global'
function fora(){
   const  x =  'Local'
    function dentro(){
        return x
    }
    return dentro
}
const minhafuncao = fora()
console.log(minhafuncao())//acessa a variavel local x e n a que foi criada fora 

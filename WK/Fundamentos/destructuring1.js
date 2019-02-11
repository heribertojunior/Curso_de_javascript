// novo recurso ES2015


const pessoa = {
    nome:'Joyce',
    idade:21,
    endereco:{
        logradouro:  'Rua Maracanã',
        numero:346
    }
}
const {nome, idade}=pessoa //operador destruction tirando nome e idade do objeto
console.log(nome,idade)
const {nome:n, idade:i}= pessoa
console.log(n,i)
const{endereco:{logradouro:l,numero:num}}=pessoa
console.log(l,num)
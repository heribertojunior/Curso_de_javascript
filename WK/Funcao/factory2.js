function CriarProduto(nome,preco){
    return{
        nome:nome,
        preco:preco,
        desconto:preco-(0.1*preco)

    }
}
console.log(CriarProduto('IPAD',1250))
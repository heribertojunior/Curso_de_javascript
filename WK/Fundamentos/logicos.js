function compras(trab1,trab2){
    const comprarSorvete = trab1 || trab2
    const compraTv50 = trab1 && trab2 
   // const comprarTv32 = !!(trab1^trab2)//ou exclusivo "^"  bitwise xor  
    const comprarTv32 = trab1 != trab2//ou excluisvo
    const manterSaudavel = !comprarSorvete//operador Unario
    
    return { comprarSorvete,compraTv50,comprarTv32,manterSaudavel}
}
console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))
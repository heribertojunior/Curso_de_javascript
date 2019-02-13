function tratarErroElancar(erro){
    //throw new Error('...')
    //throw 10
    throw{
        nome:erro.name,
        msg: erro.message,
        data: new Date

    }
}

function imprimirNomeGritado(obj){
    try{
    console.log(obj.name.toUpperCase()+'!!!')
    }catch(e){
        tratarErroElancar(e)
    }finally{
        console.log('Finalmente')
    }
}
const obj ={name:'Heriberto'}
imprimirNomeGritado(obj)
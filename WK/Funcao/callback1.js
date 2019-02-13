const fabricante  = ["Mercedes","Auidi","BMW"]

function imprimir (nome,indice){
    console.log(`${indice+1}.${nome}`)
}
fabricante.forEach(imprimir);

fabricante.forEach(function (fabricantes){
    console.log(fabricantes)
})


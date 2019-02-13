function Carro(vmax = 200, delta = 5){
    //atributo privado
    let vatual = 0
    
    //metodo publico usando this
    this.acelerar =  function (){
        if(vatual+delta<=vmax){
            vatual += delta 
        }else{
            vatual = vmax
        }
        
    }
     //metodo publico
     this.getVatual = function(){
        return vatual
    }
    
}
//instanciando um objeto(criando)
const uno = new Carro
    uno.acelerar()
    console.log(uno.getVatual())
const ferrari = new Carro(350,200)//passando os valores do atrbuto no parametro 
    ferrari.acelerar()
    ferrari.acelerar()
    console.log(ferrari.getVatual())
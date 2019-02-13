function Pessoa(){
    this.idade = 0

    const self =  this
    setInterval(function(){//dispara outra função a partir do intervalo passado
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000)
}
new Pessoa
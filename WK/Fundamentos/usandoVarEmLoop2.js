const funcs = []
for(var i = 0 ;i<10;i++){
    funcs.push(function(){ //usado pra add valor
        console.log(i)
    })
}
funcs[2]()
funcs[8]()
//fica 10 pq var ta em escopo global e sobreescreve 
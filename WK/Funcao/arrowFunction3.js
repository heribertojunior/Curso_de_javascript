let comparaComThis = function(param){
    console.log(this === param)
}//this dentro de uam função === global
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)


let comparaComThisArrow = param => console.log(this===param)
comparaComThisArrow(global)//Falso pq foi criado dentro do modulo usando arrow logo o this é o proprio modulo
comparaComThisArrow(module.exports)//Verddeiro pq module.exports é o modulo
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)//Falso arrow function mais forte de Bind
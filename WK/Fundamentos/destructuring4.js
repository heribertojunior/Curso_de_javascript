function ran ([min=0,max=1000]){//usando array agora
  if(min>max) [min,max]=[max,min]//desestruturando o array pra trocar os valores 
  const valor = Math.random()*(max-min)+min//intervalo randomico
  return Math.floor(valor)
}
console.log(ran([10,1]))
console.log(ran([982]))
console.log(ran([]))
//console.log(ran()) //da erro man
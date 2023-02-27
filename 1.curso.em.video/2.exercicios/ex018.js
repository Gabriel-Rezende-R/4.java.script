let valores = [1,8,12,5,7,8,9]
console.log(valores)
console.log(" ")
for(let a=0; a < valores.length; a++){
    console.log(`Na posição ${a}, o valor é ${valores[a]}.`)
}

console.log(" ")
console.log("Com for-in")
for(let pos in valores){
    console.log(`Na posição ${pos}, o valor é ${valores[pos]}.`)
}
console.log(" ")
console.log("Buscando o valor 12")
console.log(valores.indexOf(12))
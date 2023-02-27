var idade = 66
console.log(`Você tem ${idade} anos.`)
if(idade < 16){
    console.log("Logo,não vota")
} else if(idade <18 || idade >65){
        console.log("Logo,voto opcional")
} else{
    console.log("Logo,voto obrigatório")
}
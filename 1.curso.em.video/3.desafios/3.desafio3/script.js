function contar(){
    var ini = document.getElementById("txti")
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    let resultado = document.getElementById('res')

    if(fim.value.length == 0 || passo.value.length == 0 || ini.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
        resultado.innerHTML = "Impossível contar !"
    } else{
        resultado.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p<=0){
            window.alert('Passo inválido! Considerando PASSO 1.')
            p =1
        }
        
        if(i < f){
            //Contagem crescente
            for(let c=1; c <=f ; c+= p){
            resultado.innerHTML += "\u{1F449} " + `${c} `}
        
        }else{
            //Contagem regressiva
            for(let c=i; c>=f; c -= p){
                resultado.innerHTML += "\u{1F449} " + `${c} `}
            }
        
    }
}

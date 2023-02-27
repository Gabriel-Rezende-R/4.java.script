function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
   // var hora = 21
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=0 && hora <=12){
        img.src = 'imagens/manha.png'
        document.body.style.background ='#b7b9bb'
    }else if(hora >12 && hora <=18){
        img.src = 'imagens/tarde.png'
        document.body.style.background ='#9b5d6c'
    }else{
        img.src = 'imagens/noite.png'
        document.body.style.background ='#43656c'
    }
}


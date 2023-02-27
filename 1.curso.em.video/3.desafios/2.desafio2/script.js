function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){window.alert("[ERRO] Verifique os dados e tente novamente!") }
    else{
        var fsexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsexo[0].checked){
            genero = "Homem"
            if(idade >=0 && idade <4){img.setAttribute("src",'imagens/bbhomem.png')}
            else if(idade>=4 && idade <7){img.setAttribute("src",'imagens/criancahomem.png')}
            else if(idade>=7 && idade <13){img.setAttribute("src",'imagens/kidb.jpeg')}
            else if(idade>=13 && idade <21){img.setAttribute("src",'imagens/adolescentm.jpeg')}
            else if(idade>=21 && idade <32){img.setAttribute("src",'imagens/jovemhomem.png')}
            else if(idade>=32 && idade <59){img.setAttribute("src",'imagens/homem.jpeg')}
            else{img.setAttribute("src",'imagens/1.png')}
        }
        else if(fsexo[1].checked){
            genero = "Mulher"
             if(idade>=0 && idade <4){img.setAttribute("src",'imagens/bbmulher.png')}
            else if(idade>=4 && idade <7){img.setAttribute("src",'imagens/girl.jpeg')}
            else if(idade>=7 && idade <13){img.setAttribute("src",'imagens/criancamulher.png')}
            else if(idade>=13 && idade <21){img.setAttribute("src",'imagens/tenng.jpeg')}
            else if(idade>=21 && idade<32){img.setAttribute("src",'imagens/jovemmulher.png')}
            else if(idade>=32 && idade<59){img.setAttribute("src",'imagens/woman.jpeg')}
            else{img.setAttribute("src",'imagens/idosamulher.png')}
        }   

        res.style.textAlign ="center"
        res.appendChild(img)
        res.innerHTML = `<br>Detectamos ${genero} com ${idade} anos.<br> <br>`
        res.appendChild(img)
        }
}
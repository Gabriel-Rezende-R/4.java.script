var agora = new Date()
var diaSem = agora.getDay()
/* Domigo = 0
    Segunda = 1
    Terça = 2
    Quarta = 3
    Quinta = 4
    Sexta = 5
    Sábado =6 */
console.log(diaSem)

//Switch funciona com dados pontuais e não intervalos. 
//Number and String.
switch(diaSem){
    case 0:  
        console.log('Domigo')
        break  //Must have
    case 1 : 
        console.log('Segunda')
        break  //Must have
    case 2:  
        console.log('Terça')
        break  //Must have
    case 3:  
        console.log('Quarta')
        break  //Must have
    case 4:
        console.log('Quinta')
        break  //Must have
    case 5:
        console.log('Sexta')
        break  //Must have
    case 6:
        console.log('Sábado')
        break  //Must have
    default:
        console.log("Dia inválido")
    break
}
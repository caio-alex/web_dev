function soma(n1, n2){
    return n1+n2
}
function subtracao(n1, n2){
    return n1-n2
}
function mult(n1, n2){
    return n1*n2
}
function divisao(n1, n2){
    if(n2 === 0) {
        return "Não é possivel dividir por zero"
    }
    return n1/n2
}

function calculadora(){
    let n1 = Number(prompt('primeiro valor'))
    let n2 = Number(prompt('segundo valor'))
    let op = prompt(`${n1} e ${n2} \n + - * /`)

    let saida = document.getElementById('saida')
    let funcao = document.getElementById('funcaoutilizada')

    saida.innerHTML = null
    funcao.innerHTML = null

    switch(op){
        case '+':
          
            saida.innerHTML += `<p>${n1} + ${n2} = ${soma(n1, n2)}</p>`
            funcao.innerHTML += `<p>Funcao adicao(n1, n2) com return n1+n2</p>`
            break
        case '-':
            
            saida.innerHTML += `<p>${n1} - ${n2} = ${subtracao(n1, n2)}</p>`
            funcao.innerHTML += `Funcao subtracao(n1, n2) com return n1-n2`
            break
        case '*':
            
            saida.innerHTML += `<p>${n1} X ${n2} = ${mult(n1, n2)}</p>`
            funcao.innerHTML += `Funcao multplicacao(n1, n2) com return n1*n2`
            break
        case '/':
            
            saida.innerHTML += `<p>${n1} / ${n2} = ${divisao(n1, n2)}</p>`
            funcao.innerHTML += `Funcao divisao(n1, n2) com return n1/n2`
            break
    }
}
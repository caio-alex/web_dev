 function somar(){
     let n1 = Number(window.prompt("Digite um número: "))
     let n2 = Number(window.prompt("Digite um número: "))
     let res = document.querySelector('section#res');
    let soma = n1 + n2
     res.innerHTML = `<p>A soma entre ${n1} e ${n2} é ${soma}`
 }

 function media(){
     let n1 = Number(window.prompt("nota 1: "))
    let n2 = Number(window.prompt("nota 2: "))
    res = document.querySelector('section#res');
    let media = (n1+n2)/2
    res.innerHTML = `<p> A média entre ${n1} e ${n2} é ${media}`
}

// As variáveis declaradas aqui fora são consideradas GLOBAIS //e funcionam dentro do programa inteiro 
let contador = 0
let cliques = document.querySelector('section#cliques')
function contar() {
    contador ++
    cliques.innerHTML = `<p>${contador} cliques</p>`
}

function limpar(){
    contador = 0
    cliques.innerHTML = null
}
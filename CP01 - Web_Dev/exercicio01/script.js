function verificarNumero(){
    let num = Number(window.prompt("digite um número: "))
    let res = document.querySelector('section#res')
    if (num == 0)
    res.innerHTML = `<p>O número é zero!</p>`
    else if (num > 0)
    res.innerHTML = `<p>O número ${num} é positivo!</p>`
    else
    res.innerHTML = `<p>O número ${num} é negativo!</p>`   
}
function media(){
    let  n1 = Number(window.prompt("nota 1 "))
    let  n2 = Number(window.prompt("nota 2 "))
    res = document.querySelector('section#res')
    nota1 = document.querySelector('section#notas')
    nota2 = document.querySelector('section#notas')

    notas.innerHTML = `<p>Nota 1: ${n1} <br><br> Nota 2: ${n2}</p>`
    let media = (n1+n2)/2
    if (media < 6)
    res.innerHTML = `<p>A média ${media} te Reprova!</p><br>` 
    else
    res.innerHTML = `<p>A média ${media} te Aprova!</p>`
}
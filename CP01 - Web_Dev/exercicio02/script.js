function verificarIdade(){
    let idade = Number(window.prompt("Digite a sua idade: "))
    let res = document.querySelector('section#res')
    if (idade >= 18 && idade <=70)
    res.innerHTML = `<p>idade = ${idade} | Voto obrigatório </p>`
    else if (idade < 16)
    res.innerHTML = `<p>idade = ${idade} | Não pode votar </p>`
    else
    res.innerHTML = `<p>idade = ${idade} | Voto facultativo </p>`
}
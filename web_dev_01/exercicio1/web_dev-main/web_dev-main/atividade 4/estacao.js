function estacao(){
    let mes = prompt('digite o mês')
    let saida = document.querySelector('section#saida')
    let estacao
    switch(mes.toUpperCase()){
        case'FEVEREIRO': case'MARCO': case'ABRIL':
        estacao = 'Verão'
        break;
        case'MAIO': case'JUNHO': case'JULHO':
        estacao = 'Outono'
        break;
        case'AGOSTO': case'SETEMBRO': case'OUTUBRO':
        estacao = 'Inverno'
        break;
        case'NOVEMBRO': case'DEZEMBRO': case'JANEIRO':
        estacao = 'Primavera'
        break;
        default:
            estacao = 'Indefinida'
            break
    }
    saida.innerHTML = `<p>${estacao}</p>`
}
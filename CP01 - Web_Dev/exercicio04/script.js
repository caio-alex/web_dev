const comprarFruta = fruta => {
    switch (fruta) {
        case 'maçã':
            return 'Não vendemos esta fruta aqui.'
        case 'banana':
            return 'Estamos com escassez de banana.'
        
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo.'
       
        default:
            return 'Erro! Insira uma das opções: "maçã", "kiwi" ou "melancia".'
    }
}

console.log(comprarFruta('maçã'))
console.log(comprarFruta('banana'))
console.log(comprarFruta('melancia'))

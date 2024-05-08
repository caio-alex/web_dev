function comprarFruta()
{
    fruta = prompt("Escolha um fruta")
    switch (fruta) {
        case 'maçã':
            console.log ('Não vendemos esta fruta aqui.')
        case 'banana':
            console.log ('Estamos com escassez de banana.')
        
        case 'melancia':
           console.log('Aqui está, são 3 reais o quilo.')
       
        default:
            console.log('Erro! Insira uma das opções: "maçã", "banana" ou "melancia".')
    }
}
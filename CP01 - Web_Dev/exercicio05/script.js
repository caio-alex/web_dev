var tipo = comprarCarro => {
    switch(comprarCarro) {
        case 'hatch':
            console.log("Compra efetuada com sucesso");
            break;
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            console.log("Tem certeza de que não prefere um modelo hatch?");
            break;
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui");
    }
}

// Testando com algumas opções
console.log(tipo('hatch')); // Compra efetuada com sucesso
console.log(tipo('sedan')); // Tem certeza de que não prefere um modelo hatch?
console.log(tipo('bicicleta'));
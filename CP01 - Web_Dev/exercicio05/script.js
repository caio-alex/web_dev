function comprarCarro() {
    let tipo = prompt("Qual é o tipo de carro?: ")
    switch(tipo) {
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
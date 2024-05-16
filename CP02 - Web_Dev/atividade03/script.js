function inicializarCandidatos() {
    return [
        { nome: "Beraldo", votos: 0 },
        { nome: "Lucas", votos: 0 },
        { nome: "Igor", votos: 0 },
        { nome: "Luciano", votos: 0 },
        { nome: "Rafael", votos: 0 }
    ];
}

function exibirCandidatos(candidatos) {
    let mensagem = "Escolha um candidato para votar:\n";
    candidatos.forEach((candidato, index) => {
        mensagem += `[${index + 1}] ${candidato.nome}\n`;
    });
    return mensagem;
}

function registrarVoto(candidatos, escolha) {
    if (escolha >= 1 && escolha <= candidatos.length) {
        candidatos[escolha - 1].votos += 1;
        alert(`Voto registrado para ${candidatos[escolha - 1].nome}`);
    } else {
        alert("Escolha inválida. Tente novamente.");
    }
}

function exibirResultado(candidatos) {
    let resultado = "Resultado final da votação:\n";
    let vencedor = candidatos[0]
    candidatos.forEach(candidato => {
        resultado += `${candidato.nome}: ${candidato.votos} votos\n `;
        if (candidato.votos>vencedor.votos){
            vencedor = candidato
        }
    });
    alert(`o vencedor é ${vencedor.nome}`)
    alert(resultado);
}

function simulacaoVotacao() {
    let candidatos = inicializarCandidatos();
    let continuar = true;

    while (continuar) {
        let mensagem = exibirCandidatos(candidatos);
        let escolha = parseInt(prompt(mensagem));
        
        if (isNaN(escolha)) {
            alert("Entrada inválida. Por favor, digite um número.");
            continue;
        }

        registrarVoto(candidatos, escolha);
        continuar = confirm("Deseja continuar a votação?");
    }

    exibirResultado(candidatos);
}
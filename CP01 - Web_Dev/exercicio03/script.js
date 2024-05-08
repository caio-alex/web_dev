function calcularIMC(peso, altura){
    return peso / (altura**2) 
}

function obterFaixaIMC(imc) {
    if (imc < 18.5) {
        return "abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "normal";
    } else if (imc >= 25 && imc < 30) {
        return "sobrepeso";
    } else {
        return "obesidade";
    }
}

function calcula_pessoas(){
    let pessoas = []

    for(let i = 0; i < 5; i++){
    let nome = prompt("Nome: "+ (i + 1))
    let peso = parseFloat(prompt("Peso(Kg): "+nome))
    let altura = parseFloat(prompt("Altura(m): "+nome))
    pessoas.push({
        nome: nome, peso: peso, altura:altura
    })
}

let res = document.getElementById("resultados");
res.innerHTML = "";

for(let i = 0; i < pessoas.length; i++){
    let pessoa = pessoas[i]
    let imc = calcularIMC(pessoa.peso, pessoa.altura)
    let faixaIMC = obterFaixaIMC(imc)
    res.innerHTML +=  "<p> IMC de " + pessoa.nome + " é: " + imc.toFixed(2) + ". está na faixa de "+faixaIMC+"</p>";
    }
}
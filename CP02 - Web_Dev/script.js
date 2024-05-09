function soma(n1, n2){
    return n1+n2
}
function subtracao(n1, n2){
    return n1-n2
}
function mult(n1, n2){
    return n1*n2
}
function divisao(n1, n2){
    if(n2 === 0) {
        return "Não é possivel dividir por zero"
    }
    return n1/n2
}

function calculadora(){
    let continuar = true;

  while (continuar) {
    let n1 = Number(prompt('Primeiro valor:'));
    let n2 = Number(prompt('Segundo valor:'));
    let op = prompt(`${n1} e ${n2} \n + - * /:`);

    let saida = document.getElementById('saida');
    let funcao = document.getElementById('funcaoutilizada');
    document.getElementById('historico').appendChild(itemLista);
    
    let itemLista = document.createElement('li');
    itemLista.textContent = `${n1} ${op} ${n2} = ${resultado}`;

    saida.innerHTML = null;
    funcao.innerHTML = null;

    switch (op) {
      case '+':
        saida.innerHTML += `<p>${n1} ${op} ${n2} = ${soma(n1, n2)}</p>`;
        funcao.innerHTML += `<p>Função adição(n1, n2) com return n1+n2</p>`;
        break;
      case '-':
        saida.innerHTML += `<p>${n1} ${op} ${n2} = ${subtracao(n1, n2)}</p>`;
        funcao.innerHTML += `Função subtração(n1, n2) com return n1-n2`;
        break;
      case '*':
        saida.innerHTML += `<p>${n1} ${op} ${n2} = ${mult(n1, n2)}</p>`;
        funcao.innerHTML += `Função multiplicação(n1, n2) com return n1*n2`;
        break;
      case '/':
        saida.innerHTML += `<li>${n1} ${op} ${n2} = ${resultado}</li>`;
        funcao.innerHTML += `Função divisão(n1, n2) com return n1/n2`;
        break;
      default:
        saida.innerHTML += '<p>Operador inválido!</p>';
    }

    continuar = confirm("Deseja realizar outro cálculo?");
  }
}
function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
      return "Erro: Divisão por zero";
  }
  return a / b;
}

function calculadora() {
  let continuar = true;

  while (continuar) {
      let operacao = prompt("Selecione a operação:\n1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão");

      if (!['1', '2', '3', '4'].includes(operacao)) {
          alert("Opção inválida!");
          continue;
      }

      let num1 = parseFloat(prompt("Digite o primeiro número:"));
      let num2 = parseFloat(prompt("Digite o segundo número:"));

      if (isNaN(num1) || isNaN(num2)) {
          alert("Apenas números!");
          continue;
      }

      let resultado;
      switch (operacao) {
          case '1':
              resultado = somar(num1, num2);
              alert(`Resultado: ${resultado}, usando função somar(a, b) { return a + b; } `);
              break;
          case '2':
              resultado = subtrair(num1, num2);
              alert(`Resultado: ${resultado}, usando função subtrair(a, b) { return a - b; } `);
              break;
          case '3':
              resultado = multiplicar(num1, num2);
              alert(`Resultado: ${resultado}, usando função multiplicar(a, b) { return a * b; } `);
              break;
          case '4':
              resultado = dividir(num1, num2);
              alert(`Resultado: ${resultado}, usando função dividir(a, b) { return a / b; } `);
              break;
      }
      continuar = confirm("Deseja realizar outro cálculo?");
  }
}
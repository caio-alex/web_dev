function verificarFruta() {
  let fruta = prompt("escolha a fruta: ")
    switch (fruta) {
      case "maçã":
        console.log("Não vendemos esta fruta aqui.");
        break;
      case "banana":
        console.log("Estamos com escassez de banana.");
        break;
      case "melancia":
        console.log("Aqui está, são 3 reais o quilo.");
        break;
      default:
        console.log(`${fruta} não faz parte das frutas que vendemos.`);
    }
  }

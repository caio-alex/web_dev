function IR(salario_bruto){
    if (salario_bruto<2800){
        return 0
    } else if (salario_bruto >=2800 && salario_bruto < 5000){
        return salario_bruto*0.15;
    } else {
        return salario_bruto * 0.27;
    }
}

function FGTS(salario_bruto){
    return salario_bruto*0.08
}

function INSS(salario_bruto){
    return salario_bruto*0.2
}

function SL(salario_bruto){
    let ir = IR(salario_bruto)
    let fgts = FGTS(salario_bruto)
    let inss = INSS(salario_bruto)
    let salario_liquido = salario_bruto-ir-fgts-inss
    return salario_liquido
}

function calcula_funcionarios(){
    let continuar = true

    while(continuar){
        let salario_bruto = parseFloat(prompt("diga o seu salário"))
        if(isNaN(salario_bruto) || salario_bruto <0){
            alert("Inválido")
            continue
        }

        let ir = IR(salario_bruto)
        let fgts = FGTS(salario_bruto)
        let inss = INSS(salario_bruto)
        let salario_liquido = SL(salario_bruto)

        alert(`Salário Bruto: R$ ${salario_bruto.toFixed(2)}
Imposto de Renda: R$ ${ir.toFixed(2)}
axa Fundo de Garantia do Tempo de Serviço: R$ ${fgts.toFixed(2)}
Taxa Seguro Social: R$ ${inss.toFixed(2)}
Salário Líquido: R$ ${salario_liquido.toFixed(2)}`);
        continuar=confirm("Deseja calcular novo salário?")
    }
}

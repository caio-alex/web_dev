var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')
var r = document.getElementById('r')
var re = document.getElementById('re')

function soma(){
    var resultado = n1.valueAsNumber + n2.valueAsNumber
    if(isNaN(resultado))
       r.textContent = 'Você não digitou nada'
    else
         r.textContent = resultado
    
}
function sub(){
    var resultado = n1.valueAsNumber - n2.valueAsNumber
    if(isNaN(resultado))
       re.textContent = 'Você não digitou nada'
    else
         re.textContent = resultado
    
}
function mult(){
    var resultado = n1.valueAsNumber * n2.valueAsNumber
    if(isNaN(resultado))
       r.textContent = 'Você não digitou nada'
    else
         r.textContent = resultado
    
}
function divisao(){
    var resultado = n1.valueAsNumber / n2.valueAsNumber
    if(isNaN(resultado))
       r.textContent = 'Você não digitou nada'
    else
         r.textContent = resultado
    
}

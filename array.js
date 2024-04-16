/*armazenar uma lista de vetores usando colchetes;
Pode adiconar elemntos no array existente com a função push
e obter seu tamanho com a propriedade lenght */

var frutas = ['Banana', 'Maça', 'Abacaxi', 'Pera']

console.log('-- Frutas --');
console.log('-- Quantidade de elementos em frutas: ' + frutas.length);
console.log(' -- inclindo a Melancia no array --')
frutas.push('Melancia')
console.log('-- Nova Quantidade de elementos em frutas --' + frutas.length)
console.log('Itens armazenado em Frutas')
console.log(frutas)



var veiculos = ['Polo', 'Virtus', 'T-Cross', 'Nivus', 'Jetta']

console.log('--- Veiculos ---')

console.log('imprimindo um veiculo de cada vez')
console.log(veiculos[0]);
console.log(veiculos[1]);
console.log(veiculos[2]);
console.log(veiculos[3]);
console.log('Elementos no array de veiculos ');
console.log(veiculos.length);
veiculos.push('golf');
console.log('-- Elemntos no array veiculos-- ' + veiculos.length);

console.log('-- elemento de repeticao for --')
 /* for(variavel de controle inicial I;condição de parada enquanto o I < tal; incremento do I++) */
for(i=0; i<veiculos.length;i++) console.log(veiculos[i])
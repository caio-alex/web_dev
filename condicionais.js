// let A = 10
// let B = 15
// let C = 20
// let D = 25
// if(A >B) console.log('A é maior que B'); else console.log('B é maior que A')
// if((A >B) || (A>C) || (A>D))console.log('A é maior'); else console.log('A não é maior')

// var opcao = 3;

// switch(opcao){
//     case 1: Console.log('abcde');
// break;
//     case 2: Console.log('fghij')
// break;
// }
// var vetor = ['Joao', 'Ana', 'Maria']
// for(i=0;i<10;i++)
// console.log(vetor[i])
// console.log('posição' + i)

var opcao = 'S';
i = 0;
do
{
    console.log('enquanto opção = s não sai daqui');
    if(i >=10)
        opcao ='n';
    i++;
}
while(opcao == 's' || opcao=='S')
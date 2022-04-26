// ordenação esta pegando somento o primeiro número
let valores = ['8', '1', '7', '43', '2', '9']

console.log(valores)

for(let pos=0; pos < valores.length; pos++){
    console.log('A posicao ${pos} tem o valor ${valores[pos}]')

    console.log("A posicao" + pos + "tem o valor ${valores[pos}]")
}

//Calcular a méida de todos os números de um array

var n = valores.length
var soma = 0

    for (var i=0; i < n; i++){
        soma += valores [i];
    }
    var media = soma/nconsole.log("Média é" + media)

//Localizar o maior valor dentro de um array de números

let arrayNumeros = [8,1,7,43,2,9]]

var max =0;

    for (var i=0; i < arrayNumeros.length; i++){
       if (arrayNumeros[i] > max){
           max = arrayNumeros[i];
       }
    }

    console.log(max)
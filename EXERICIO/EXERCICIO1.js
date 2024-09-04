/*1) Observe o trecho de código abaixo: 
int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?*/

function KSoma(ind){
    var soma = 0;
    var k = 0;

    while(k < ind){
        soma += k;
        console.log(k+", "+ soma);
        k++;
    }
    return soma;
}

var ind = 13;
console.log("O valor de SOMA é:" + KSoma(ind));
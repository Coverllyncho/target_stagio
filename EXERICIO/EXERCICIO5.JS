/*5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;*/


function Inverte(palavra){
    var palavrainvertida = '';
    
    for(var i = 0; i <= palavra.length; i++){
        palavrainvertida +=  palavra.charAt(palavra.length-i);
    }

    return palavrainvertida;
}

var palavra = "terereu"; //palavra de entrada
console.log("A palavra "+palavra+" invertida é: "+Inverte(palavra));




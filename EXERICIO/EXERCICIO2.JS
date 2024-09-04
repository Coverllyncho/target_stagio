/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

fibos{ Fn = Fn-1 + Fn-2

*/

function InFibonacci(num) {
    var soma = 0;
    var fn1 = 0;
    var fn2 = 1;
    var i = true;
  
    while (i) {
      soma = fn1 + fn2;
      fn2 = fn1;
      fn1 = soma;

      console.log(soma + ' ' + num);
      
      if (soma === num) {
        return true;
      } else if (soma > num) {
        return false;
      }
    }
  }
  
  var num = 55; //numero de entrada
  var bul = InFibonacci(num);
  if (bul) {
    console.log(num + ' está na sequencia de fiboo');
  } else {
    console.log(num + ' não está na sequencia de fiboo');
  }

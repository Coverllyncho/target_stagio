/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  */

function Percentual(estadofat, faturamentototal){
    percentual = (estadofat.faturamento / faturamentoTotal) *100;    
    percentual = Math.round(percentual);
    console.log("O percentual de representacao de "+estadofat.estado+" é de "+percentual+"%");


   // return Math.round((estado/mensal)*100);

}
/*
var sp = 67836.43;
var rj  = 36678.66;
var mg  = 29229.88;
var es  = 27165.48;
var ots  = 19849.53;

var mensal = sp + rj + mg + es + ots;
console.log(mensal);

console.log("O percentual de representacao de é "+Percentual(sp, mensal)+"%");
console.log("O percentual de representacao de é "+Percentual(rj, mensal)+"%");
console.log("O percentual de representacao de é "+Percentual(mg, mensal)+"%");
console.log("O percentual de representacao de é "+Percentual(es, mensal)+"%");
console.log("O percentual de representacao de é "+Percentual(ots, mensal)+"%");*/


let lista = [{estado: 'SP', faturamento: 67836.43}, 
            {estado: 'RJ', faturamento: 36678.66}, 
            {estado: 'MG', faturamento: 29229.88}, 
            {estado: 'ES', faturamento: 27165.48}, 
            {estado: 'Outros', faturamento: 19849.53}];

var faturamentoTotal = 0

for(var i = 0; i < lista.length; i++){
    faturamentoTotal += lista[i].faturamento;
}
//console.log(faturamentoTotal);
for(var i = 0; i < lista.length; i++){
    Percentual(lista[i], faturamentoTotal);
}

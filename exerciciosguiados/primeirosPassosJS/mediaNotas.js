let nota1= parseFloat(prompt("digite a nota do primeiro bimestre"));
let nota2= parseFloat(prompt("digite a nota do segundo bimestre"));
let nota3= parseFloat(prompt("digite a nota do terceiro bimestre"));
let nota4= parseFloat(prompt("digite a nota do quarto bimestre"));
function media(nota1,nota2,nota2,nota4){
    let soma=nota1+nota2+nota3+nota4;
    return soma/4
}
let notafinal= media(nota1,nota2,nota3,nota4)
if(notafinal>=7){
    alert(notafinal+" passou")
}else if(notafinal <7&&notafinal>=5){
    alert(notafinal+" recuperaçao")   
}else{
    alert(notafinal+" reprovado")   
}

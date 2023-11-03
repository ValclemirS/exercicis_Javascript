let peso= 70
let altura= 1.70

function imc(peso,altura){
    let calculo=peso/Math.pow(altura,2)
  return calculo
}
let imcDaPessoa= imc(peso,altura)
console.log(imcDaPessoa)
if(imcDaPessoa <16){
    console.log("abaixo de 16 desnutrição grave.")
}else if(imcDaPessoa >=16&&imcDaPessoa<=16.9){
    console.log("16 a 16,9 kg/m² - Muito abaixo do peso")
}else if(imcDaPessoa >=17&&imcDaPessoa<=18.4){
    console.log("17 a 18,4 kg/m² - Abaixo do peso")
}else if(imcDaPessoa >=18.5&&imcDaPessoa<=24.9){
    console.log("18,5 a 24,9 kg/m² - Peso normal")
}else if(imcDaPessoa >=25&&imcDaPessoa<=29.9){
    console.log("25 a 29,9 kg/m² - Acima do peso")
}else if(imcDaPessoa >=30&&imcDaPessoa<=34.9){
    console.log("30 a 34,9 kg/m² - Obesidade grau I")
}else if(imcDaPessoa >=35&&imcDaPessoa<=40){
    console.log("35 a 40 kg/m² - Obesidade grau II")
}else{
    console.log("maior que 40 kg/m² - Obesidade grau III...")
}

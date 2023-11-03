const{gets,print}= require('./export.js') ;

const jose= gets()
let salario= jose.salario

function desconto(){
   if(salario>=0&&salario<1100){
      return salario*(5/100)
   }else if(salario>=1100.1&&salario<2500){
      return salario*(10/100)
   }else{
      return salario*(15/100)
   }
}
let total=salario-desconto()+jose.beneficios

print(`o funcionario jose tem ${total} para ser transferido`)

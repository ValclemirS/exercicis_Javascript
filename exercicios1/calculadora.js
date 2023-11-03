/*Operadores: Crie um programa que solicite ao usuário dois números
e exiba o resultado da soma, subtração, multiplicação e divisão desses números.*/
alert('bem vindo')
let opc=Number(prompt('selcione uma opçao\n 1-continua\n 2-finalizar'))

if (opc==1) {
    function mult(num,num1){
        return num*num1
      }
      function soma(num,num1){
          return num+num1
      }
      function sub(num,num1){
          return num-num1
      }
      function div(num,num1){
          return num/num1
      }
      let num1= Number(prompt('digite um numero:'))
      let num= Number(prompt('digite um numero:'))
      if (num&&num1 >0 ||num&&num1<0) {
        let resultado= mult(num,num1)
      let resultado1= sub(num,num1)
      let resultado2= soma(num,num1)
      let resultado3= div(num,num1)
      let Operadores= prompt(["Selecione uma operaçao matematica:\n *\n -\n /\n +\n"])
      if (Operadores=='*','+','-','/') {
        switch (Operadores) {
            case '*':
                function mult(num,num1){
                    return num*num1
                    }
                    alert("o resultado e = "+resultado)
                break;
            case '+':
                function soma(num,num1){
                    return num+num1
                    }
                    alert("o resultado e = "+resultado2)
                break;
            case '-':    
                function sub(num,num1){
                    return num-num1
                }
                alert("o resultado e = "+resultado1)
                break;
            case '/':    
                function div(num,num1){
                    return num/num1
                }
                alert("o resultado e = "+resultado3)
                break;
            default:
                alert("obrigado por ultilizar nossos serviços")
                break;
        }
        alert("obrigado por ultilizar nossos serviços")

      }else{
         alert('selecione uma opçao valida')   
      }
      } else {
        alert('porfavor digite um numero valido')
        opc=Number(prompt('selcione uma opçao\n 1-continua\n 2-finalizar'))
        if (opc==1) {
            function mult(num,num1){
                return num*num1
              }
              function soma(num,num1){
                  return num+num1
              }
              function sub(num,num1){
                  return num-num1
              }
              function div(num,num1){
                  return num/num1
              }
              let num1= Number(prompt('digite um numero:'))
              let num= Number(prompt('digite um numero:'))
              if (!isNaN(num) && !isNaN(num1)) {
                let resultado= mult(num,num1)
              let resultado1= sub(num,num1)
              let resultado2= soma(num,num1)
              let resultado3= div(num,num1)
              let Operadores= prompt(["Selecione uma operaçao matematica:\n *\n -\n /\n +\n"])
              if (Operadores=='*','+','-','/') {
                switch (Operadores) {
                    case '*':
                        function mult(num,num1){
                            return num*num1
                            }
                            alert("o resultado e = "+resultado)
                        break;
                    case '+':
                        function soma(num,num1){
                            return num+num1
                            }
                            alert("o resultado e = "+resultado2)
                        break;
                    case '-':    
                        function sub(num,num1){
                            return num-num1
                        }
                        alert("o resultado e = "+resultado1)
                        break;
                    case '/':    
                        function div(num,num1){
                            return num/num1
                        }
                        alert("o resultado e = "+resultado3)
                        break;
                    default:
                        alert("obrigado por ultilizar nossos serviços")
                        break;
                }
                alert("obrigado por ultilizar nossos serviços")
        
              }else{
                 alert('selecione uma opçao valida')   
              }
      }
}else if (opc !=1){
    alert("obrigado por ultilizar nossos serviços")
}
      }
    }else if (opc !=1){
        alert("obrigado por ultilizar nossos serviços")
    }
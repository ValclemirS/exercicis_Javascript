class pessoa{
    nome;
    peso;
    altura;
    constructor(nome,peso,altura){
        this.nome=nome;
        this.peso=peso;
        this.altura=altura;
    }
    imc(){
      let  imc=this.peso/Math.pow(this.altura,2)
        return imc
    }
    seuimc(){
        const imc= this.imc()
        if(imc<16){
            return("abaixo de 16 desnutrição grave.")
        }else if(imc >=16&&imc<=16.9){
            return("16 a 16,9 kg/m² - Muito abaixo do peso")
        }else if(imc >=17&&imc<=18.4){
            return("17 a 18,4 kg/m² - Abaixo do peso")
        }else if(imc >=18.5&&imc<=24.9){
            return("18,5 a 24,9 kg/m² - Peso normal")
        }else if(imc >=25&&imc<=29.9){
            return("25 a 29,9 kg/m² - Acima do peso")
        }else if(imc >=30&&imc<=34.9){
            return("30 a 34,9 kg/m² - Obesidade grau I")
        }else if(imc >=35&&imc<=40){
            return("35 a 40 kg/m² - Obesidade grau II")
        }else{
            return("maior que 40 kg/m² - Obesidade grau III...")
        }
    }
   
}
let jose=new pessoa("clemir",30,1.50)
console.log(jose)



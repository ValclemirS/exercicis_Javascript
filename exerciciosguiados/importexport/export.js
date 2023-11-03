class trabalhador{
    name;
    salario;
    beneficios;
    constructor(name,salario,beneficios){
        this.name=name
        this.salario=salario
        this.beneficios=beneficios
    }
    
}
function gets(){
let jose= new trabalhador("jose",2000,250)
    return jose
    
}
function print(texto){
    console.log(texto)
}

module.exports={gets,print}


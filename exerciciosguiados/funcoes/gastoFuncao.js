class carro {
    marca;
    cor;
    gastoporKM;
    constructor(marca,cor,gastoporKM){
        this.marca=marca;
        this.cor=cor;
        this.gastoporKM=gastoporKM;
    }
    calcularGasto(km,price){
        return km*this.gastoporKM*price
    }
}
const carro1= new carro("honda","red",30)
console.log(carro1.calcularGasto(50,5))
/*Crie uma classe chamada “Círculo” que possua um atributo para armazenar o raio e 
métodos para calcular a área e o perímetro do círculo.
A = π * r²
C = 2 * π * r
*/
class circulo {
    raio;
    pi=3.14;
constructor(raio,pi){
    this.raio=raio;
    this.pi=pi || 3.14;
}
calcularArea(){
    return this.pi*Math.pow(this.raio,2);
}
calcularPerimetro(){
    return this.pi*2*this.raio
}
}
const cycle= new circulo(10)
const cycle1= cycle.calcularArea()
console.log(cycle1)
console.log(cycle.calcularPerimetro())

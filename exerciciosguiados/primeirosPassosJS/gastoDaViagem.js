class Viagem {
    constructor(priceDaGasolina, distancia, consumo) {
      this.priceDaGasolina = priceDaGasolina;
      this.distancia = distancia;
      this.consumo = consumo;
    }
  
    gastoPorDistancia() {
      return this.distancia / this.consumo;
    }
    gastoMedioGasolina() {
      return this.gastoPorDistancia() * this.priceDaGasolina;
    }
  }
  
  let gasto = new Viagem(10, 100, 10);
  const gastoPorDistancia = gasto.gastoPorDistancia();
  const gastoMedioGasolina = gasto.gastoMedioGasolina();
  console.log("Gasto por Distância:", gastoPorDistancia);
  console.log("Gasto Médio de Gasolina:", gastoMedioGasolina);
 
  
let name = prompt("Digite o nome do seu produto");
let produto = parseFloat(prompt("Digite o valor do produto"));
let opcao = parseInt(prompt("Escolha a forma de pagamento:\n1 - À vista no débito -- 10% de desconto\n2 - Pix ou dinheiro físico -- 15% de desconto\n3 - 2x no cartão -- sem juros\n4 - Acima de 2x -- juros de 10%"));

if (opcao === 1) {
    let debito = produto - (produto * 0.10);
    alert(`O ${name} vai custar ${debito.toFixed(2)} reais`);
} else if (opcao === 2) {
    let debito = produto - (produto * 0.15);
    alert(`O ${name} vai custar ${debito.toFixed(2)} reais`);
} else if (opcao === 3) {
    let debito = produto;
    alert(`O ${name} vai custar ${debito.toFixed(2)} reais`);
} else if (opcao === 4) {
    let parcelas = parseInt(prompt("Digite o número de parcelas:"));
    let juros = 0.10;
    let valor = produto/parcelas;
    let parcelaComJuros =valor*(1+juros);
    let valorComJuros= parcelaComJuros*parcelas;
   
    alert(`O ${name} vai custar ${valorComJuros.toFixed(2)} reais em ${parcelas} parcelas de ${parcelaComJuros.toFixed(2)} reais cada.`);
}

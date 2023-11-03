/*Implemente uma classe chamada “ContaBancária” que possua 
atributos para armazenar o número da conta, nome do titular e saldo. Adicione métodos para realizar depósitos e saques*/
class ContaBancaria {
    constructor(nomeTitular, numeroConta) {
        this.numeroConta = numeroConta;
        this.nomeTitular = nomeTitular;
    }

    exibirUsuario() {
        console.log(`O usuário ${this.nomeTitular} possui a conta ${this.numeroConta}`);
    }
}

class Banco extends ContaBancaria {
    constructor(nomeTitular, numeroConta, saldo) {
        super(nomeTitular, numeroConta);
        this.saldo = saldo;
    }

    exibirSaldo() {
        console.log(`O usuário ${this.nomeTitular} que possui a conta ${this.numeroConta} tem o saldo ${this.saldo}`);
    }

    sacarSaldo(saque) {
        if (this.saldo >= saque) {
            this.saldo -= saque;
            console.log(`Saque de ${saque} realizado. Novo saldo: ${this.saldo}`);
        } else {
            console.log("Saldo insuficiente");
        }
    }
    depositarSaldo(deposito) {
            this.saldo += deposito;
            console.log(`deposito de ${deposito} realizado. Novo saldo: ${this.saldo}`);
           
}
}
const clemir = new Banco("Clemir", 111, 1000.00);
clemir.exibirSaldo(); 
clemir.sacarSaldo(100); 
clemir.depositarSaldo(100);

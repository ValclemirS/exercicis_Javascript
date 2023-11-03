/*Implemente uma classe chamada “Aluno” que possua atributos para armazenar o nome, a matrícula e 
as notas de um aluno. Adicione métodos para calcular a média das notas e 
verificar a situação do aluno (aprovado ou reprovado).*/
class Aluno {
    constructor(nome, matricula, notas) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }

    calcularMedia() {
        if (this.notas.length === 0) {
            return 0;
        }

        const somaNotas = this.notas.reduce((total, nota) => total + nota, 0);
        return somaNotas / this.notas.length;
    }

    verificarSituacao() {
        const media = this.calcularMedia();
        if (media >= 7) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }
}

// Exemplo de uso:
const notasDoAluno = [8, 9, 7.5, 6.5];
const aluno = new Aluno("João", "2023001", notasDoAluno);

console.log(`Nome: ${aluno.nome}`);
console.log(`Matrícula: ${aluno.matricula}`);
console.log(`Notas: ${aluno.notas.join(", ")}`);
console.log(`Média: ${aluno.calcularMedia()}`);
console.log(`Situação: ${aluno.verificarSituacao()}`);

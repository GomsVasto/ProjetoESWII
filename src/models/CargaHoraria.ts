type TipoAtividade = "Ensino" | "Pesquisa" | "Extensão" | "Gestão";

class Atividade {
    nome: string;
    tipo: TipoAtividade;
    horas: number;

    constructor(nome: string, tipo: TipoAtividade, horas: number) {
        this.nome = nome;
        this.tipo = tipo;
        this.horas = horas;
    }
}

export class CargaHoraria {
    docente: string;
    ano: number;
    semestre: number;
    atividades: Atividade[];

    constructor(docente: string, ano: number, semestre: number) {
        this.docente = docente;
        this.ano = ano;
        this.semestre = semestre;
        this.atividades = [];
    }

    adicionarAtividade(nome: string, tipo: TipoAtividade, horas: number): void {
        this.atividades.push(new Atividade(nome, tipo, horas));
    }

    calcularTotalHoras(): number {
        return this.atividades.reduce((total, atividade) => total + atividade.horas, 0);
    }

    listarAtividades(): void {
        console.log(`Atividades do docente ${this.docente} (${this.ano} - ${this.semestre}º semestre):`);
        this.atividades.forEach((atividade, index) => {
            console.log(`${index + 1}. ${atividade.nome} - ${atividade.tipo} - ${atividade.horas} horas`);
        });
        console.log(`Total de horas: ${this.calcularTotalHoras()}`);
    }
}


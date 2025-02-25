type TipoAtividade = "APME" | "AAE" | "AO" | "API" | "AE" | "AGIR" | "AQC";

import { Atividade } from "./Atividade";
import { Disciplina } from "./DIsciplina";

export class PidRid {
    docente: string;
    ano: number;
    semestre: number;
    atividades: Atividade[];
    disciplinas: Disciplina[];

    constructor(docente: string, ano: number, semestre: number) {
        this.docente = docente;
        this.ano = ano;
        this.semestre = semestre;
        this.atividades = [];
        this.disciplinas = [];
    }

    adicionarAtividade(tipo: TipoAtividade, chAtividades: number[]): void {
        this.atividades.push(new Atividade(tipo, chAtividades));
    }

    calcularTotalHorasD():number{
        let th:number = 0;
        for (let i = 0; i < this.disciplinas.length; i++) {
            th = th + this.disciplinas[i].getHoras();
        }
        return th;
    }

    listarAtividades(): void {
        console.log(`Atividades do docente ${this.docente} (${this.ano} - ${this.semestre}º semestre):`);
        this.atividades.forEach((atividade, index) => {
            console.log(`${index + 1}. ${atividade.tipo} - ${atividade.horas} horas`);
        });
        console.log(`Total de horas: ${this.calcularTotalHoras()}`);
    }
}


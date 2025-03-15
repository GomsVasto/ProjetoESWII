type TipoAtividade = "APME" | "AAE" | "AO" | "API" | "AE" | "AGIR" | "AQC";


import { Atividade } from "./Atividade";
import { Disciplina } from "./Disciplina";

export class PidRid {
    private SIAPE: number;
    private observacao: string;
    atividades = new Array<Atividade>();
    disciplinas = new Array <Disciplina>();

    setSIAPE(valor: number): void {
        if(valor == null){throw new Error("O SIAPE do docente deve ser informado!");}
        
        if(valor == 0){throw new Error("O SIAPE do docente deve ser diferente de 0");}
        
        if(valor < 0){throw new Error("O SIAPE do docente deve ser maior do que 0");}

        if((valor/1000000>10)||(valor/1000000<1))throw new Error("O SIAPE do docente deve ter 7 casas decimais");

        this.SIAPE = valor;
    }
    getSIAPE(): number {
        return this.SIAPE;
    }
  
    public getObservacao(): string {
        return this.observacao;
    }
    public setObservacao(valor: string) {
        this.observacao = valor;
    }

    adicionarAtividade(tipo: TipoAtividade, horas: number[]): void {
        horas.forEach((horas,i) =>{
            if (i < 0) 
                throw new Error("As horas devem ser maior que 0");
        });

        if(!this.isTipoAtividade(tipo))
            throw new Error("A atividade informada é inválida");

        this.atividades.push(new Atividade(tipo, horas));
    }

    listarAtividades(): void {
        console.log(`Atividades do docente ${this.SIAPE}):`);
        this.atividades.forEach((atividade, index) => {
            console.log(`${index + 1}. ${atividade.getTipo()}`);
            atividade.chAtividades.forEach((chHoras,i) =>{
                console.log(`${i} ${chHoras}`);
            })
            console.log(`Total de horas: ${atividade.getTotalHorasA}`);
        });
    }

    adicionarDisciplina(nome: string, ch: number): void {
        if (nome =="")
            throw new Error("O nome da disciplina precisa ser informado");
        if (ch < 0)
            throw new Error("A carga horária não pode ser menor que 0");
            
        this.disciplinas.push(new Disciplina(nome, ch));
    }

    getDisciplinas(): Disciplina[]{
        return this.disciplinas;
    }

    calcularTotalHorasD():number{
        let th:number = 0;
        for (let i = 0; i < this.disciplinas.length; i++) {
            th = th + this.disciplinas[i].getHoras();
        }
        return th;
    }

    isTipoAtividade(valor: any): valor is TipoAtividade {
        const tiposValidos: TipoAtividade[] = ["APME", "AAE", "AO", "API", "AE", "AGIR", "AQC"];
        if(!tiposValidos.includes(valor))
            throw new Error("O tipo deve ser válido");
        return tiposValidos.includes(valor);
      }
}


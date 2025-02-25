type TipoAtividade = "APME" | "AAE" | "AO" | "API" | "AE" | "AGIR" | "AQC";


export class Atividade {
    private tipo: TipoAtividade;
    chAtividades: number[];
    //xdasdszsdad

    constructor(tipo: TipoAtividade, chAtividades: number[]) {
        this.setTipo(tipo);
        this.chAtividades = chAtividades;
    }

    public getTipo(): TipoAtividade {
        return this.tipo;
    }
    public setTipo(value: TipoAtividade) {
        this.tipo = value;
    }

    getTotalHorasA(): number {
        let th:number = 0;
        for (let i = 0; i < this.chAtividades.length; i++) {
            th = th + this.chAtividades[i];
        }
        return th;
    }

}

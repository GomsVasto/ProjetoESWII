type TipodeAtividade = "APME" | "AAE" | "AO" | "API" | "AE" | "AGIR" | "AQC";

import { Atividade } from "./Atividade";

export class TipoAtividade {
    private tipo: TipoAtividade;
    private horas: number;
    atividades: Atividade[];

    constructor(tipo: TipoAtividade, horas: number) {
        this.setTipo(tipo);
        this.setHoras(horas);
        this.atividades = []
    }

    public getTipo(): TipoAtividade {
        return this.tipo;
    }
    public setTipo(value: TipoAtividade) {
        this.tipo = value;
    }

    public getHoras(): number {
        return this.horas;
    }
    public setHoras(value: number) {
        this.horas = value;
    }
}

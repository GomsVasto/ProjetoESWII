export class Disciplina{
    nome: String;
    private horas: number;

    constructor(nome:String, horas:number){
        this.setNome(nome);
        this.setHoras(horas);
    }

    public getNome(): String {
        return this.nome;
    }
    public setNome(value: String) {
        this.nome = value;
    }

    public getHoras(): number {
        return this.horas;
    }
    public setHoras(value: number) {
        this.horas = value;
    }
}
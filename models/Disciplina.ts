export class Disciplina{
    public nome: string;
    public horas: number;

    constructor(nome:string, horas:number){
        this.setNome(nome);
        this.setHoras(horas);
    }

    public getNome(): string {
        return this.nome;
    }
    public setNome(nome: string):void {
        if(nome==""){throw new Error("O nome não pode ser vazio!");}
        this.nome = nome;
    }

    public getHoras(): number {
        return this.horas;
    }
    public setHoras(horas: number) {
        if(horas<0){throw new Error("A carga horária deve ser um número positivo");}
        this.horas = horas;
    }
}
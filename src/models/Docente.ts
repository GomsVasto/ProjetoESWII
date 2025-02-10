import { IDocente } from "./IDocente";

export class Docente implements IDocente{
    private nome!: string
    private departamento!: string
    private email!: string
    private semestre!: string
    private SIAPE!: number
    private telefone!: number
    private ano!: number

    setNome(nome: string): void {
        if(nome == ""){throw new Error("O nome do docente deve ser informado!");}
        this.nome = nome;
    }
    getNome(): string {
        return this.nome;
    }

    setTelefone(valor: number): void {
        if(valor == null){throw new Error("O telefone do docente deve ser informado!");}
        this.telefone = valor;
    }
    getTelefone(): number {
        return this.telefone
    }

    setDepartamento(valor: string): void {
        if(valor == ""){throw new Error("O departamento do docente deve ser informado!");}
        this.departamento = valor;
    }
    getDepartamento(): string {
        return this.departamento;
    }

    setSIAPE(valor: number): void {
        if(valor == null){throw new Error("O SIAPE do docente deve ser informado!");}
        this.SIAPE = valor;
    }
    getSIAPE(): number {
        return this.SIAPE;
    }

    setEmail(valor: string): void {
        if(valor == ""){throw new Error("O email do docente deve ser informado!");}
        this.email = valor;
    }
    getEmail(): string {
        return this.email;
    }
    setSemestre(valor: string): void {
        if(valor == ""){throw new Error("O semestre do docente deve ser informado!");}
        this.semestre = valor;
    }
    getSemestre(): string {
        return this.semestre;
    }

    setAno(valor: number): void {
        if(valor == null){throw new Error("O ano do docente deve ser informado!");}
        this.ano = valor;
    }
    getAno(): number {
        return this.ano;
    }

}
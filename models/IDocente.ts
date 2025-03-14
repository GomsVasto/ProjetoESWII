export interface IDocente{
    setNome(valor:string): void;
    getNome(): string;

    setTelefone(valor:number): void;
    getTelefone(): number;

    setDepartamento(valor:string): void;
    getDepartamento(): string;

    setSIAPE(valor:number): void;
    getSIAPE(): number;

    setEmail(valor:string): void;
    getEmail(): string;

    setSemestre(valor:string): void;
    getSemestre(): string;

    setAno(valor:number): void;
    getAno(): number;
}
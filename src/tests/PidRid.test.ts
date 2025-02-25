import { Disciplina } from "../models/DIsciplina";
import { PidRid } from "../models/PidRid";
//SIAPE - observacao - Atividade - Disciplina

let pid: PidRid;

beforeAll(() =>{
    pid = new PidRid();
});

describe("Disciplina",()=>{
    it("Deve ser cadastrada",()=>{
        pid.adicionarDisciplina("teste",18);

        let array1 = new Disciplina[1];

        array1.push(new Disciplina("teste",18));

        expect(pid.getDisciplinas()).toEqual(array1)
    });

    it("Deve gerar erro se o nome for vazio",()=>{
        try {
            pid.adicionarDisciplina("",18);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
        
    });

    it("Deve gerar erro se a carga horaria for menor que 0",()=>{
        try {
            pid.adicionarDisciplina("ere",-12);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
        
    });
});

describe("Atividade " , ()=>{
    it('deve ser cadastrada', ()=>{
        
        expect(pid.listarAtividades())
    })
})
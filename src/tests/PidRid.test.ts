import { PidRid } from "../models/PidRid";

const pid = new PidRid("Filipe Fernandes", 2024, 1);
pid.adicionarAtividade("Engenharia de Software I - BSI", "Ensino", 3);
pid.adicionarAtividade("Engenharia de Software III - BSI", "Ensino", 2.25);
pid.adicionarAtividade("Preparação de Aulas", "Ensino", 6);
pid.adicionarAtividade("Atendimento de Alunos Extraclasse", "Ensino", 1.63);
pid.adicionarAtividade("Participação em Eventos Acadêmicos", "Pesquisa", 1);


describe("A Atividade " , ()=>{
    it('deve ser cadastrada', ()=>{
        expect(pid.listarAtividades())
    })
})
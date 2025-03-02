import { Docente } from "../models/Docente";
//nome - telefone - departamento - email - ano - semestre

let docente: Docente;
beforeAll(()=>{
    docente = new Docente();
});

describe("Docente",()=>{
    describe("Nome do docente",()=>{
        it('deve ser atribuído quando não estiver vazio', ()=>{
            const nome = "Teste";
            docente.setNome(nome);
    
            expect(docente.getNome()).toEqual(nome);
        })

        it("deve lançar um erro quando for vazio", ()=>{
            const nome = "";
        
            try {
                docente.setNome(nome);
            }catch(error) {
                expect(error).toBeInstanceOf(Error);
            }
        });
    });

    describe("SIAPE do docente" , ()=> {
        it('deve ser atribuído quando for positivo e ter 7 caracteres', ()=>{
            const SIAPE = 1234567;
            docente.setSIAPE(SIAPE);
    
            expect(docente.getSIAPE()).toEqual(SIAPE);
        });
    
        it("deve lançar um erro quando for negativo", ()=>{
            const SIAPE = -1;
        
            try {
                docente.setSIAPE(SIAPE);
            }catch(error) {
                expect(error).toBeInstanceOf(Error);
            }
        });
    
        it("deve lançar um erro quando for 0", ()=>{
            const SIAPE = 0;
        
            try {
                docente.setSIAPE(SIAPE);
            }catch(error) {
                expect(error).toBeInstanceOf(Error);
            }
        });
    
        it("deve lançar um erro quando ele ter menos que 7 casa decimais", ()=>{
            const SIAPE = 123456;
        
            try {
                docente.setSIAPE(SIAPE);
            }catch(error) {
                expect(error).toBeInstanceOf(Error);
            }
        });
    
        it("deve lançar um erro quando ele ter mais que 7 casa decimais", ()=>{
            const SIAPE = 12345678;
        
            try {
                docente.setSIAPE(SIAPE);
            }catch(error) {
                expect(error).toBeInstanceOf(Error);
            }
        });
    });

    describe("Telefone do doscente",()=>{

        it('deve ser atribuído quando for positivo e ter 11 caracteres', ()=>{
            const telefone = 33999792004;
            docente.setTelefone(telefone);
    
            expect(docente.getTelefone()).toEqual(telefone);
        })
    
        it("deve lançar um erro quando for negativo", ()=>{
            const telefone = -1;
        
            try {
                docente.setTelefone(telefone);
            }catch(error) {
                expect(error).toBeInstanceOf(Error);
            }
        });
    
        it("deve lançar um erro quando for 0", ()=>{
            const telefone = 0;
        
            try {
                docente.setTelefone(telefone);
            }catch(error) {
                expect(error).toBeInstanceOf(Error);
            }
        });
    
        it("deve lançar um erro quando ele ter menos que 11 casa decimais", ()=>{
            const telefone = 3399979200;
        
            try {
                docente.setTelefone(telefone);
            }catch(error) {
                expect(error).toBeInstanceOf(Error);
            }
        });
    
        it("deve lançar um erro quando ele ter mais que 11 casa decimais", ()=>{
            const telefone = 339997920041;
        
            try {
                docente.setTelefone(telefone);
            }catch(error) {
                expect(error).toBeInstanceOf(Error);
            }
        });
    });

    describe("Departamento do docente",()=>{
        it('deve ser atribuído se não for vazio', ()=>{
            const departamento = "Teste Departamento";
            docente.setDepartamento(departamento);
    
            expect(docente.getDepartamento()).toEqual(departamento);
        })

        it("deve lançar um erro quando for vazio", ()=>{
            const departamento = "";
        
            try {
                docente.setDepartamento(departamento);
            }catch(error) {
                expect(error).toBeInstanceOf(Error);
            }
        });
    });

    describe("Email do docente",()=>{
        it('deve ser atribuído não for vazio', ()=>{
            const email = "Teste@mail.com";
            docente.setEmail(email);
    
            expect(docente.getEmail()).toEqual(email);
        })

        it("deve lançar um erro quando for vazio", ()=>{
            const departamento = "";
        
            try {
                docente.setEmail(departamento);
            }catch(error) {
                expect(error).toBeInstanceOf(Error);
            }
        });
    });

    describe("Semestre do docente",()=>{
        it('deve ser atribuído não for vazio', ()=>{
            const semestre = "Testeº";
            docente.setSemestre(semestre);
    
            expect(docente.getSemestre()).toEqual(semestre);
        })

        it("deve lançar um erro quando for vazio", ()=>{
            const semestre = "";
        
            try {
                docente.setSemestre(semestre);
            }catch(error) {
                expect(error).toBeInstanceOf(Error);
            }
        });
    });

    describe("Ano do docente",()=>{
        it('deve ser atribuído quando for positivo', ()=>{
            const ano = 18;
            docente.setAno(ano);
    
            expect(docente.getAno()).toEqual(ano);
        });

        it("deve lançar um erro se for negativo",()=>{
            const ano = -1;
            // docente.setAno(ano); está dando erro porque está chamando o método 2x - retire essa linha 

            try {
                docente.setAno(ano);
            }catch(error) {
                expect(error).toBeInstanceOf(Error);
            }
        });

        it("deve lançar um erro se for igual a 0",()=>{
            const ano = 0;
            // docente.setAno(ano); está dando erro porque está chamando o método 2x - retire essa linha 

            try {
                docente.setAno(ano);
            }catch(error) {
                expect(error).toBeInstanceOf(Error);
            }
        });
    });

});

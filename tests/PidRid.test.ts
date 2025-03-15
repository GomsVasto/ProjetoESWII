import { Disciplina } from "../models/Disciplina";
import { Atividade } from "../models/Atividade";
import { PidRid } from "../models/PidRid";

describe("PidRid", () => {
    let pidRid: PidRid;

    beforeEach(() => {
        pidRid = new PidRid();
    });

    describe("Definir SIAPE", () => {
        test("Deve lançar erro se o SIAPE for nulo", () => {
            expect(() => pidRid.setSIAPE(null as any)).toThrow("O SIAPE do docente deve ser informado!");
        });

        test("Deve lançar erro se o SIAPE for 0", () => {
            expect(() => pidRid.setSIAPE(0)).toThrow("O SIAPE do docente deve ser diferente de 0");
        });

        test("Deve lançar erro se o SIAPE for negativo", () => {
            expect(() => pidRid.setSIAPE(-1234567)).toThrow("O SIAPE do docente deve ser maior do que 0");
        });

        test("Deve lançar erro se o SIAPE não tiver 7 dígitos", () => {
            expect(() => pidRid.setSIAPE(123456)).toThrow("O SIAPE do docente deve ter 7 casas decimais");
        });

        test("Deve definir corretamente o SIAPE válido", () => {
            pidRid.setSIAPE(1234567);
            expect(pidRid.getSIAPE()).toBe(1234567);
        });
    });

    describe("Observação", () => {
        test("Deve definir e obter a observação corretamente", () => {
            pidRid.setObservacao("Teste de observação");
            expect(pidRid.getObservacao()).toBe("Teste de observação");
        });
    });
    describe("Tipo Atividade", () =>{
        test("Deve lançar erro ao definir um tipo inválido", () => {
        expect(() => pidRid.isTipoAtividade("INVALIDO" as any)).toThrow();
        });
    })

    describe("Atividade", () => {
        let atividade: Atividade;
    
        beforeEach(() => {
            atividade = new Atividade("APME", [10, 20, 30]);
        });
    
        describe("Tipo de Atividade", () => {
            test("Deve definir e obter o tipo corretamente", () => {
                atividade.setTipo("AAE");
                expect(atividade.getTipo()).toBe("AAE");
            });
        });

        describe("Adicionar Atividade", () => {
            test("Deve ser adicionado corretamente", () => {
                expect(pidRid.adicionarAtividade("APME",[10,5,20])).toEqual(pidRid.listarAtividades());
            });

            test("Deve lançar um erro quando for negativo", () => {
                expect(pidRid.adicionarAtividade("APME",[10,-5,20])).toThrow;
            });
        });
    
        describe("Cálculo de Horas", () => {
            test("Deve calcular corretamente o total de horas", () => {
                expect(atividade.getTotalHorasA()).toBe(60);
            });
            test("Deve retornar 0 se não houver cargas horárias", () => {
                atividade = new Atividade("APME", []);
                expect(atividade.getTotalHorasA()).toBe(0);
            });
            
        });
    });

    describe("Disciplina", () => {
        let disciplina: Disciplina;
    
        beforeEach(() => {
            disciplina = new Disciplina("Matemática", 60);
        });
    
        describe("Definição e obtenção de atributos", () => {
            test("Deve definir e obter o nome corretamente", () => {
                expect(disciplina.getNome()).toBe("Matemática");
            });
    
            test("Deve definir e obter a carga horária corretamente", () => {
                expect(disciplina.getHoras()).toBe(60);
            });
        });
    
        describe("Validações de entrada", () => {
            test("Deve lançar erro ao criar uma disciplina com nome vazio", () => {
                expect(() => new Disciplina("", 60)).toThrow("O nome não pode ser vazio");
            });
    
            test("Deve lançar erro ao criar uma disciplina com carga horária negativa", () => {
                expect(() => new Disciplina("História", -10)).toThrow("A carga horária deve ser um número positivo");
            });
        });
    
        describe("Modificação de atributos", () => {
            test("Deve alterar corretamente o nome da disciplina", () => {
                disciplina.setNome("Física");
                expect(disciplina.getNome()).toBe("Física");
            });
    
            test("Deve lançar erro ao definir um nome vazio", () => {
                expect(() => disciplina.setNome(""))
                    .toThrow("O nome não pode ser vazio");
            });
    
            test("Deve alterar corretamente a carga horária", () => {
                disciplina.setHoras(80);
                expect(disciplina.getHoras()).toBe(80);
            });
    
            test("Deve lançar erro ao definir carga horária negativa", () => {
                expect(() => disciplina.setHoras(-20))
                    .toThrow("A carga horária deve ser um número positivo");
            });
        });
    });
    
});




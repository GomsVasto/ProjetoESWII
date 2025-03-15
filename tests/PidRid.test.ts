import { Disciplina } from "../models/Disciplina";
import { PidRid } from "../models/PidRid";

describe("PidRid", () => {
    let pidRid: PidRid;

    beforeEach(() => {
        pidRid = new PidRid();
    });

    describe("setSIAPE", () => {
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
});

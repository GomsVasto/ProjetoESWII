import { Docente } from "../models/Docente";


describe("SIAPE do docente" , ()=> {
	test('deve ser atribuído quando for positivo', ()=>{
		const docente = new Docente();
		const SIAPE = 1;
		docente.setSIAPE(SIAPE);

		expect(docente.getSIAPE()).toEqual(SIAPE);
	})

	it("deve lançar um erro quando for negativo", ()=>{
		const docente = new Docente();
		const SIAPE = -1;
	
		try {
			docente.setSIAPE(SIAPE);
		}catch(error) {
			expect(error).toBeInstanceOf(Error);
		}
	});

	it("deve lançar um erro quando for 0", ()=>{
		const docente = new Docente();
		const SIAPE = 0;
	
		try {
			docente.setSIAPE(SIAPE);
		}catch(error) {
			expect(error).toBeInstanceOf(Error);
		}
	});

    it("deve lançar um erro quando ele ter menos que 7 casa decimais", ()=>{
		const docente = new Docente();
		const SIAPE = 123456;
	
		try {
			docente.setSIAPE(SIAPE);
		}catch(error) {
			expect(error).toBeInstanceOf(Error);
		}
	});

    it("deve lançar um erro quando ele ter mais que 7 casa decimais", ()=>{
		const docente = new Docente();
		const SIAPE = 12345678;
	
		try {
			docente.setSIAPE(SIAPE);
		}catch(error) {
			expect(error).toBeInstanceOf(Error);
		}
	});
});
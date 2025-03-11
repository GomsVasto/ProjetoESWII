const Plano = require("../models/Plano")

async function criarPlano(nome) {
    try {
        // Validação simples
        if (!nome) {
            throw new Error("ID e nome são obrigatórios");
        }

        //let Plano = new Plano(nome);
        const resultado = await Plano.addPlano(nome); 

        if (!resultado) {
            throw new Error("Falha ao adicionar Plano");
        }

        return resultado;
    } catch (error) {
        console.error("Erro ao criar Plano:", error);
        throw error; // Para propagar o erro para quem chamou a funcao
    }
}

async function getPlano(id) {
    try {
        // Validação simples
        if (!id) {
            throw new Error("Id é obrigatório");
        }

        //let Plano = new Plano(nome);
        const resultado = await Plano.getPlano(id); 

        return resultado;
    } catch (error) {
        console.error("Erro ao buscar Plano:", error);
        throw error; // Para propagar o erro para quem chamou a funcao
    }
}

async function deletePlano(id) {
    try {
        if(!id)
            throw new Error("Id é obtigatório");

        const resultado = await Plano.removePlano(id);
        
        return resultado    
    } catch (error) {
        console.error("Error ao apagar Plano",error);
        throw error;
    }
}

async function updadePlano(id,nome) {
    try {
        // Validação simples
        if (!nome && !id) {
            throw new Error("ID e nome são obrigatórios");
        }

        //let Plano = new Plano(nome);
        const resultado = await Plano.updadePlano(id,nome); 

        if (!resultado) {
            throw new Error("Falha ao atualizar Plano");
        }

        return resultado;
    } catch (error) {
        console.error("Erro ao atualizar Plano:", error);
        throw error; // Para propagar o erro para quem chamou a funcao
    }
}

async function getPlanoAll() {
    try {
        const result = await Plano.getPlanoAll();

        if(!result){
            throw new Error("Falha ao pegar as Especialiades");
        }
        return result;
    } catch (error) {
        console.error("Erro ao buscar as Planos:", error);
        throw error; 
    }
}

module.exports = {criarPlano,getPlano,deletePlano,updadePlano,getPlanoAll};
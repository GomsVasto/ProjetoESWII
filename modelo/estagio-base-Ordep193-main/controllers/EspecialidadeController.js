const Especialidade = require('../models/Especialidade');

async function criarEspecialidade(nome) {
    try {
        // Validação simples
        if (!nome) {
            throw new Error("ID e nome são obrigatórios");
        }

        //let especialidade = new Especialidade(nome);
        const resultado = await Especialidade.addEspecialidade(nome); 

        if (!resultado) {
            throw new Error("Falha ao adicionar especialidade");
        }

        return resultado;
    } catch (error) {
        console.error("Erro ao criar especialidade:", error);
        throw error; // Para propagar o erro para quem chamou a funcao
    }
}

async function getEspecialidade(id) {
    try {
        // Validação simples
        if (!id) {
            throw new Error("Id é obrigatório");
        }

        //let especialidade = new Especialidade(nome);
        const resultado = await Especialidade.getEspecialidade(id); 

        return resultado;
    } catch (error) {
        console.error("Erro ao buscar especialidade:", error);
        throw error; // Para propagar o erro para quem chamou a funcao
    }
}

async function deleteEspecialidade(id) {
    try {
        if(!id)
            throw new Error("Id é obtigatório");

        const resultado = await Especialidade.removeEspecialidade(id);
        
        return resultado    
    } catch (error) {
        console.error("Error ao apagar especialidade",error);
        throw error;
    }
}

async function updadeEspecialidade(id,nome) {
    try {
        // Validação simples
        if (!nome && !id) {
            throw new Error("ID e nome são obrigatórios");
        }

        //let especialidade = new Especialidade(nome);
        const resultado = await Especialidade.updadeEspecialidade(id,nome); 

        if (!resultado) {
            throw new Error("Falha ao atualizar especialidade");
        }

        return resultado;
    } catch (error) {
        console.error("Erro ao atualizar especialidade:", error);
        throw error; // Para propagar o erro para quem chamou a funcao
    }
}

async function getEspecialidadeAll() {
    try {
        const result = await Especialidade.getEspecialidadeAll();

        if(!result){
            throw new Error("Falha ao pegar as Especialiades");
        }
        return result;
    } catch (error) {
        console.error("Erro ao buscar as especialidades:", error);
        throw error; 
    }
}

module.exports = {criarEspecialidade,getEspecialidade,deleteEspecialidade,updadeEspecialidade,getEspecialidadeAll};
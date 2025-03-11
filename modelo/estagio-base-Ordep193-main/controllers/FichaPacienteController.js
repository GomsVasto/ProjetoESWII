const FichaPaciente = require ('../models/FichaPaciente')

async function criarPaciente(nome,carteira,idPlano,idEspecialidade) {
    try {
        if(!nome && !carteira && !idPlano && !idEspecialidade)
            throw new Error("Os dados precisam ser preenchidos");

        const resultado = await FichaPaciente.addPaciente(nome,carteira,idPlano,idEspecialidade)
        
        if(!resultado)
            throw new Error("Falha ao adicionar o paciente");

        return resultado;
    } catch (error) {
        console.error("Erro ao criar especialida",error);
        throw error;
    }
}

async function getPaciente(id) {
    try {
        if(!id)
            throw new Error("O id é obrigatório");

        const resultado = await FichaPaciente.getPaciente(id);

        return resultado;    
    } catch (error) {
        console.error("Erro ao buscar o paciente");
        throw error;
    }
}

async function deletePaciente(id) {
    try {
        if(!id)
            throw new Error("O id é obrigatório");

        const resultado = await FichaPaciente.removePaciente(id);

        return resultado;    
    } catch (error) {
        console.error("Erro ao buscar o paciente");
        throw error;
    }
}

async function updatePaciente(id,nome,carteira,idPlano,idEspecialidade) {
    try {
        if(!nome && !id && !carteira && !idPlano && !idEspecialidade)
            throw new Error("Os dados precisam ser preenchidos");

        const resultado = await FichaPaciente.updatePaciente(id,nome,carteira,idPlano,idEspecialidade)
        
        if(!resultado)
            throw new Error("Falha ao atualizar o paciente");

        return resultado;
    } catch (error) {
        console.error("Erro ao atualizar paciente",error);
        throw error;
    }
}

async function getPacienteAll() {
    try {

        const resultado = await FichaPaciente.getPacienteAll();

        return resultado;    
    } catch (error) {
        console.error("Erro ao buscar o paciente");
        throw error;
    }
}

module.exports = {criarPaciente,getPaciente,deletePaciente,updatePaciente,getPacienteAll};
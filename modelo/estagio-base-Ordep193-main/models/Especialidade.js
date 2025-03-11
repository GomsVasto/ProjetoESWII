const pool = require('../config/database');

async function addEspecialidade(nome) {
    const client = await pool.connect();  // Pega a conexão do pool

    try {
        await client.query('BEGIN');  // Inicia a transação

        const queryText = 'INSERT INTO Especialidade (Nome) VALUES ($1)';
        const values = [nome];

        await client.query(queryText, values);  // Executa a query de inserção

        await client.query('COMMIT');  // Comita a transação
    } catch (error) {
        await client.query('ROLLBACK');  // Se der erro, faz o rollback
        console.log(error);
        return false;
    } finally {
        client.release();  // Libera a conexão
    }
    return true;
}

async function updadeEspecialidade(id,nome) {
    const client = await pool.connect();  // Pega a conexão do pool

    try {
        await client.query('BEGIN');  // Inicia a transação

        const queryText = 'UPDATE Especialidade SET nome = $1 where id = $2;';
        const values = [nome,id];

        await client.query(queryText, values);  // Executa a query de inserção

        await client.query('COMMIT');  // Comita a transação
    } catch (error) {
        await client.query('ROLLBACK');  // Se der erro, faz o rollback
        console.log(error);
        return false;
    } finally {
        client.release();  // Libera a conexão
    }
    return true;
}

async function removeEspecialidade(id) {
    const client = await pool.connect();

    try {
        await client.query('BEGIN');
        
        const queryText = "DELETE from Especialidade where id=($1)";

        const values = [id];

        await client.query(queryText,values);

        await client.query("COMMIT");

    } catch (error) {
        await client.query('ROLLBACK');
        console.log(error)
        return false;
    }finally{
        client.release();
    }
    return true
}

async function getEspecialidade(id) {
    const client = await pool.connect();
    let result
    try {
        await client.query('BEGIN');
        
        const queryText = "SELECT * from Especialidade where id=($1)";

        const values = [id];

        const{rows} = await client.query(queryText,values);
        if(rows.length==0)
            throw new Error("Especialidade não encontrada")

        result = rows[0]
    } catch (error) {
        console.log(error)
        return false;
    }finally{
        client.release();
    }

    return result
}

async function getEspecialidadeAll() {
    const client = await pool.connect();
    let result
    try {
        await client.query('BEGIN');
        
        const queryText = "SELECT * from Especialidade order by id";

        const{rows} = await client.query(queryText);
        result = rows;
    } catch (error) {
        console.log(error)
        return false;
    }finally{
        client.release();
    }

    return result
}

module.exports = {addEspecialidade,updadeEspecialidade,removeEspecialidade,getEspecialidade,getEspecialidadeAll};
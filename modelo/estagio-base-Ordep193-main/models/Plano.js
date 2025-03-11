const pool = require('../config/database');

async function addPlano(nome) {
    const client = await pool.connect();  // Pega a conexão do pool

    try {
        await client.query('BEGIN');  // Inicia a transação

        const queryText = 'INSERT INTO Planodesaude (Nome) VALUES ($1)';
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

async function updadePlano(id,nome) {
    const client = await pool.connect();  // Pega a conexão do pool

    try {
        await client.query('BEGIN');  // Inicia a transação

        const queryText = 'UPDATE Planodesaude SET nome = $1 where id = $2;';
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

async function removePlano(id) {
    const client = await pool.connect();

    try {
        await client.query('BEGIN');
        
        const queryText = "DELETE from Planodesaude where id=($1)";

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

async function getPlano(id) {
    const client = await pool.connect();
    let result
    try {
        await client.query('BEGIN');
        
        const queryText = "SELECT * from Planodesaude where id=($1)";

        const values = [id];

        const{rows} = await client.query(queryText,values);
        if(rows.length==0)
            throw new Error("Plano não encontrada")

        result = rows[0]
    } catch (error) {
        console.log(error)
        return false;
    }finally{
        client.release();
    }

    return result
}

async function getPlanoAll() {
    const client = await pool.connect();
    let result
    try {
        await client.query('BEGIN');
        
        const queryText = "SELECT * from Planodesaude order by id";

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

module.exports = {addPlano,updadePlano,removePlano,getPlano,getPlanoAll};
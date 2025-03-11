const pool = require('../config/database')

async function addPaciente(nome,carteira,idPlano,idEspecialidade) {
    const client = await pool.connect();;

    try{
        await client.query('BEGIN');

        const queryText = 'INSERT INTO FichaPaciente (NomePaciente,NumeroCarteiraPlano,IdPlanoDeSaude,IdEspecialidade) VALUES ($1, $2, $3, $4)';
        const values = [nome,carteira,idPlano,idEspecialidade]
        await client.query(queryText,values);
        
        await client.query('COMMIT');

        return true;
    }catch(error){
        await client.query('ROLLBACK');
        throw error;
    }finally{
        client.release();
    }  
}

async function updatePaciente(id,nome,carteira,idPlano,idEspecialidade) {
    const client = await pool.connect();;

    try{
        await client.query('BEGIN');

        const queryText = 'UPDATE FichaPaciente SET NomePaciente = $1, CLNumeroCarteiraPlano  = $2, IdPlanoDeSaude  = $3, IdEspecialidade = $4 where id= $5';
        const values = [nome,carteira,idPlano,idEspecialidade,id]
        await client.query(queryText,values);
        
        await client.query('COMMIT');

        return true;
    }catch(error){
        await client.query('ROLLBACK');
        throw error;
    }finally{
        client.release();
    }  
}

async function getPaciente(id){
    const client = await pool.connect();;
    let result
    try {
        await client.query('BEGIN');

        const queryText = 'SELECT * from FichaPaciente where id =$1'

        values = [id];

        const{rows} = await client.query(queryText,values);
        if(rows.length==0)
            throw new Error("Paciente não encontrado");

        result = rows[0];
    } catch (error) {
        console.log(error);
        return false;
    }finally{
        client.release();
    }

    return result;
}

async function getPacienteAll(){
    const client = await pool.connect();;
    let result
    try {
        await client.query('BEGIN');

        const queryText = 'SELECT Fichapaciente.id, Fichapaciente.nomepaciente, Fichapaciente.numerocarteiraplano, Fichapaciente.idplanodesaude, Fichapaciente.idespecialidade, Especialidade.nome as Especialidade, Planodesaude.nome as Plano from FichaPaciente INNER JOIN Especialidade on fichaPaciente.idEspecialidade = Especialidade.id INNER JOIN Planodesaude on fichaPaciente.IdPlanoDeSaude = Planodesaude.id'

        const{rows} = await client.query(queryText);
        console.log(rows)

        result = rows;
    } catch (error) {
        console.log(error);
        return false;
    }finally{
        client.release();
    }

    return result;
}

async function removePaciente(id){
    const client = await pool.connect();;

    try {
        await client.query('BEGIN');

        const queryText = 'DELETE from FichaPaciente where id =$1'

        values = [id];

        await client.query(queryText,values);

        await client.query('COMMIT');

    } catch (error) {
        console.log(error);
        return false;
    }finally{
        client.release();
    }

    return true;
}

module.exports = {addPaciente,removePaciente,updatePaciente,getPaciente,getPacienteAll}
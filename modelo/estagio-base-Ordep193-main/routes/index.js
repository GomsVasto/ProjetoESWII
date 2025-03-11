var express = require('express');
var router = express.Router();

let especialidadeController = require('../controllers/EspecialidadeController')
let planoController = require('../controllers/PlanoController')
let pacienteController = require('../controllers/FichaPacienteController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hospital', alert:''});
});

//Especialidade
router.get('/admEspecialidade', async function(req,res,next){
  const especialidades = await especialidadeController.getEspecialidadeAll();
  res.render('admEspecialidade', { title: 'Especialidades', alert:'',especialidades });
});

router.get('/criarEspecialidade', function(req, res, next) {
  res.render('createEspecialidade', { title: 'Criar Especialiade', alert: '' });
});

router.get('/deleteEspecialidade/:id', async function(req,res,next){
  let id = req.params.id;
  
  try {
    let result = await especialidadeController.deleteEspecialidade(id);
    const especialidades = await especialidadeController.getEspecialidadeAll();

    res.render('admEspecialidade',{title: 'Apagar Especialdiade',alert: 'Especialidade apagada com sucesso',result,especialidades});
  } catch (error) {
    console.error('Erro ao apagar especialidade:', error);
    const especialidades = await especialidadeController.getEspecialidadeAll();
    res.render('admEspecialidade', { title: 'Hospital', alert: 'Erro ao apagar especialidade',especialidades });
  }
});

router.get('/updateEspecialidade/:id',async function(req, res, next) {
  let id = req.params.id;
  let result = await especialidadeController.getEspecialidade(id);
  res.render('updateEspecialidade', { title: 'Atualizar Especialiade', alert:'',result});
});

router.post('/addEspecialidade', async function(req, res, next) {
  let nomeEspecialidade = req.body.nomeEspecialidade;
  try {
    let result = await especialidadeController.criarEspecialidade(nomeEspecialidade);
    const especialidades = await especialidadeController.getEspecialidadeAll();

    if (result) {
      res.render('admEspecialidade', { title: 'Criar Especialidade', alert: 'Especialidade criada com sucesso',especialidades });
    } else {
      res.render('createEspecialidade', { title: 'Criar Especialidade', alert: 'Erro ao criar especialidade' });
    }
  } catch (error) {
    console.error('Erro ao criar especialidade:', error);
    res.render('createEspecialidade', { title: 'Criar Especialidade', alert: 'Erro ao criar especialidade' });
  }
});

router.post('/updateEspecialidade/:id', async function(req, res, next) {
  let id = req.params.id;
  let nomeEspecialidade = req.body.nomeEspecialidade;
  try {
    let result = await especialidadeController.updadeEspecialidade(id,nomeEspecialidade);
    const especialidades = await especialidadeController.getEspecialidadeAll();

    if (result) {
      res.render('admEspecialidade', { title: 'Atualizar Especialidade', alert: 'Especialidade atualizada com sucesso',especialidades });
    } else {
      res.render('updateEspecialidade', { title: 'Atualizar Especialidade', alert: 'Erro ao atualizar especialidade' });
    }
  } catch (error) {
    console.error('Erro ao atualizar especialidade:', error);
    res.render('updateEspecialidade', { title: 'Atualizar Especialidade', alert: 'Erro ao atualizar especialidade',result });
  }
});

//Plano
router.get('/admPlano', async function(req,res,next){
  const planos = await planoController.getPlanoAll();
  res.render('admPlano', { title: 'Planos', alert:'',planos });
});

router.get('/criarPlano', function(req, res, next) {
  res.render('createPlano', { title: 'Criar Plano', alert: '' });
});

router.get('/deletePlano/:id', async function(req,res,next){
  let id = req.params.id;
  
  try {
    let result = await planoController.deletePlano(id);
    const planos = await planoController.getPlanoAll();

    res.render('admPlano',{title: 'Apagar Especialdiade',alert: 'Plano apagado com sucesso',result,planos});
  } catch (error) {
    console.error('Erro ao apagar plano:', error);
    const planos = await planoController.getPlanoAll();
    res.render('admPlano', { title: 'Hospital', alert: 'Erro ao apagar plano',planos });
  }
});

router.get('/updatePlano/:id',async function(req, res, next) {
  let id = req.params.id;
  let result = await planoController.getPlano(id);
  res.render('updatePlano', { title: 'Atualizar Plano', alert:'',result});
});

router.post('/addPlano', async function(req, res, next) {
  let nomePlano = req.body.nomePlano;
  try {
    let result = await planoController.criarPlano(nomePlano);
    const planos = await planoController.getPlanoAll();

    if (result) {
      res.render('admPlano', { title: 'Criar Plano', alert: 'Plano criado com sucesso',planos });
    } else {
      res.render('createPlano', { title: 'Criar Plano', alert: 'Erro ao criar plano' });
    }
  } catch (error) {
    console.error('Erro ao criar plano:', error);
    res.render('createPlano', { title: 'Criar Plano', alert: 'Erro ao criar plano' });
  }
});

router.post('/updatePlano/:id', async function(req, res, next) {
  let id = req.params.id;
  let nomePlano = req.body.nomePlano;
  try {
    let result = await planoController.updadePlano(id,nomePlano);
    const planos = await planoController.getPlanoAll();

    if (result) {
      res.render('admPlano', { title: 'Atualizar Plano', alert: 'Plano atualizado com sucesso',planos });
    } else {
      res.render('updatePlano', { title: 'Atualizar Plano', alert: 'Erro ao atualizar plano'});
    }
  } catch (error) {
    console.error('Erro ao atualizar plano:', error);
    res.render('updatePlano', { title: 'Atualizar Plano', alert: 'Erro ao criar plano',result });
  }
});

//Paciente

router.get('/admPaciente', async function(req,res,next){
  const pacientes = await pacienteController.getPacienteAll();
  res.render('admPaciente', { title: 'Paciente', alert:'',pacientes });
});

router.get('/criarPaciente', function(req, res, next) {
  res.render('createPaciente', { title: 'Criar Paciente', alert: '' });
});

router.get('/deletePaciente/:id', async function(req,res,next){
  let id = req.params.id;
  
  try {
    let result = await pacienteController.deletePaciente(id);
    const pacientes = await pacienteController.getPacienteAll();

    res.render('admPaciente',{title: 'Apagar Paciente',alert: 'Paciente apagado com sucesso',result,pacientes});
  } catch (error) {
    console.error('Erro ao apagar paciente:', error);
    const pacientes = await pacienteController.getPacienteAll();
    res.render('admPaciente', { title: 'Hospital', alert: 'Erro ao apagar paciente',pacientes });
  }
});

router.get('/updatePaciente/:id',async function(req, res, next) {
  let id = req.params.id;
  let result = await pacienteController.getPaciente(id);
  res.render('updatePaciente', { title: 'Atualizar Paciente', alert:'',result});
});

router.post('/addPaciente', async function(req, res, next) {
  let nomePaciente = req.body.nomePaciente;
  let nCarteira = req.body.nCarteira;
  let idPlano = req.body.idPlano;
  let idEspecialidade = req.body.idEspecilizacao;
  try {
    let result = await pacienteController.criarPaciente(nomePaciente,nCarteira,idPlano,idEspecialidade);
    const pacientes = await pacienteController.getPacienteAll();

    if (result) {
      res.render('admPaciente', { title: 'Criar Paciente', alert: 'Paciente criado com sucesso',pacientes });
    } else {
      res.render('createPaciente', { title: 'Criar Paciente', alert: 'Erro ao criar paciente' });
    }
  } catch (error) {
    console.error('Erro ao criar paciente:', error);
    res.render('createPaciente', { title: 'Criar Paciente', alert: 'Erro ao criar paciente' });
  }
});

router.post('/updatePaciente/:id', async function(req, res, next) {
  let id = req.params.id;
  let nomePaciente = req.body.nomePaciente;
  let nCarteira = req.body.nCarteira;
  let idPlano = req.body.idPlano;
  let idEspecialidade = req.body.idEspecilizacao;
  try {
    let result = await pacienteController.updatePaciente(id,nomePaciente,nCarteira,idPlano,idEspecialidade);
    const pacientes = await pacienteController.getPacienteAll();

    if (result) {
      res.render('admPaciente', { title: 'Atualizar Paciente', alert: 'Paciente atualizado com sucesso',pacientes });
    } else {
      res.render('updatePaciente', { title: 'Atualizar Paciente', alert: 'Erro ao atualizar o paciente'});
    }
  } catch (error) {
    console.error('Erro ao atualizar paciente:', error);
    res.render('updatePaciente', { title: 'Atualizar Paciente', alert: 'Erro ao atualizar paciente',result });
  }
});

module.exports = router;
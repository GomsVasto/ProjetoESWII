import express from "express";
import { DocenteController } from "../controller/docenteController";
var router = express.Router();

let docenteController = require('../controllers/docenteContrller')
let pidController = require('../controllers/pidController');


router.get("/docentes", DocenteController.listarDocentes);
router.get("/docentes/:siape", DocenteController.obterDocente);
router.post("/docentes", DocenteController.criarDocente);
router.put("/docentes/:siape", DocenteController.atualizarDocente);
router.delete("/docentes/:siape", DocenteController.deletarDocente);








/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hospital', alert:''});
});

//Docenete
router.get('/criarDocente', function(req, res, next) {
  res.render('cadastroDocente', { title: 'Criar Docente', alert: '' });
});

router.get('/deleteEspecialidade/:id', async function(req,res,next){
  let id = req.params.id;
  
  try {
    let result = await docenteController.deleteEspecialidade(id);
    const especialidades = await docenteController.getEspecialidadeAll();

    res.render('admEspecialidade',{title: 'Apagar Especialdiade',alert: 'Especialidade apagada com sucesso',result,especialidades});
  } catch (error) {
    console.error('Erro ao apagar especialidade:', error);
    const especialidades = await docenteController.getEspecialidadeAll();
    res.render('admEspecialidade', { title: 'Hospital', alert: 'Erro ao apagar especialidade',especialidades });
  }
});

router.get('/updateEspecialidade/:id',async function(req, res, next) {
  let id = req.params.id;
  let result = await docenteController.getEspecialidade(id);
  res.render('updateEspecialidade', { title: 'Atualizar Especialiade', alert:'',result});
});

router.post('/addEspecialidade', async function(req, res, next) {
  let nomeEspecialidade = req.body.nomeEspecialidade;
  try {
    let result = await docenteController.criarEspecialidade(nomeEspecialidade);
    const especialidades = await docenteController.getEspecialidadeAll();

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
    let result = await docenteController.updadeEspecialidade(id,nomeEspecialidade);
    const especialidades = await docenteController.getEspecialidadeAll();

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

//Pid
router.get('/admPlano', async function(req,res,next){
  const planos = await pidController.getPlanoAll();
  res.render('admPlano', { title: 'Planos', alert:'',planos });
});

router.get('/criarPlano', function(req, res, next) {
  res.render('createPlano', { title: 'Criar Plano', alert: '' });
});

router.get('/deletePlano/:id', async function(req,res,next){
  let id = req.params.id;
  
  try {
    let result = await pidController.deletePlano(id);
    const planos = await pidController.getPlanoAll();

    res.render('admPlano',{title: 'Apagar Especialdiade',alert: 'Plano apagado com sucesso',result,planos});
  } catch (error) {
    console.error('Erro ao apagar plano:', error);
    const planos = await pidController.getPlanoAll();
    res.render('admPlano', { title: 'Hospital', alert: 'Erro ao apagar plano',planos });
  }
});

router.get('/updatePlano/:id',async function(req, res, next) {
  let id = req.params.id;
  let result = await pidController.getPlano(id);
  res.render('updatePlano', { title: 'Atualizar Plano', alert:'',result});
});

router.post('/addPlano', async function(req, res, next) {
  let nomePlano = req.body.nomePlano;
  try {
    let result = await pidController.criarPlano(nomePlano);
    const planos = await pidController.getPlanoAll();

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
    let result = await pidController.updadePlano(id,nomePlano);
    const planos = await pidController.getPlanoAll();

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

export default router;

import express from "express";
import { DocenteController } from "../controller/docenteController";

var express = require('express');
var router = express.Router();

let especialidadeController = require('../controllers/EspecialidadeController')
let docenteContrller = require('../controllers/docenteContrller')
let pacienteController = require('../controllers/FichaPacienteController');


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

export default router;

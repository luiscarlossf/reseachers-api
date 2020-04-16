var express = require('express');
var router = express.Router();

//Importando controllers
var idiomaController = require('../controllers/idiomaController');
var instituicaoController = require('../controllers/instituicaoController');
var labgroupController = require('../controllers/labgroupController');
var linhaController = require('../controllers/linhaController');
var pesquisadorController = require('../controllers/pesquisadorController');
var projetoController = require('../controllers/projetoController');
var publicacaoController = require('../controllers/publicacaoController');
var sobreController = require('../controllers/sobreController');
var temaController = require('../controllers/temaController');

//// INDEX PAGE /v1 ////

router.get('/', function(req, res, next){
    res.render('index', { title: 'Research API 1.0.0', conteudo: 'Research API'});
});

//// IDIOMA ROUTES ////

//Requisição GET para listar todos os idiomas
router.get('/idiomas', idiomaController.idiomaList);

//Requisição GET para um idioma
router.get('/idiomas/:id', idiomaController.idiomaDetail);

//Requisição POST para adicionar um novo idioma
router.post('/idiomas', idiomaController.idiomaCreate);

//Requisição DELETE para excluir um idioma 
router.delete('/idiomas/:id', idiomaController.idiomaDelete);

//Requisição PUT para atualizar um idioma
router.put('/idiomas/:id', idiomaController.idiomaUpdatePut);

//Requisição PATCH para atualizar informações específicas de um idioma
router.patch('/idiomas/:id', idiomaController.idiomaUpdatePatch);


//// INSTITUICAO ROUTES ////

//Requisição GET para listar todas as instituições
router.get('/instituicoes', instituicaoController.instituicaoList);

//Requisição GET para uma instituição
router.get('/instituicoes/:id', instituicaoController.instituicaoDetail);

//Requisição POST para adicionar uma nova instituição
router.post('/instituicoes', instituicaoController.instituicaoCreate);

//Requisição DELETE para excluir uma instituição
router.delete('/instituicoes/:id', instituicaoController.instituicaoDelete);

//Requisição PUT para atualizar uma instituição
router.put('/instituicoes/:id', instituicaoController.instituicaoUpdatePut);

//Requisição PATCH para atualizar informações específicas de uma instituição
router.patch('/instituicoes/:id', instituicaoController.instituicaoUpdatePatch);


//// LABGROUP ROUTES ////

//Requisição GET para listar todos os grupos de pesquisa
router.get('/labgroups', labgroupController.labgroupList);

//Requisição GET para um grupo de pesquisa
router.get('/labgroups/:id', labgroupController.labgroupDetail);

//Requisição POST para adicionar um novo grupo de pesquisa
router.post('/labgroups', labgroupController.labgroupCreate);

//Requisição DELETE para excluir um grupo de pesquisa 
router.delete('/labgroups/:id', labgroupController.labgroupDelete);

//Requisição PUT para atualizar um grupo de pesquisa
router.put('/labgroups/:id', labgroupController.labgroupUpdatePut);

//Requisição PATCH para atualizar informações específicas de um grupo de pesquisa
router.patch('/labgroups/:id', labgroupController.labgroupUpdatePatch);

//// LINHA ROUTES ////

//Requisição GET para listar todas as linhas de pesquisa
router.get('/linhas', linhaController.linhaList);

//Requisição GET para uma instituição
router.get('/linhas/:id', linhaController.linhaDetail);

//Requisição POST para adicionar uma nova instituição
router.post('/linhas', linhaController.linhaCreate);

//Requisição DELETE para excluir uma instituição
router.delete('/linhas/:id', linhaController.linhaDelete);

//Requisição PUT para atualizar uma instituição
router.put('/linhas/:id', linhaController.linhaUpdatePut);

//Requisição PATCH para atualizar informações específicas de uma instituição
router.patch('/linhas/:id', linhaController.linhaUpdatePatch);


//// PESQUISADOR ROUTES ////

//Requisição GET para listar todos os pesquisadores
router.get('/pesquisadores', pesquisadorController.pesquisadorList);

//Requisição GET para um pesquisador
router.get('/pesquisadores/:id', pesquisadorController.pesquisadorDetail);

//Requisição POST para adicionar um novo pesquisador
router.post('/pesquisadores', pesquisadorController.pesquisadorCreate);

//Requisição DELETE para excluir um pesquisador 
router.delete('/pesquisadores/:id', pesquisadorController.pesquisadorDelete);

//Requisição PUT para atualizar um pesquisador
router.put('/pesquisadores/:id', pesquisadorController.pesquisadorUpdatePut);

//Requisição PATCH para atualizar informações específicas de um pesquisador
router.patch('/pesquisadores/:id', pesquisadorController.pesquisadorUpdatePatch);


//// PROJETO ROUTES ////

//Requisição GET para listar todos os projetos
router.get('/projetos', projetoController.projetoList);

//Requisição GET para um projeto
router.get('/projetos/:id', projetoController.projetoDetail);

//Requisição POST para adicionar um novo projeto
router.post('/projetos', projetoController.projetoCreate);

//Requisição DELETE para excluir um projeto 
router.delete('/projetos/:id', projetoController.projetoDelete);

//Requisição PUT para atualizar um projeto
router.put('/projetos/:id', projetoController.projetoUpdatePut);

//Requisição PATCH para atualizar informações específicas de um projeto
router.patch('/projetos/:id', projetoController.projetoUpdatePatch);


//// PUBLICACAO ROUTES ////

//Requisição GET para listar todas as publicações
router.get('/publicacoes', publicacaoController.publicacaoList);

//Requisição GET para uma publicação
router.get('/publicacoes/:id', publicacaoController.publicacaoDetail);

//Requisição POST para adicionar uma nova publicação
router.post('/publicacoes', publicacaoController.publicacaoCreate);

//Requisição DELETE para excluir uma publicação
router.delete('/publicacoes/:id', publicacaoController.publicacaoDelete);

//Requisição PUT para atualizar uma publicação
router.put('/publicacoes/:id', publicacaoController.publicacaoUpdatePut);

//Requisição PATCH para atualizar informações específicas de uma publicação
router.patch('/publicacoes/:id', publicacaoController.publicacaoUpdatePatch);


//// SOBRE ROUTES ////

//Requisição GET para listar todos os sobres
router.get('/sobres', sobreController.sobreList);

//Requisição GET para um sobre
router.get('/sobres/:id', sobreController.sobreDetail);

//Requisição POST para adicionar um novo sobre
router.post('/sobres', sobreController.sobreCreate);

//Requisição DELETE para excluir um sobre 
router.delete('/sobres/:id', sobreController.sobreDelete);

//Requisição PUT para atualizar um sobre
router.put('/sobres/:id', sobreController.sobreUpdatePut);

//Requisição PATCH para atualizar informações específicas de um sobre
router.patch('/sobres/:id', sobreController.sobreUpdatePatch);


//// TEMA ROUTES ////

//Requisição GET para listar todos os temas
router.get('/temas', temaController.temaList);

//Requisição GET para um tema
router.get('/temas/:id', temaController.temaDetail);

//Requisição POST para adicionar um novo tema
router.post('/temas', temaController.temaCreate);

//Requisição DELETE para excluir um tema 
router.delete('/temas/:id', temaController.temaDelete);

//Requisição PUT para atualizar um tema
router.put('/temas/:id', temaController.temaUpdatePut);

//Requisição PATCH para atualizar informações específicas de um tema
router.patch('/temas/:id', temaController.temaUpdatePatch);

module.exports = router;
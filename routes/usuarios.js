var express = require('express');
var router = express.Router();
var usuarioController = require('../controllers/usuarioController');
var passport = require('../controllers/authController').passport;

//Requisição GET para listar todos os usuarios
router.get('/', passport.authenticate('jwt',{session: false}), usuarioController.usuarioList);

//Requisição GET para um usuario
router.get('/:id', usuarioController.usuarioDetail);

//Requisição POST para adicionar um novo usuario
router.post('/', usuarioController.usuarioCreate);

//Requisição DELETE para excluir um usuario 
router.delete('/:id', usuarioController.usuarioDelete);

//Requisição PUT para atualizar um usuario
router.put('/:id', usuarioController.usuarioUpdatePut);

//Requisição PATCH para atualizar informações específicas de um usuario
router.patch('/:id', usuarioController.usuarioUpdatePatch);

module.exports = router;

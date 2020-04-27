var Usuario = require('../models/usuario');
var uri = require('../utils/uri');
var async = require('async');

//Retorna uma lista de todos os usuarios
exports.usuarioList = function(req, res, next){
    var offset = 0; //A lista de recursos inicia do 0 por padrão.
    var limit = 1000; //Limite máximo de recursos retornados por padrão.
    var sort = req.query.sort? req.query.sort : {codigo: 'asc'}; //Padrão de ordenação

    if(req.query.offset){
        var offset = parseInt(req.query.offset);
    }
    if(req.query.limit){
        var limit = parseInt(req.query.limit);
    }
    req.accepts('json');
    Usuario.find()
    .sort(sort)
    .skip(offset)
    .limit(limit) 
    .exec(function (error, lista_usuario){
        if(error){return next(error);}
        if(lista_usuario.length === 0)
            res.status(204).json();
        else
            res.status(200).json(lista_usuario);
    });
};

//Adiciona um novo usuario
exports.usuarioCreate = function(req, res, next){
    req.accepts('json');
    if (Object.entries(req.body).length){
        usuario = new Usuario(req.body);
        usuario.save(function (error){
            if (error){
                next(error);
            }
            usuarioURI = uri.getURI(req, 'usuarios', usuario.id);
            res.set('Location', usuarioURI)
            .status(201)
            .json(usuario);
        });
    }else{
        res.status(400).json({"codigo": 400, "error": "A requisição requer um elemento a ser criado deve ser representado por um objeto JSON no body."});
    }  
};

//Retorna um usuario específico
exports.usuarioDetail = function(req, res, next){
    req.accepts('json');
    Usuario.findById(req.params.id.toString())
    .exec(function (error, usuario){
        if(error){
            next(error);
        }
        res.status(200).json(usuario.toJSON());
    });
};

//Atualiza as informações do usuario
exports.usuarioUpdatePut = function(req, res, next){
    req.accepts('json');
    if (Object.entries(req.body).length){
        if(('id' in req.body) || ('_id' in req.body)){
            res.status(406).json({"code": 406, "error" : "É impossível atualizar o identificador de um recurso, se você deseja adicionar um novo recurso use o método POST."});
        }
        email = req.body.email;
        senha = req.body.senha;
        admin = req.body.admin;
        Usuario.findByIdAndUpdate(req.params.id,{email: email, senha: senha, admin: admin}, {new: true}, function (error, usuario){
            if(error){
                next(error);
            }else{
                usuarioURI = uri.getURI(req, 'usuarios', usuario.id);
                res.set('Location', usuarioURI)
                .status(200)
                .json(usuario);
            }
        });
    }else{
        res.status(400).json({"code" : 400, "error" : "A requisição veio sem body, porque coloque o objeto JSON no corpo da requisição."});
    }
};

//Exclui um usuario
exports.usuarioDelete = function(req, res, next){
    req.accepts('json');
    Usuario.findByIdAndDelete(req.params.id)
    .exec(function (error){
        if(error){
            next(error);
        }
        res.status(204).json();
    });
};

//Atualia informações específicas do usuario
exports.usuarioUpdatePatch = function(req, res, next){
    req.accepts('json');
    if (Object.keys(req.body).length){
        if(('id' in req.body) || ('_id' in req.body)){
            res.status(406).json({"code": 406, "error" : "É impossível atualizar o identificador de um recurso, se você deseja adicionar um novo recurso use o método POST."});
        }
        Usuario.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (error, usuario){
            if(error){
                next(error);
            }else{
                usuarioURI = uri.getURI(req, 'usuarios', usuario.id)
                res.set('Location', usuarioURI)
                .status(200)
                .json(usuario);
            }
        });
    }else{
        res.status(400).json({"code" : 400, "error" : "A requisição veio sem body, porque coloque o objeto JSON no corpo da requisição."});
    }
};
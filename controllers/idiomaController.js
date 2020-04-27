var Idioma = require('../models/idioma');
var uri = require('../utils/uri');
var async = require('async');

//Retorna uma lista de todos os idiomas
exports.idiomaList = function(req, res, next){
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
    Idioma.find()
    .sort(sort)
    .skip(offset)
    .limit(limit) 
    .exec(function (error, lista_idioma){
        if(error){return next(error);}
        res.status(200).json(lista_idioma);
    });
};

//Adiciona um novo idioma
exports.idiomaCreate = function(req, res, next){
    req.accepts('json');
    if (Object.entries(req.body).length){
        idioma = new Idioma(req.body);
        idioma.save(function (error){
            if (error){
                next(error);
            }
            idiomaURI = uri.getURI(req, 'idiomas', idioma.id);
            res.set('Location', idiomaURI)
            .status(201)
            .json(idioma);
        });
    }else{
        res.status(400).json({"codigo": 400, "error": "A requisição requer um elemento a ser criado deve ser representado por um objeto JSON no body."});
    }  
};

//Retorna um idioma específico
exports.idiomaDetail = function(req, res, next){
    req.accepts('json');
    Idioma.findById(req.params.id.toString())
    .exec(function (error, idioma){
        if(error){
            next(error);
        }
        res.status(200).json(idioma.toJSON());
    });
};

//Atualiza as informações do idioma
exports.idiomaUpdatePut = function(req, res, next){
    req.accepts('json');
    if (Object.entries(req.body).length){
        if(('id' in req.body) || ('_id' in req.body)){
            res.status(406).json({"code": 406, "error" : "É impossível atualizar o identificador de um recurso, se você deseja adicionar um novo recurso use o método POST."});
        }
        codigo = req.body.codigo;
        nome = req.body.nome;
        imagePath = req.body.imagePath;
        Idioma.findByIdAndUpdate(req.params.id,{codigo: codigo, nome: nome, imagePath: imagePath}, {new: true}, function (error, idioma){
            if(error){
                next(error);
            }else{
                idiomaURI = uri.getURI(req, 'idiomas', idioma.id);
                res.set('Location', idiomaURI)
                .status(200)
                .json(idioma);
            }
        });
    }else{
        res.status(400).json({"code" : 400, "error" : "A requisição veio sem body, porque coloque o objeto JSON no corpo da requisição."});
    }
};

//Exclui um idioma
exports.idiomaDelete = function(req, res, next){
    req.accepts('json');
    Idioma.findByIdAndDelete(req.params.id)
    .exec(function (error){
        if(error){
            next(error);
        }
        res.status(204).json();
    });
};

//Atualia informações específicas do idioma
exports.idiomaUpdatePatch = function(req, res, next){
    req.accepts('json');
    if (Object.keys(req.body).length){
        if(('id' in req.body) || ('_id' in req.body)){
            res.status(406).json({"code": 406, "error" : "É impossível atualizar o identificador de um recurso, se você deseja adicionar um novo recurso use o método POST."});
        }
        Idioma.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (error, idioma){
            if(error){
                next(error);
            }else{
                idiomaURI = uri.getURI(req, 'idiomas', idioma.id)
                res.set('Location', idiomaURI)
                .status(200)
                .json(idioma);
            }
        });
    }else{
        res.status(400).json({"code" : 400, "error" : "A requisição veio sem body, porque coloque o objeto JSON no corpo da requisição."});
    }
};
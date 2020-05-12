/**
 * @fileoverview Controller do recurso idiomas.
 */
var Idioma = require('../models/idioma');
var uri = require('../utils/uri');
var series = require('async/series'), parallel = require('async/parallel');


/**
 * Retorna a lista de idiomas armazenados no banco de dados. 
 * 
 * (Paginação) Os parâmetros para paginação são `offset` e `limit` são opcionais, devem ser valores do tipo 
 * inteiro e estar presentes na string query da requisição HTTP(req). 
 * (Ordenação) A ordem dos idiomas na lista retornada é controlada pelo parâmetro `sort` na string query da 
 * requisição HTTP (req). Por exemplo, para ordenar a lista de acordo com o campo codigo na ordem crescente 
 * ou decrescent, respectivamente: sort[codigo]='asc' ou sort[codigo]='desc'
 * 
 * Por padrão a lista de idiomas é retornada de acordo com o campo `codigo` na ordem crescente,
 * offset iniciando no primeiro elemento (0), e limite máximo de 1000 idiomas por página.
 * 
 * @param {object} req Representa a requisição HTTP e tem propriedades para a string 
 *     query da requisição, parâmetros, corpo, cabeçalhos HTTP, e assim por diante. 
 * @param {object} res Representa a resposta HTTP que a aplicação enviará quando obtiver 
 *     uma requisição HTTP.
 * @param {function} next Usada para passar o controle para a próxima função de middleware, 
 *     utilizada para levar os erros lançados na função até os middlewares de manipulação de erros.
 * @returns {function} Em caso de erros, efetuamos um bypass usando a função `next`.
*/

exports.idiomaList = function(req, res, next){
    /**
     * Primeiro elemento da lista a ser retornada.
     * @type {number}
     */
    var offset = req.query.offset ? parseInt(req.query.offset): 0; //A lista de recursos inicia do 0 por padrão.
    /**
     * Quantidade máxima de elementos da lista a ser retornada.
     * @type {number}
     */
    var limit = req.query.limit ? parseInt(req.query.limit): 1000; //Limite máximo de recursos retornados por padrão.
    /**
     * Objeto representando a ordem dos elementos da lista a ser retornada.
     * @type {number}
     */
    var sort = req.query.sort? req.query.sort : {codigo: 'asc'}; //Padrão de ordenação

    if(!(offset && limit)){
        err = new Error("Os parâmetros de paginação devem ter valor inteiro.");
        err.status = 400;
        err.name = "InvalidArgumentError";
        error.isOperacional = true;
        return next(err);
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

/**
 * Adiciona um novo idioma. Requer que um objeto JSON seja passado no corpo da 
 * requisição representando o idioma que será adicionado.
 * 
 * @param {object} req Representa a requisição HTTP e tem propriedades para a string 
 *     query da requisição, parâmetros, corpo, cabeçalhos HTTP, e assim por diante. 
 * @param {object} res Representa a resposta HTTP que a aplicação enviará quando obtiver 
 *     uma requisição HTTP.
 * @param {function} next Usada para passar o controle para a próxima função de middleware, 
 *     utilizada para levar os erros lançados na função até os middlewares de manipulação de erros.
 * @returns {function} Em caso de erros, efetuamos um bypass usando a função `next`.
*/

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
        err = new Error("A requisição requer um elemento a ser criado deve ser representado por um objeto JSON no body.");
        err.status = 400;
        err.name = "InvalidInputError";
        error.isOperacional = true;
        next(err);
    }  
};


/**
 * Retorna um idioma específico.
 * 
 * @param {object} req Representa a requisição HTTP e tem propriedades para a string 
 *     query da requisição, parâmetros, corpo, cabeçalhos HTTP, e assim por diante. 
 * @param {object} res Representa a resposta HTTP que a aplicação enviará quando obtiver 
 *     uma requisição HTTP.
 * @param {function} next Usada para passar o controle para a próxima função de middleware, 
 *     utilizada para levar os erros lançados na função até os middlewares de manipulação de erros.
 * @returns {function} Em caso de erros, efetuamos um bypass usando a função `next`.
*/

exports.idiomaDetail = function(req, res, next){
    req.accepts('json');
    Idioma.findById(req.params.id)
    .exec(function (error, idioma){
        if(error){
            next(error);
        }
        res.status(200).json(idioma.toJSON());
    });
};


/**
 * Atualiza as informações do idioma
 * 
 * @param {object} req Representa a requisição HTTP e tem propriedades para a string 
 *     query da requisição, parâmetros, corpo, cabeçalhos HTTP, e assim por diante. 
 * @param {object} res Representa a resposta HTTP que a aplicação enviará quando obtiver 
 *     uma requisição HTTP.
 * @param {function} next Usada para passar o controle para a próxima função de middleware, 
 *     utilizada para levar os erros lançados na função até os middlewares de manipulação de erros.
 * @returns {function} Em caso de erros, efetuamos um bypass usando a função `next`.
*/
exports.idiomaUpdatePut = function(req, res, next){
    req.accepts('json');
    if (Object.entries(req.body).length){
        if(('id' in req.body) || ('_id' in req.body)){
            error = new Error("É impossível atualizar o identificador de um recurso, se você deseja adicionar um novo recurso use o método POST.");
            error.name = "InvalidInputError"
            error.status = 406
            error.isOperacional = true;
            next(error);
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
        err = new Error("A requisição requer um elemento a ser criado deve ser representado por um objeto JSON no body.");
        err.status = 400;
        err.name = "InvalidInputError";
        error.isOperacional = true;
        next(err);
    }
};


/**
 * Exclui um idioma.
 * 
 * @param {object} req Representa a requisição HTTP e tem propriedades para a string 
 *     query da requisição, parâmetros, corpo, cabeçalhos HTTP, e assim por diante. 
 * @param {object} res Representa a resposta HTTP que a aplicação enviará quando obtiver 
 *     uma requisição HTTP.
 * @param {function} next Usada para passar o controle para a próxima função de middleware, 
 *     utilizada para levar os erros lançados na função até os middlewares de manipulação de erros.
 * @returns {function} Em caso de erros, efetuamos um bypass usando a função `next`.
*/
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


/**
 * Atualiza informações específicas de um idioma.
 * 
 * @param {object} req Representa a requisição HTTP e tem propriedades para a string 
 *     query da requisição, parâmetros, corpo, cabeçalhos HTTP, e assim por diante. 
 * @param {object} res Representa a resposta HTTP que a aplicação enviará quando obtiver 
 *     uma requisição HTTP.
 * @param {function} next Usada para passar o controle para a próxima função de middleware, 
 *     utilizada para levar os erros lançados na função até os middlewares de manipulação de erros.
 * @returns {function} Em caso de erros, efetuamos um bypass usando a função `next`.
*/
exports.idiomaUpdatePatch = function(req, res, next){
    req.accepts('json');
    if (Object.keys(req.body).length){
        if(('id' in req.body) || ('_id' in req.body)){
            error = new Error("É impossível atualizar o identificador de um recurso, se você deseja adicionar um novo recurso use o método POST.");
            error.name = "InvalidInputError"
            error.status = 406
            error.isOperacional = true;
            next(error);
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
        err = new Error("A requisição requer um elemento a ser criado deve ser representado por um objeto JSON no body.");
        err.status = 400;
        err.name = "InvalidInputError";
        error.isOperacional = true;
        next(err);
    }
};
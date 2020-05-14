/**
 *  Registra todos os erros que ocorrem no sistema em arquivo de logging.
 * 
 * @param {object} err Representa o erro que foi lançado no sistema. Geralmente, é 
 *     uma instância da classe Error da Javascript.
 * @param {object} req Representa a requisição HTTP e tem propriedades para a string 
 *     query da requisição, parâmetros, corpo, cabeçalhos HTTP, e assim por diante. 
 * @param {object} res Representa a resposta HTTP que a aplicação enviará quando obtiver 
 *     uma requisição HTTP.
 * @param {function} next Usada para passar o controle para a próxima função de middleware, 
 *     utilizada para levar os erros lançados na função até os middlewares de manipulação de erros.
 */ 
function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}

/**
 *  Manipula os erros do Mongoose.
 * 
 * @param {object} err Representa o erro que foi lançado no sistema. Geralmente, é 
 *     uma instância da classe Error da Javascript.
 * @param {object} req Representa a requisição HTTP e tem propriedades para a string 
 *     query da requisição, parâmetros, corpo, cabeçalhos HTTP, e assim por diante. 
 * @param {object} res Representa a resposta HTTP que a aplicação enviará quando obtiver 
 *     uma requisição HTTP.
 * @param {function} next Usada para passar o controle para a próxima função de middleware, 
 *     utilizada para levar os erros lançados na função até os middlewares de manipulação de erros.
 */
exports.mongooseErrorHandler = function(err, req, res, next){
  err.isOperacional = true;
  switch (err.name) {
    case 'ValidationError':
      /*
      for (field in err.errors) {
          switch (err.errors[field].type) {
              case 'exists':
                  break;
              case 'invalid':
                  break;
              default:
                  break;
          }
      }
      */
      err.status = 400;
      break;
    case 'DocumentNotFoundError':
      err.status = 404;
      break;
    case 'MongoError':
      err.status= 400;
      if(err.code === 11000){
        err.message = err.errmsg;
      }
  }
  next(err);
}

/**
 * Manipula os erros operacionais que ocorrem no sistema. Exemplos incluem: falha na conexão 
 * com o servidor, falha na resolução do hostname, entrada do usuário inválida, expiração do 
 * tempo da requisição, servidor retornou uma resposta com código 500, socket hang-up, sistema
 * sem memória.
 * 
 * @param {object} err Representa o erro que foi lançado no sistema. 
 * @param {object} req Representa a requisição HTTP e tem propriedades para a string 
 *     query da requisição, parâmetros, corpo, cabeçalhos HTTP, e assim por diante. 
 * @param {object} res Representa a resposta HTTP que a aplicação enviará quando obtiver 
 *     uma requisição HTTP.
 * @param {function} next Usada para passar o controle para a próxima função de middleware, 
 *     utilizada para levar os erros lançados na função até os middlewares de manipulação de erros.
 */ 
exports.operationalErrorHandler = function(err, req, res, next) {
  console.log(err)
  if(err.isOperacional){
    if (process.env.NODE_ENV === 'development') {
      res.status(err.status).json({
        "status": err.status,
        "error": err.name,
        "message": err.message,
        "stack": err.stack
      });
    }else{
      res.status(err.status).json({
        "status": err.status,
        "message": err.message
      });
    }
  }else{
    next(err);
  }
}

/**
 *  Manipula erros que não poderam ser manipulados apropriadamente.
 * 
 * @param {object} err Representa o erro que foi lançado no sistema. Geralmente, é 
 *     uma instância da classe Error da Javascript.
 * @param {object} req Representa a requisição HTTP e tem propriedades para a string 
 *     query da requisição, parâmetros, corpo, cabeçalhos HTTP, e assim por diante. 
 * @param {object} res Representa a resposta HTTP que a aplicação enviará quando obtiver 
 *     uma requisição HTTP.
 * @param {function} next Usada para passar o controle para a próxima função de middleware, 
 *     utilizada para levar os erros lançados na função até os middlewares de manipulação de erros.
 */ 
exports.errorHandler = function (err, req, res, next) {
  // set locals, only providing error in development
  error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).json(error);
}
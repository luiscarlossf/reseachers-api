function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}

function operationalErrorHandler (err, req, res, next) {
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

function errorHandler (err, req, res, next) {
  res.status(500)
  res.json({ "error": "Alguma coisa falhou!" });
}
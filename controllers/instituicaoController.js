//Retorna uma lista de todos as instituições
exports.instituicaoList = function(req, res){
    res.send("NOT_IMPLEMENTED Lista de instituições")
}

//Retorna uma instituição específico
exports.instituicaoDetail = function(req, res){
    res.send("NOT_IMPLEMENTED Detalhes da instituição " + req.params.id)
}

//Adiciona uma nova instituição
exports.instituicaoCreate = function(req, res){
    res.send("NOT_IMPLEMENTED Criação do instituição")
}

//Exclui uma instituição
exports.instituicaoDelete = function(req, res){
    res.send("NOT_IMPLEMENTED Exclusão do instituição" + req.params.id)
}

//Atualiza as informações da instituição
exports.instituicaoUpdatePut = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização do instituição" + req.params.id)
}

//Atualia informações específicas da instituição
exports.instituicaoUpdatePatch = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização de informações específicas do instituição" + req.params.id)
}
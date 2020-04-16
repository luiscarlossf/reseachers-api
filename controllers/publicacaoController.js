//Retorna uma lista de todos as publicações
exports.publicacaoList = function(req, res){
    res.send("NOT_IMPLEMENTED Lista de publicações")
}

//Retorna uma publicação específico
exports.publicacaoDetail = function(req, res){
    res.send("NOT_IMPLEMENTED Detalhes da publicação " + req.params.id)
}

//Adiciona uma nova publicação
exports.publicacaoCreate = function(req, res){
    res.send("NOT_IMPLEMENTED Criação do publicação")
}

//Exclui uma publicação
exports.publicacaoDelete = function(req, res){
    res.send("NOT_IMPLEMENTED Exclusão do publicação" + req.params.id)
}

//Atualiza as informações da publicação
exports.publicacaoUpdatePut = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização do publicação" + req.params.id)
}

//Atualia informações específicas da publicação
exports.publicacaoUpdatePatch = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização de informações específicas do publicação" + req.params.id)
}
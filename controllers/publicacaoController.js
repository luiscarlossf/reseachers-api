//Retorna uma lista de todos as publicações
exports.publicacao_list = function(req, res){
    res.send("NOT_IMPLEMENTED Lista de publicações")
}

//Retorna uma publicação específico
exports.publicacao_detail = function(req, res){
    res.send("NOT_IMPLEMENTED Detalhes da publicação " + req.params.id)
}

//Adiciona uma nova publicação
exports.publicacao_create = function(req, res){
    res.send("NOT_IMPLEMENTED Criação do publicação")
}

//Exclui uma publicação
exports.publicacao_delete = function(req, res){
    res.send("NOT_IMPLEMENTED Exclusão do publicação" + req.params.id)
}

//Atualiza as informações da publicação
exports.publicacao_update_put = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização do publicação" + req.params.id)
}

//Atualia informações específicas da publicação
exports.publicacao_update_patch = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização de informações específicas do publicação" + req.params.id)
}
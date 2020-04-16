//Retorna uma lista de todos as instituições
exports.instituicao_list = function(req, res){
    res.send("NOT_IMPLEMENTED Lista de instituições")
}

//Retorna uma instituição específico
exports.instituicao_detail = function(req, res){
    res.send("NOT_IMPLEMENTED Detalhes da instituição " + req.params.id)
}

//Adiciona uma nova instituição
exports.instituicao_create = function(req, res){
    res.send("NOT_IMPLEMENTED Criação do instituição")
}

//Exclui uma instituição
exports.instituicao_delete = function(req, res){
    res.send("NOT_IMPLEMENTED Exclusão do instituição" + req.params.id)
}

//Atualiza as informações da instituição
exports.instituicao_update_put = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização do instituição" + req.params.id)
}

//Atualia informações específicas da instituição
exports.instituicao_update_patch = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização de informações específicas do instituição" + req.params.id)
}
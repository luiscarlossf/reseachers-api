//Retorna uma lista de todos os pesquisadores
exports.pesquisador_list = function(req, res){
    res.send("NOT_IMPLEMENTED Lista de pesquisadores")
}

//Retorna um pesquisador específico
exports.pesquisador_detail = function(req, res){
    res.send("NOT_IMPLEMENTED Detalhes do pesquisador " + req.params.id)
}

//Adiciona um novo pesquisador
exports.pesquisador_create = function(req, res){
    res.send("NOT_IMPLEMENTED Criação do pesquisador")
}

//Exclui um pesquisador
exports.pesquisador_delete = function(req, res){
    res.send("NOT_IMPLEMENTED Exclusão do pesquisador" + req.params.id)
}

//Atualiza as informações do pesquisador
exports.pesquisador_update_put = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização do pesquisador" + req.params.id)
}

//Atualia informações específicas do pesquisador
exports.pesquisador_update_patch = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização de informações específicas do pesquisador" + req.params.id)
}
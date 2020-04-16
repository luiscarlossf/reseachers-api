//Retorna uma lista de todos os laboratórios/grupos de pesquisa
exports.labgroup_list = function(req, res){
    res.send("NOT_IMPLEMENTED Lista de laboratórios/grupos de pesquisa")
}

//Retorna um laboratório/grupo de pesquisa específico
exports.labgroup_detail = function(req, res){
    res.send("NOT_IMPLEMENTED Detalhes do laboratório/grupo de pesquisa " + req.params.id)
}

//Adiciona um novo laboratório/grupo de pesquisa
exports.labgroup_create = function(req, res){
    res.send("NOT_IMPLEMENTED Criação do laboratório/grupo de pesquisa")
}

//Exclui um laboratório/grupo de pesquisa
exports.labgroup_delete = function(req, res){
    res.send("NOT_IMPLEMENTED Exclusão do laboratório/grupo de pesquisa" + req.params.id)
}

//Atualiza as informações do laboratório/grupo de pesquisa
exports.labgroup_update_put = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização do laboratório/grupo de pesquisa" + req.params.id)
}

//Atualia informações específicas do laboratório/grupo de pesquisa
exports.labgroup_update_patch = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização de informações específicas do laboratório/grupo de pesquisa" + req.params.id)
}
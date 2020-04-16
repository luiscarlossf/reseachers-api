//Retorna uma lista de todos os projetos
exports.projeto_list = function(req, res){
    res.send("NOT_IMPLEMENTED Lista de projetos")
}

//Retorna um projeto específico
exports.projeto_detail = function(req, res){
    res.send("NOT_IMPLEMENTED Detalhes do projeto " + req.params.id)
}

//Adiciona um novo projeto
exports.projeto_create = function(req, res){
    res.send("NOT_IMPLEMENTED Criação do projeto")
}

//Exclui um projeto
exports.projeto_delete = function(req, res){
    res.send("NOT_IMPLEMENTED Exclusão do projeto" + req.params.id)
}

//Atualiza as informações do projeto
exports.projeto_update_put = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização do projeto" + req.params.id)
}

//Atualia informações específicas do projeto
exports.projeto_update_patch = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização de informações específicas do projeto" + req.params.id)
}
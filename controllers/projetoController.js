//Retorna uma lista de todos os projetos
exports.projetoList = function(req, res){
    res.send("NOT_IMPLEMENTED Lista de projetos")
}

//Retorna um projeto específico
exports.projetoDetail = function(req, res){
    res.send("NOT_IMPLEMENTED Detalhes do projeto " + req.params.id)
}

//Adiciona um novo projeto
exports.projetoCreate = function(req, res){
    res.send("NOT_IMPLEMENTED Criação do projeto")
}

//Exclui um projeto
exports.projetoDelete = function(req, res){
    res.send("NOT_IMPLEMENTED Exclusão do projeto" + req.params.id)
}

//Atualiza as informações do projeto
exports.projetoUpdatePut = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização do projeto" + req.params.id)
}

//Atualia informações específicas do projeto
exports.projetoUpdatePatch = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização de informações específicas do projeto" + req.params.id)
}
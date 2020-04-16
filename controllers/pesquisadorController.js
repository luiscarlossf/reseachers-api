//Retorna uma lista de todos os pesquisadores
exports.pesquisadorList = function(req, res){
    res.send("NOT_IMPLEMENTED Lista de pesquisadores");
};

//Retorna um pesquisador específico
exports.pesquisadorDetail = function(req, res){
    res.send("NOT_IMPLEMENTED Detalhes do pesquisador " + req.params.id);
};

//Adiciona um novo pesquisador
exports.pesquisadorCreate = function(req, res){
    res.send("NOT_IMPLEMENTED Criação do pesquisador");
};

//Exclui um pesquisador
exports.pesquisadorDelete = function(req, res){
    res.send("NOT_IMPLEMENTED Exclusão do pesquisador" + req.params.id);
};

//Atualiza as informações do pesquisador
exports.pesquisadorUpdatePut = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização do pesquisador" + req.params.id);
};

//Atualia informações específicas do pesquisador
exports.pesquisadorUpdatePatch = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização de informações específicas do pesquisador" + req.params.id);
};
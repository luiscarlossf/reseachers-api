//Retorna uma lista de todos os laboratórios/grupos de pesquisa
exports.labgroupList = function(req, res){
    res.send("NOT_IMPLEMENTED Lista de laboratórios/grupos de pesquisa");
};

//Retorna um laboratório/grupo de pesquisa específico
exports.labgroupDetail = function(req, res){
    res.send("NOT_IMPLEMENTED Detalhes do laboratório/grupo de pesquisa " + req.params.id);
};

//Adiciona um novo laboratório/grupo de pesquisa
exports.labgroupCreate = function(req, res){
    res.send("NOT_IMPLEMENTED Criação do laboratório/grupo de pesquisa");
};

//Exclui um laboratório/grupo de pesquisa
exports.labgroupDelete = function(req, res){
    res.send("NOT_IMPLEMENTED Exclusão do laboratório/grupo de pesquisa" + req.params.id);
};

//Atualiza as informações do laboratório/grupo de pesquisa
exports.labgroupUpdatePut = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização do laboratório/grupo de pesquisa" + req.params.id);
};

//Atualia informações específicas do laboratório/grupo de pesquisa
exports.labgroupUpdatePatch = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização de informações específicas do laboratório/grupo de pesquisa" + req.params.id);
};
//Retorna uma lista de todos os sobres
exports.sobreList = function(req, res){
    res.send("NOT_IMPLEMENTED Lista de sobres");
};

//Retorna um sobre específico
exports.sobreDetail = function(req, res){
    res.send("NOT_IMPLEMENTED Detalhes do sobre ");
};

//Adiciona um novo sobre
exports.sobreCreate = function(req, res){
    res.send("NOT_IMPLEMENTED Criação do sobre");
};

//Exclui um sobre
exports.sobreDelete = function(req, res){
    res.send("NOT_IMPLEMENTED Exclusão do sobre" + req.params.id);
};

//Atualiza as informações do sobre
exports.sobreUpdatePut = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização do sobre" + req.params.id);
};

//Atualia informações específicas do sobre
exports.sobreUpdatePatch = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização de informações específicas do sobre" + req.params.id);
};
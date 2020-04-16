//Retorna uma lista de todos os temas
exports.temaList = function(req, res){
    res.send("NOT_IMPLEMENTED Lista de temas");
};

//Retorna um tema específico
exports.temaDetail = function(req, res){
    res.send("NOT_IMPLEMENTED Detalhes do tema " + req.params.id);
};

//Adiciona um novo tema
exports.temaCreate = function(req, res){
    res.send("NOT_IMPLEMENTED Criação do tema");
};

//Exclui um tema
exports.temaDelete = function(req, res){
    res.send("NOT_IMPLEMENTED Exclusão do tema" + req.params.id);
};

//Atualiza as informações do tema
exports.temaUpdatePut = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização do tema" + req.params.id);
};

//Atualia informações específicas do tema
exports.temaUpdatePatch = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização de informações específicas do tema" + req.params.id);
};
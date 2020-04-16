//Retorna um sobre específico
exports.sobre_detail = function(req, res){
    res.send("NOT_IMPLEMENTED Detalhes do sobre ")
}

//Adiciona um novo sobre
exports.sobre_create = function(req, res){
    res.send("NOT_IMPLEMENTED Criação do sobre")
}

//Exclui um sobre
exports.sobre_delete = function(req, res){
    res.send("NOT_IMPLEMENTED Exclusão do sobre" + req.params.id)
}

//Atualiza as informações do sobre
exports.sobre_update_put = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização do sobre" + req.params.id)
}

//Atualia informações específicas do sobre
exports.sobre_update_patch = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização de informações específicas do sobre" + req.params.id)
}
//Retorna uma lista de todos os temas
exports.tema_list = function(req, res){
    res.send("NOT_IMPLEMENTED Lista de temas")
}

//Retorna um tema específico
exports.tema_detail = function(req, res){
    res.send("NOT_IMPLEMENTED Detalhes do tema " + req.params.id)
}

//Adiciona um novo tema
exports.tema_create = function(req, res){
    res.send("NOT_IMPLEMENTED Criação do tema")
}

//Exclui um tema
exports.tema_delete = function(req, res){
    res.send("NOT_IMPLEMENTED Exclusão do tema" + req.params.id)
}

//Atualiza as informações do tema
exports.tema_update_put = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização do tema" + req.params.id)
}

//Atualia informações específicas do tema
exports.tema_update_patch = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização de informações específicas do tema" + req.params.id)
}
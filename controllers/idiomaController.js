//Retorna uma lista de todos os idiomas
exports.idioma_list = function(req, res){
    res.send("NOT_IMPLEMENTED Lista de idiomas")
}

//Retorna um idioma específico
exports.idioma_detail = function(req, res){
    res.send("NOT_IMPLEMENTED Detalhes do idioma " + req.params.id)
}

//Adiciona um novo idioma
exports.idioma_create = function(req, res){
    res.send("NOT_IMPLEMENTED Criação do idioma")
}

//Exclui um idioma
exports.idioma_delete = function(req, res){
    res.send("NOT_IMPLEMENTED Exclusão do idioma" + req.params.id)
}

//Atualiza as informações do idioma
exports.idioma_update_put = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização do idioma" + req.params.id)
}

//Atualia informações específicas do idioma
exports.idioma_update_patch = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização de informações específicas do idioma" + req.params.id)
}
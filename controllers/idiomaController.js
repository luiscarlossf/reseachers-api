//Retorna uma lista de todos os idiomas
exports.idiomaList = function(req, res){
    res.send("NOT_IMPLEMENTED Lista de idiomas")
}

//Retorna um idioma específico
exports.idiomaDetail = function(req, res){
    res.send("NOT_IMPLEMENTED Detalhes do idioma " + req.params.id)
}

//Adiciona um novo idioma
exports.idiomaCreate = function(req, res){
    res.send("NOT_IMPLEMENTED Criação do idioma")
}

//Exclui um idioma
exports.idiomaDelete = function(req, res){
    res.send("NOT_IMPLEMENTED Exclusão do idioma" + req.params.id)
}

//Atualiza as informações do idioma
exports.idiomaUpdatePut = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização do idioma" + req.params.id)
}

//Atualia informações específicas do idioma
exports.idiomaUpdatePatch = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização de informações específicas do idioma" + req.params.id)
}
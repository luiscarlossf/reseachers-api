//Retorna uma lista de todas as linhas de pesquisa
exports.linhaList = function(req, res){
    res.send("NOT_IMPLEMENTED Lista de linhas de pesquisa")
}

//Retorna uma linha específico específica.
exports.linhaDetail = function(req, res){
    res.send("NOT_IMPLEMENTED Detalhes do linha " + req.params.id)
}

//Adiciona uma nova linha de pesquisa
exports.linhaCreate = function(req, res){
    res.send("NOT_IMPLEMENTED Criação do linha")
}

//Exclui uma linha de pesquisa específica
exports.linhaDelete = function(req, res){
    res.send("NOT_IMPLEMENTED Exclusão do linha" + req.params.id)
}

//Atualiza as informações da linha de pesquisa específica
exports.linhaUpdatePut = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização do linha" + req.params.id)
}

//Atualia informações específicas da linha de pesquisa específica.
exports.linhaUpdatePatch = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização de informações específicas do linha" + req.params.id)
}
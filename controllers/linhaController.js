//Retorna uma lista de todas as linhas de pesquisa
exports.linha_list = function(req, res){
    res.send("NOT_IMPLEMENTED Lista de linhas de pesquisa")
}

//Retorna uma linha específico específica.
exports.linha_detail = function(req, res){
    res.send("NOT_IMPLEMENTED Detalhes do linha " + req.params.id)
}

//Adiciona uma nova linha de pesquisa
exports.linha_create = function(req, res){
    res.send("NOT_IMPLEMENTED Criação do linha")
}

//Exclui uma linha de pesquisa específica
exports.linha_delete = function(req, res){
    res.send("NOT_IMPLEMENTED Exclusão do linha" + req.params.id)
}

//Atualiza as informações da linha de pesquisa específica
exports.linha_update_put = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização do linha" + req.params.id)
}

//Atualia informações específicas da linha de pesquisa específica.
exports.linha_update_patch = function(req, res){
    res.send("NOT_IMPLEMENTED Atualização de informações específicas do linha" + req.params.id)
}
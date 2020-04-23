exports.getURI = function (req, resource, id){
    return req.baseUrl +  '/' + resource + '/'+ id.toString()
}
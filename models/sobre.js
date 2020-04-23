var mongoose = require('mongoose');

//Definindo o esquema
var Schema = mongoose.Schema;

var SobreSchema = new Schema({
    nome:{
        type: String, 
        required: true
    },
    sigla: {
        type: String, 
        required: true
    },
    logoPath: {
        type: String
    },
    imagemPath: {
        type: String
    },
    descricao: {
        type: String, 
        required: true
    },
    telefone: {
        type: String
    },
    email: {
        type: String
    },
    endereco: {
        type: String
    },
    facebook: {
        type: String
    },
    twitter: {
        type: String
    },
    instagram: {
        type: String
    }
});

//Virtual para URL do Sobre
SobreSchema.virtual('url').get(function(){
    return '/sobres/' + this._id;
});

//Exportando o modelo Sobre
module.exports = mongoose.model('Sobre', SobreSchema);
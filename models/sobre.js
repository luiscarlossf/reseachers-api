var mongoose = require('mongoose');

//Definindo o esquema
var Schema = mongoose.Schema;

var SobreSchema = new Schema({
    nome:{
        type: String, 
        required: [true, 'A propriedade `nome` é obrigatória.']
    },
    sigla: {
        type: String, 
        required: [true, 'A propriedade `sigla` é obrigatória.']
    },
    descricao: {
        type: String, 
        required: [true, 'A propriedade `descricao` é obrigatória.']
    },
    logoPath: {
        type: String
    },
    imagemPath: {
        type: String
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
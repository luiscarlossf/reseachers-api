var mongoose = require('mongoose');

//Definindo o esquema
var Schema = mongoose.Schema;

var InstituicaoSchema = new Schema({
    nome: {
        type: String,
        require: true
    },
    logoPath: {
        type: String,
    },
    linkSite: {
        type: String
    },
    categoria: {
        type: String,
        enum: ['Empresa Parceira', 'Instituição Parceira', 'Empresa Apoiadora', 'Instituição Apoiadora'],
        required: true
    }
});

//Virtual para URL do Instituicao
InstituicaoSchema.virtual('url').get(function(){
    return '/instituicao/' + this._id;
});

//Exportando o modelo Instituicao
module.exports = mongoose.model('Instituicao', InstituicaoSchema);
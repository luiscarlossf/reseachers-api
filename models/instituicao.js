var mongoose = require('mongoose');

//Definindo o esquema
var Schema = mongoose.Schema;

var InstituicaoSchema = new Schema({
    nome: {
        type: String,
        require: [true, 'A propriedade `nome` é obrigatória.']
    },
    categoria: {
        type: String,
        enum: ['Empresa Parceira', 'Instituição Parceira', 'Empresa Apoiadora', 'Instituição Apoiadora'],
        require: [true, 'A propriedade `categoria` é obrigatória.']
    },
    logoPath: {
        type: String,
    },
    linkSite: {
        type: String
    }
});

//Virtual para URL do Instituicao
InstituicaoSchema.virtual('url').get(function(){
    return '/instituicoes/' + this._id;
});

//Exportando o modelo Instituicao
module.exports = mongoose.model('Instituicao', InstituicaoSchema);
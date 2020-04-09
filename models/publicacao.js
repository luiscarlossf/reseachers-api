var mongoose = require('mongoose');

//Definindo o esquema
var Schema = mongoose.Schema;

var PublicacaoSchema = new Schema({
    titulo: {
        type: String, 
        required: true, 
        maxlength: 300
    },
    ano: {
        type: Number, 
        required: true, 
        min: 4, 
        max: 4
    },
    descricao: {
        type: String, 
        required: true
    },
    link: {
        type: String 
    },
    categoria: {
        type: String, 
        required: true, 
        enum: ['Artigo', 'Dissertação', 'Monografia', 'Tese']
    }
});

//Virtual para URL do Publicacao
PublicacaoSchema.virtual('url').get(function(){
    return '/publicacao/' + this._id;
});

//Exportando o modelo Publicacao
module.exports = mongoose.model('Publicacao', PublicacaoSchema);
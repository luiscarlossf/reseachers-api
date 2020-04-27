var mongoose = require('mongoose');

//Definindo o esquema
var Schema = mongoose.Schema;

var PublicacaoSchema = new Schema({
    titulo: {
        type: String, 
        required: [true, 'A propriedade `titulo` é obrigatória.']
    },
    ano: {
        type: Number, 
        required: [true, 'A propriedade `ano` é obrigatória.'], 
        min: [4, 'Valor muito pequeno para a propriedade `ano`.'],
        max: [4, 'Valor muito grande para a propriedade `ano`.']
    },
    descricao: {
        type: String, 
        required: [true, 'A propriedade `descricao` é obrigatória.']
    },
    categoria: {
        type: String, 
        required: [true, 'A propriedade `categoria` é obrigatória.'], 
        enum: ['Artigo', 'Dissertação', 'Monografia', 'Tese']
    },
    link: {
        type: String 
    }
});

//Virtual para URL do Publicacao
PublicacaoSchema.virtual('url').get(function(){
    return '/publicacoes/' + this._id;
});

//Exportando o modelo Publicacao
module.exports = mongoose.model('Publicacao', PublicacaoSchema);
var mongoose = require('mongoose');

//Definindo o esquema
var Schema = mongoose.Schema;

var IdiomaSchema = new Schema({
    codigo: {
        type: String,
        unique: true,
        required: [true, 'A propriedade `codigo` é obrigatória.']
    },
    nome: {
        type: String, 
        unique: true, 
        required: [true, 'A propriedade `nome` é obrigatória.']
    },
    imagePath: {
        type: String
    }
});

//Virtual para URL do Idioma
IdiomaSchema.virtual('uri').get(function(){
    return '/idiomas/' + this._id;
});

IdiomaSchema.set('toJSON', { virtuals: false });

//Exportando o modelo Idioma
module.exports = mongoose.model('Idioma', IdiomaSchema);
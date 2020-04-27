var mongoose = require('mongoose');

//Definindo o esquema
var Schema = mongoose.Schema;

var TemaSchema = new Schema({
    corDestaque: {
        type: String, 
        required: [true, 'A propriedade `corDestaque` é obrigatória.'], 
        unique: true
    },
    corUm: {
        type: String, 
        required: [true, 'A propriedade `corUm` é obrigatória.'], 
        unique: true
    },
    corDois: {
        type: String, 
        unique: [true, 'A propriedade `corDois` é obrigatória.']
    }
});

//Virtual para URL do Tema
TemaSchema.virtual('url').get(function(){
    return '/idiomas/' + this._id;
});

//Exportando o modelo Tema
module.exports = mongoose.model('Tema', TemaSchema);
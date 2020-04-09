var mongoose = require('mongoose');

//Definindo o esquema
var Schema = mongoose.Schema;

var TemaSchema = new Schema({
    corDestaque: {
        type: String, 
        required: true, 
        unique: true
    },
    corUm: {
        type: String, 
        required: true, 
        unique: true
    },
    corDois: {
        type: String, 
        unique: true
    }
});

//Virtual para URL do Tema
TemaSchema.virtual('url').get(function(){
    return '/idioma/' + this._id;
});

//Exportando o modelo Tema
module.exports = mongoose.model('Tema', TemaSchema);
var mongoose = require('mongoose');

//Definindo o esquema
var Schema = mongoose.Schema;

var IdiomaSchema = new Schema({
    nome: {
        type: String, 
        unique: true, 
        required: true
    },
    imagePath: {
        type: String
    }
});

//Virtual para URL do Idioma
IdiomaSchema.virtual('url').get(function(){
    return '/idioma/' + this._id;
});

//Exportando o modelo Idioma
module.exports = mongoose.model('Idioma', IdiomaSchema);
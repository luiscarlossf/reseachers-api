var mongoose = require('mongoose');

//Definindo o esquema
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    nome: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'A propriedade `email` é obrigatória.']
    },
    senha: {
        type: String,
        required: [true, 'A propriedade `senha` é obrigatória.']
    },
    admin: {
        type: Boolean,
        default: false
    }
});

//Virtual para URL do Usuario
UsuarioSchema.virtual('uri').get(function(){
    return '/usuarios/' + this._id;
});

UsuarioSchema.set('toJSON', { virtuals: false });

//Exportando o modelo Usuario
module.exports = mongoose.model('Usuario', UsuarioSchema);
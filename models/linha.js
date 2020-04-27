var mongoose = require('mongoose');

//Definindo o esquema
var Schema = mongoose.Schema;

var LinhaSchema = new Schema({
    labgroup: {
        type: Schema.Types.ObjectId,
        ref: 'LabGroup'
    },
    nome: {
        type: String,
        unique: true,
        required: [true, 'A propriedade `nome` é obrigatória.']
    },
    imagePath: {
        type: String
    },
    descricao: {
        type: String
    }
});

//Virtual para URL da Linha de Pesquisa
LinhaSchema.virtual('url').get(function(){
    return '/linhas/' + this._id;
});

//Exportando o modelo Linha
module.exports = mongoose.model('Linha', LinhaSchema);
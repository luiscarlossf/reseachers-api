var mongoose = require('mongoose');

//Definindo o esquema
var Schema = mongoose.Schema;

var PesquisadorSchema = new Schema({
    labgroup: {
        type: Schema.Types.ObjectId,
        ref: 'LabGroup'
    },
    primeiroNome: {
        type: String,
        require: true
    },
    meioNome: {
        type: String
    },
    ultimoNome: {
        type: String,
        require: true
    },
    imagemPath: {
        type: String
    },
    descricao: {
        type: String,
        required: true,
        enum: ['Professor Associado', 'Professor Colaborador', 'Pesquisador Ativo', 'Pesquisador Egresso', 'Pesquisador Parceiro']
    },
    email: {
        type: String
    },
    lattes: {
        type: String
    }
});

//Virtual para o nome completo do Pesquisador
Pesquisadorchema.virtual('nomeCompleto').get(function(){
    return this.primeiroNome + ' ' + this.meioNome + ' ' + this.ultimo_nome;
});

//Virtual para URL do Pesquisador
Pesquisadorchema.virtual('url').get(function(){
    return '/pesquisadores/' + this._id;
});

//Exportando o modelo Pesquisador
module.exports = mongoose.model('Pesquisador', PesquisadorSchema);
var mongoose = require('mongoose');

//Definindo o esquema
var Schema = mongoose.Schema;

var ProjetoSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    auxilios: [{
        type: Schema.Types.ObjectId,
        ref: 'Instituicao'
    }],
    dataInicio: {
        type: Date,
        require:true
    },
    dataFim: {
        type: Date,
        require:true
    },
    pesquisadores: [{
        type: Schema.Types.ObjectId,
        ref: 'Pesquisador'
    }],
    linhas: [{
        type: Schema.Types.ObjectId,
        ref: 'Linha'
    }],
    descricao: {
        type: String,
        required: true
    }
});

//Virtual para finalizado do Projeto, indica se o projeto já foi finalizado
ProjetoSchema.virtual('finalizado').get(function(){
    return Date.now > this.dataFim;
});

//Virtual para URL do Projeto
ProjetoSchema.virtual('url').get(function(){
    return '/projetos/' + this._id;
});

//Exportando o modelo Projeto
module.exports = mongoose.model('Projeto', ProjetoSchema);
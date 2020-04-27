var mongoose = require('mongoose');

//Definindo o esquema
var Schema = mongoose.Schema;

var ProjetoSchema = new Schema({
    nome: {
        type: String,
        required: [true, 'A propriedade `nome` é obrigatória.']
    },
    descricao: {
        type: String,
        required: [true, 'A propriedade `descricao` é obrigatória.']
    },
    dataInicio: {
        type: Date,
        require: [true, 'A propriedade `dataInicio` é obrigatória.']
    },
    dataFim: {
        type: Date,
        require: [true, 'A propriedade `dataFim` é obrigatória.']
    },
    pesquisadores: [{
        type: Schema.Types.ObjectId,
        ref: 'Pesquisador'
    }],
    linhas: [{
        type: Schema.Types.ObjectId,
        ref: 'Linha'
    }],
    
    auxilios: [{
        type: Schema.Types.ObjectId,
        ref: 'Instituicao'
    }],
    
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
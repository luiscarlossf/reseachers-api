var mongoose = require('mongoose');

//Definindo o esquema
var Schema = mongoose.Schema;

var LabGroupSchema = new Schema({
    link:{
        type: String,
        required: true
    },
    tipo:{
        type: String,
        required: true,
        enum: ['Laboratório de Pesquisa', 'Grupo de Pesquisa', 'Núcleo de Pesquisa']
    },
    
    responsavel: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'Pesquisador'
    },
    idioma: {
        type: Schema.Types.ObjectId,
        ref: 'Idioma'
    },
    tema:{
        type: Schema.Types.ObjectId,
        ref: 'Tema',
    },
    sobre:{
        type: Schema.Types.ObjectId,
        ref: 'Sobre',
    },
    publicacoes:[{
        type: Schema.Types.ObjectId,
        ref: 'Publicacao',
    }],
    projetos:[{
        type: Schema.Types.ObjectId,
        ref: 'Projeto',
    }]
});

//Virtual para URL do LabGroup
LabGroupSchema.virtual('url').get(function(){
    return '/labgroup/' + this._id;
});

//Exportando o modelo LabGroup
module.exports = mongoose.model('LabGroup', LabGroupSchema);
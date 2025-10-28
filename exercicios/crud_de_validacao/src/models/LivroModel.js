const mongoose = require('mongoose')
// schema
const schema = new mongoose.Schema(
// estrutura do registro 
    {
       titulo: { type: String, required: true },
       autor: { type: String, required: true },
       editora: { type: String, required: true },
       preco: { type: Number, required: true },
       ano: { type: Number, required: true },

    },
    // parametros
    {
        timestamps: true
    }
)

// modelo
const LivroJs = mongoose.model('Livro', schema)



// exportar o modelo

module.exports = LivroJs
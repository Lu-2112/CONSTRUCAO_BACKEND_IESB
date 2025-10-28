const yup = require('yup')
// schema
const schemaNovoLivro = yup.object().shape(
    {
   
titulo: yup
    .string()
    .required("Título é obrigatório"),
  autor: yup
    .string()
    .required("Autor é obrigatório"),
  ano: yup
    .number()
    .typeError("Ano deve ser um número")
    .integer("Ano deve ser um número inteiro")
    .required("Ano é obrigatório"),
  preco: yup
    .number()
    .typeError("O preço deve ser um número")
    .positive("O preço deve ser positivo")
    .required("Preço é obrigatório")
})

async function validarNovoLivro(req, res, next) {
    try {
        await schemaNovoLivro.validate(req.body, { abortEarly: false })
        next()
    } catch (error) {
        return res.status(400).json ({  erros :error.errors})
    }
}
const schemaAtualizar = yup.object().shape(
    {
   
titulo: yup
    .string(),
    
  autor: yup
    .string(),
   
  ano: yup
    .number()
    .typeError("Ano deve ser um número")
    .integer("Ano deve ser um número inteiro"),
    
  preco: yup
    .number()
    .typeError("O preço deve ser um número")
    .positive("O preço deve ser positivo")
  
})

async function validarAtualizacao(req, res, next) {
    try {
        await schemaAtualizar.validate(req.body, { abortEarly: false })
        next()
    } catch (error) {
        return res.status(400).json ({  erros :error.errors})
    }
}

module.exports = {
    validarNovoLivro,
    validarAtualizacao
}
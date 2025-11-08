const yup = require('yup')
const ProjetoModel = require('../models/ProjetoModel')
const funcionarioModel = require('../models/funcionarioModel')

const schema = yup.object().shape(
    {
        titulo: yup.string().required("o titulo é obrigatorio"),
        descricao: yup.string().required("a descrição é obrigatorio"),
        dataInicio: yup.date().required("data de inicio é obrigatorio"),
        dataFim: yup.date().required("data do fim  é obrigatorio"),
        responsavel: yup.string().required("O responsavel é obrigatorio")
        .test(
            'id-validator', 
            'ID do funcionario é invalido', 
            value => mongoose.Types.ObjectID.isValid(value)
        ),
        projeto: yup.string().required("O projeto é obrigatorio")
        .test(
           'id-validator', 
            'ID do projeto é invalido', 
            value => mongoose.Types.ObjectID.isValid(value)
        ),
    }
)

async function validarTarefa(req, res, next){
    try {
        await schema.validate(req.body, { abortEarly: false })
        next()
    }catch (error){
        return res.status(400).json({ error: error.errors })
    }
}


module.exports = { validarTarefa}
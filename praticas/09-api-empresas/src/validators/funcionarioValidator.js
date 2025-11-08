const yup = require('yup')
const CargoModel = require('../models/CargoModel')

const schema = yup.object().shape(
    {
        nome: yup.string().required("o nome é obrigatorio"),
        cpf: yup.string().required("cpf é obrigatorio"),
        email: yup.string().email("email invalido").required("email é obrigatorio"),
        telefone: yup.string().required("telefone é obrigatorio"),
        dataNascimento: yup.date().required("data de nascimento é obrigatorio"),
        dataContratacao: yup.date().required("dataContratacao é obrigatorio"),
        genero: yup.string().required("genero é obrigatorio"),

        cargo: yup.string().required("O cargo é obrigatorio")
        .test(
            'id-validator', 
            'ID do cargo é invalido', 
            value => mongoose.Types.ObjectID.isValid(value)
        ),
        departamento: yup.string().required("O departamento é obrigatorio")
        .test(
           'id-validator', 
            'ID do departamento é invalido', 
            value => mongoose.Types.ObjectID.isValid(value)
        ),
    }
)

async function validarFuncionario(req, res, next){
    try {
        await schema.validate(req.body, { abortEarly: false })
        next()
    }catch (error){
        return res.status(400).json({ error: error.errors })
    }
}

module.exports = { validarFuncionario}
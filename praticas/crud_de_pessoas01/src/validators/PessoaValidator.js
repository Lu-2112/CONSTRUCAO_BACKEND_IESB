const yup = require('yup')
// schema
const schemaNovaPessoa = yup.object().shape(
    {
        nome: yup.string() 
        .min(5, 'Nome inválido')
        .max(50, 'Nome inválido')
        .required("Campo nome é obrigatório"),
        cpf: yup.string()
        .length(11, 'CPF inválido')
        .matches(/[0-9]/, 'CPF inválido')
        .required('cpf é obrigatório'),
        email: yup.string().email('Email inválido').required("email é obrigatório"),
        dataNascimento: yup.date().required('dataNascimento é obrigatório'),
        telefone: yup.string().required('telefone é obrigatório'),
        genero: yup.string().required('Obrigatório')


    }
)
async function validarNovaPessoa(req, res, next) {
    try {
        await schemaNovaPessoa.validate(req.body, { abortEarly: false })
        next()
    } catch (error) {
        return res.status(400).json ({  erros :error.errors})
    }
}

module.exports = {
    validarNovaPessoa
}
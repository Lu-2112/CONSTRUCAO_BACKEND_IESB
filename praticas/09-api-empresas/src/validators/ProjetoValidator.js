const yup = require('yup')

const schema = yup.object().shape(
    {
        nome: yup.string().required("nome é obrigatório"),
        descricao: yup.string()
        .min(3,   "a descricao precisa de pelo menos 3 caracteres")
        .max(50,  "a descricao precisa de no maximo 50 caractered")
        .required("descricao é obrigatorio"),
        dataInicio: yup.date()
        .required("a data de incio do projeto é obrigatório")
    }
)

async function validarProjeto(req, res, next){
    try{
        await schema.validate(req.body, { abortEarly: false})
        next()
    } catch (erro) {
      return res.status(400).json({ erros: error.errors})
    }
}

module.exports = { validarProjeto};
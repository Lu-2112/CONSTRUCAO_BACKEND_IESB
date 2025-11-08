const yup = require('yup')

const schema = yup.object().shape(
    {
        nome: yup.string()
          .min(3,   "o nome precisa de pelo menos 3 caracteres")
          .max(50,  "o nome precisa de no maximo 50 caractered")
          .required("nome é obrigatorio"),
        descricao: yup.string()
          .min(3,   "a descricao precisa de pelo menos 3 caracteres")
          .max(50,  "a descricao precisa de no maximo 50 caractered")
          .required("descricao é obrigatorio"),
    }
)

async function validarDepartamento(req, res, next){
    try {
        await schema.validate(req.body, { abortEarly: false})
        next()
    } catch (error) {
        return res.status(400).json({ error: erros.errors })
    }
}

module.exports = { validarDepartamento}
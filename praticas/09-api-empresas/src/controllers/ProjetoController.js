express = require('express')

const router = express.Router()

const ProjetoModel = require('../models/ProjetoModel')
const { validarProjeto } = require('../validators/ProjetoValidator')

router.get('/projeto', async(req, res, next)=> {
    const projeto = await ProjetoModel.find()
    res.json(projeto)
})

router.get('/projeto/:id', async(req, res, next)=> {
    const projetoEncontrado = await ProjetoModel.findById(req.params.id)
    if(!projetoEncontrado){
        return res.status(404).json({ erro: "Não encontrado"})
    }
    res.json(projetoEncontrado)
})

router.post('/projeto', validarProjeto, async(req, res, next)=> {
    const projetoCadastrado = await ProjetoModel.create(req.body)
    res.status(201).json(projetoCadastrado)
})

router.put('/projeto/:id', async(req, res, next)=> {
    const id = req.params.id
    const dados = req.body
    const projetoAtualizado = await ProjetoModel.findByIdAndUpdate(id, dados, { new:true})
    if(!projetoAtualizado){
        return res.status(404).json({ erro: "Não encontrado"})
    }
    res.json(projetoAtualizado)
})
router.delete('/projeto/:id', async(req, res, next)=> {
    await ProjetoModel.findByIdAndDelete(req.params.id)
    res.status(204).send()
})



module.exports = router
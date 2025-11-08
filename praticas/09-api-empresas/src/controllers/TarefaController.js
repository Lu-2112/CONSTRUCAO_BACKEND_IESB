express = require('express')

const router = express.Router()

const TarefaModel = require('../models/TarefaModel')
const { validarTarefa } = require('../validators/TarefaValidator')

router.get('/tarefa', async(req, res, next)=> {
    const tarefa = await TarefaModel.find().populate(['Projeto', 'Responsavel'])
    res.json(tarefa)
})

router.get('/tarefa/:id', async(req, res, next)=> {
    const tarefaEncontrado = await TarefaModel.findById(req.params.id).populate(['Projeto', 'Responsavel'])
    if(!tarefaEncontrado){
        return res.status(404).json({ erro: "Não encontrado"})
    }
    res.json(tarefaEncontrado)
})

router.post('/tarefa', validarTarefa, async(req, res, next)=> {
    const tarefaCadastrado = await TarefaModel.create(req.body)
    res.status(201).json(tarefaCadastrado)
})

router.put('/tarefa/:id', async(req, res, next)=> {
    const id = req.params.id
    const dados = req.body
    const tarefaAtualizado = await TarefaModel.findByIdAndUpdate(id, dados, { new:true})
    if(!tarefaAtualizado){
        return res.status(404).json({ erro: "Não encontrado"})
    }
    res.json(tarefaAtualizado)
})
router.delete('tarefa/:id', async(req, res, next)=> {
    await TarefaModel.findByIdAndDelete(req.params.id)
    res.status(204).send()
})



module.exports = router
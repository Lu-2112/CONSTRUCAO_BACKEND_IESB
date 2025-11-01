const express = require('express')
const router = express.Router()

const CargoModel = require('../models/CargoModel')
const { validarCargo } = require('../validators/CargoValidator')

//rotas
router.get('/cargos', async (req, res, next)=> {
  const cargos = await CargoModel.find()
  res.json(cargos)
})

router.get('/cargos/:id', async (req, res, next)=> {
    const cargoEncontrado = await CargoModel.findById(req.params.id)
    if(!cargoEncontrado){
        return res.status(400).json({ erro: "Não encontrado"})
    }
})

router.post('/cargos', validarCargo, async (req, res, next)=> {
    const cargoCriado = await CargoModel.create(req.body)
    res.status(201).json(cargoCriado)
})

router.put('/cargos/:id', validarCargo, async (req, res, next)=> {
    const id = req.params.id
    const cargoAtualizado = await CargoModel.findByIdAndUpdate(id, req.body, { new: true })
    if(!cargoAtualizado){
        return res.status(404).json({ erro: "Não encontrado" })
    }
    res.json(cargoAtualizado)
})

router.delete('/cargos/:id', async (req, res, next)=> {
    await CargoModel.findByIdAndDelete(req.params.id)
    res.status(204).send()
})

module.exports = router
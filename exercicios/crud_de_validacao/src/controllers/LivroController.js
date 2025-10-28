const express = require('express')
const router = express.Router()

// importo o modelo
const LivroJs = require('../models/LivroModel')
// importo os validadores 
const { validarNovoLivro, validarAtualizacao } = require('../validators/LivroValidator')
const { validarID } = require('../validators/IDValidator')

// rotas

// cadastro
router.post('/livro', validarNovoLivro, async (req, res, next) => {
  const dados = req.body
  const livroCadastrado =  await LivroJs.create(dados)
  res.status(201).json(livroCadastrado)
}) 

// leitura
router.get('/livro', async (req, res, next) => {
  const livro = await LivroJs.find()
  res.json(livro)
})

router.get('/livro/:id', validarID,  async (req, res, next) => {
    const livroEncontrado = await LivroJs.findById(req.params.id)
    if (!livroEncontrado) {
        return res.status(404).json({ erro: "Livro não encontrado!"})
    }
    res.json(livroEncontrado)
})

// atualização
router.put('/livro/:id',  validarID, validarAtualizacao, async (req, res, next) => {
    const id = req.params.id
    const novosDados = req.body
    const livroAtualizado = await LivroJs.findByIdAndUpdate(id, novosDados, { new: true})
    if(!livroAtualizado) {
        return res.status(404).json({ erro: "Livro não encontrado!"})
    }
    res.json(livroAtualizado)
})

// exclusão
router.delete('/livro/:id', validarID,  async (req, res, next) => {
    const id = req.params.id
    await LivroJs.findByIdAndDelete(id)
    res.status(204).send()
})


module.exports = router
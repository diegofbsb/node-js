const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', function (req, res) {
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', function (req, res) {
        const id = parseInt(req.params.id)
        Atendimento.buscaPorId(id, res)
    })

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
        console.log(req.body)
        Atendimento.altera(id, valores, res)
    })

    app.post('/atendimentos', function (req, res) {
        const atendimento = req.body
        Atendimento.adiciona(atendimento, res)
    })

    app.delete('/atendimentos/:id', function (req, res) {
        const id = parseInt(req.params.id)
        Atendimento.deletaPorId(id, res)
    })
}
const FilmeModel = require("../models/FilmeModel")

const FilmeController = {
    async gelAllFimes(req, res) {
        const filmes = await FilmeModel.getAllfilmes()

        return res.json(filmes)
    },
    
    async createFilme (req, res) {
        const {
            titulo,
            diretorId,
            gereros
        } = req.body

        const filme = {
            titulo,
            diretorId
        }

        const filmeId = await FilmeModel.create (filme, gerenos)
        
        return res.status(201).json({ id: filmeId})
    }
}

module.exports = FilmeController
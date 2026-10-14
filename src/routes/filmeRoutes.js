const express = require ("express")
const router = express.Router()

const filmeController = require("../controllers/filmeController")
const FilmeController = require("../controllers/filmeController")

router.get("/", filmeController.gelAllFimes)
router.post("/", FilmeController.createFilme)

module.exports = router
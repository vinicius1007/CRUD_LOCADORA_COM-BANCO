const app = require ("./app")

const PORTA = 300

app.listen(300, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`)
})
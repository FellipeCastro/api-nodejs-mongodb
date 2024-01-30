const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
const PORT = 3000

const Film = mongoose.model('Film', {
    title: String,
    description: String,
    img: String,
    trailer: String

})

app.get('/', async (req, res) => {
    const films = await Film.find()
    res.send(films)
})

app.post('/', async (req, res) => {
    const film = new Film({
        title: req.body.title,
        description: req.body.description,
        img: req.body.img,
        trailer: req.body.trailer,
    })

    await film.save()
    res.send(film)
})

app.listen(PORT, () => {
    mongoose.connect('mongodb+srv://fehcastru:yB6qa7rcs0C0RzCh@starwars-api.rjbrt7c.mongodb.net/?retryWrites=true&w=majority')
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
})

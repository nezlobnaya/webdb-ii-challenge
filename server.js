const express = require('express')
const helmet = require('helmet')

const carsRouter = require('./routers/carsRouter')
const server = express()

server.use(helmet())
server.use(express.json())
server.use('/api/cars', carsRouter)

server.get('/', (req, res) => {
    const messageOfTheDay = process.env.MOTD 
    res.send(`<h2>${messageOfTheDay}</h2>`)
})


server.use((err, req, res, next) => {
    res.status(500).json({
        message: "Bad mistake!", err
    })
})

module.exports = server;
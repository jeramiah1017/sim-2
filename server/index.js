require('dotenv').config()
const express = require('express')
const massive  = require('massive')
const {CONNECTION_STRING, SERVER_PORT} = process.env
const ctrl = require('./controller')
const  app = express()

app.use(express.json())
massive(CONNECTION_STRING).then(g => {
    app.set('db', g)
    console.log("Data")
})

app.post('/api/Houses', ctrl.createHouse)

app.listen(SERVER_PORT, () => console.log(`AI model ${SERVER_PORT}` ))
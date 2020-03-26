// Modules
const donnee = require('./db')
const bodyParser = require('body-parser')
const express = require('express')

// Variable glabales
const app = express()
const port = 3030
const router = require('./router')

// Middelwares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false }))
app.set('views', './views')
app.set('engine','./engine')
app.set('view engine', 'hbs')

// USE ROUTER
app.use(router)

// Lancement de l'application
app.listen(port, () => console.log('le port est ' + port))

console.log("http://localhost:3030/")
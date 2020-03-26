const db = require('sqlite')
const donnee = require('express').Router()

db.open('api.db').then(() => {
    Promise.all([
        db.run("CREATE TABLE IF NOT EXISTS Formations (id INTEGER PRIMARY KEY AUTOINCREMENT, annee Date, formation varchar(255), ville varchar(255))"),
    ]).then(() => {
      console.log('Databases are ready')
    }).catch((err) => {
      console.log('Une erreur est survenue :', err)
    })
})

module.exports = donnee
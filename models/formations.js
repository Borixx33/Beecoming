const db = require('sqlite')

module.exports = {
  getAllFormation() {
    return db.all("SELECT rowid AS id, * FROM Formations")
  },
  async insertFormation(body) { 
    const { lastID } = await db.run("INSERT INTO Formations (annee, formation, ville) VALUES(?, ?, ?)", [body.annee, body.formation, body.ville])

    return this.findOneFormation(lastID)   
},
}
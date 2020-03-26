const db = require('sqlite')

module.exports = {
  getAllFormation() {
    return db.all("SELECT rowid AS id, * FROM Formations")
  },
  findOneFormation(id) {
    return db.get("SELECT rowid AS id, * FROM Formations WHERE rowid = ?", id)
  },
  async insertFormation(body) { 
    const { lastID } = await db.run("INSERT INTO Formations (annee, formation, ville) VALUES(?, ?, ?)", [body.annee, body.formation, body.ville])

    return this.findOneFormation(lastID)   
  },
  deleteFormation(id) {
    return db.run("DELETE FROM Formations WHERE rowid = ?", id)
  },
}
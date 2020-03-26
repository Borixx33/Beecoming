const db = require('sqlite')

module.exports = {
  getAllFormation() {
    return db.all("SELECT rowid AS id, * FROM Formations")
  }
}
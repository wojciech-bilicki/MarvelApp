const fs = require("fs")

const dbFile = "./db/data.json"

const db = JSON.parse(fs.readFileSync(dbFile, "utf8"))
const updateDb = db => fs.writeFile(dbFile, JSON.stringify(db, null, 2), err => {
  if (err) throw err;
})

module.exports.getTable = name => db[name]
module.exports.getRecordBy = (table, selector) => db[table].find(selector)

module.exports.addRecord = (table, record) => {
  db[table].push(record)
  updateDb(db)
}

module.exports.removeRecordBy = (table, selector) => {
  const elem = db[table].find(selector)

  db[table].splice(db[table].indexOf(elem), 1)
  updateDb(db)
}

const Sequelize = require('sequelize')
const pkg = require('../package.json')
console.log('opening database')
let databaseName = pkg.name
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`, {
    logging: false,
    timestamps: true
  }

)


const Visitor = db.define('Visitor', {
   name: Sequelize.STRING,
   number: Sequelize.DECIMAL
})



module.exports = db

// This is a global Mocha hook used for resource cleanup.
// Otherwise, Mocha v4+ does not exit after tests.
if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close())
}
//DELETE THIS LAST ONE IF THINGS BREAK
new webpack.DefinePlugin({
  "process.env.NODE_ENV": JSON.stringify("production")
})

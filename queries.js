const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

module.exports = {
  getAll(){
    return database('caphill_coffee_shops')
  }
}
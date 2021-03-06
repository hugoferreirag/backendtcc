const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment]
const knex = require('knex')(config)

knex.migrate.latest([config])

module.exports = knex
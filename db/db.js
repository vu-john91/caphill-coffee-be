const knex = require("knex");
const knexFile = require("../knexfile.js");

const enviroment = process.env.NODE_ENV || "developement";

module.exports = knex(knexFile[enviroment]);
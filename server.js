const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('knex')
const config = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = knex(config)

app.set('port', 3001)

//middleware
app.use(cors())

//app.use(express.json());
app.get('/api/v1/pathData', async(request, response) => {
  const pathData = await database.select().from('coffee_shop_data')
  response.status(200).json(pathData)
})

//routes
app.listen(3001, () => {
  console.log('server has started on port 3001')
})
const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('./knex')

app. set('port', 5432)

//middleware
app.use(cors())

//app.use(express.json());
app.get('/api/v1/pathData', async(request, reponse) => {
  const pathData = await knex.select().from('pathData')
  response.status(200).json(pathData)
})

//routes
app.listen(5432, () => {
  console.log('server has started on port 5432')
})
const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('knex')
const config = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = knex(config)
const queries = require('./queries')

app.set('port', 3001)

//middleware
app.use(cors())

app.use(express.json());

//rename pathData to something more specific
//don't need async
//fix this

app.get('/', (request, response) => {
  queries.getAll().then(results => response.send(results))
})


// app.get('/api/v1/pathData', (request, response) => {
//   const pathData = database.select().from('coffee_shop_data')
//   .then(pathData => {
//     response.status(200).json(pathData)
//   })
//   .catch(error => {
//     response.status(500).json({message: error.message })
//   })
// })


//will need another GET, to get a specific object based on it's ID. 

//do an app.post here --> tell it which route to hit
//api/v1/pathdata/coffeeshops:id

app.post('/api/v1/pathData/:id', (request, response) => {
  const params = request.body;
  knex('coffee_shop_data')
    .where({ id: params.id })
    .update(
      {rating: params.rating
      }, ['id', 'rating'],
    )
})
//figure out how to send the correct response
//google how to make it more dynamic to update whatever keys we are given in the object. 


//routes
app.listen(3001, () => {
  console.log('server has started on port 3001')
})

// knex('books')
//   .where({ id: 42 })
//   .update({ 
//     title: "The Hitchhiker's Guide to the Galaxy" 
//   }, ['id', 'title'])
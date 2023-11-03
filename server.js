const dotenv = require('dotenv');
dotenv.config();

const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('knex')
const config = require('./knexfile')['development']
const database = knex(config['development']);

const queries = require('./queries')

app.set('port', 3001)

//middleware
app.use(cors())

app.use(express.json());

//rename pathData to something more specific
//don't need async
//fix this

// Uncomment and update this GET route
app.get('/api/v1/', (request, response) => {
  database.select().from('caphill_coffee_shops')
    .then(data => {
      response.status(200).json(data);
    })
    .catch(error => {
      response.status(500).json({ error: error.message });
    });
});



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

app.post('api/v1/SelectedShop/:id', (request, response) => {
  const { id } = request.params; // assuming you pass the id in the URL
  const updates = request.body;

  database('caphill_coffee_shops')
    .where({ id: id })
    .update(updates)
    .returning(['id', 'rating']) // whatever fields you want to return
    .then((updatedRecords) => {
      response.json(updatedRecords);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

//figure out how to send the correct response
//google how to make it more dynamic to update whatever keys we are given in the object. 


//routes
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// knex('books')
//   .where({ id: 42 })
//   .update({ 
//     title: "The Hitchhiker's Guide to the Galaxy" 
//   }, ['id', 'title'])
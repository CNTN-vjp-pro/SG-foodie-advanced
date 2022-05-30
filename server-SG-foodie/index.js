const express = require('express')
const app = express()
const port = 3000

// connect db
const db = require('./config/db')
db.connect()

const cors = require('cors')
app.use(cors())

// Parsing data received from client
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// use Routes
const foodieRoutes = require('./routes/foodie.router')
app.use('/', foodieRoutes)

// const Restaurant = require('./models/Restaurant')

// app.get('/restaurants', cors(), (req, res) => {
//     // res.send('first test get method api')
//     // Restaurant.find({}, function(err, restaurants) {
//     //     if (err) {
//     //         res.status(500).json({ error: "ERRORS!" })
//     //     } else {
//     //         res.json(restaurants)
//     //     }
//     // })

//     Restaurant.find({})
//         .then(restaurants => res.json(restaurants))
//         .catch(err => res.status(500).json({ error: err.message }))
// })



app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
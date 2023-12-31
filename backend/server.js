require("dotenv").config()

const express = require('express')
const menuRoutes = require('./routes/menu')
const mongoose = require('mongoose')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(cors())
app.use(express.json()) // parse incomming data
// routes for requests will always now have '/menu'
// eg http://localhost:4000/menu/items
app.use('/menu', menuRoutes)

// Backend proxy that calls the Nutrition API on behalf of the front-end application
const API_KEY = process.env.API_KEY
app.get('/nutrition/:query', async (req, res) => {

    const query = req.params.query
    const API_URL = "https://api.api-ninjas.com/v1/nutrition?query=" + query
  
    axios.get(API_URL, {
        headers: {
            "X-Api-Key": API_KEY
        }
    })
        .then(response => {res.json(response.data)})
        .catch(error => {
            console.log(error)
        })

  });

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        app.listen(process.env.PORT, () =>
            console.log(`listening on port ${process.env.PORT}, connected to DB`))
    })
    .catch((error) => {
        console.log('error', error)
    })
// LISTEN ON PORT... see env
// frontend is running on port 3000

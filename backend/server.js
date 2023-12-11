require("dotenv").config()

const express = require('express')
const menuRoutes = require('./routes/menu')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json()) // parse incomming data
// routes for requests will always now have '/menu'
// eg http://localhost:4000/menu/menuitems
app.use('/menu', menuRoutes)


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

const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const app = express()
const port = 8080
const cors = require('cors')
app.use(cors())

const postRoutes = require('./routes/Routes')

app.use(bodyparser.json());
app.use('/anime', postRoutes)

mongoose.connect("mongodb://localhost:27017/node_session").then(() => {
    console.log("Database is connected and live...")
});

app.listen(port, () => {
    console.log("Server is up and running")
})
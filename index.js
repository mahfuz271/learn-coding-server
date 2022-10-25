const express = require('express')
var cors = require('cors')
const app = express()
const port = 4000
app.use(cors())

const courses = require("./courses.json")

app.get('/courses', (req, res) => {
    res.json(courses)
})


app.listen(port, () => {
    console.log(`LearnCoding server app listening on port ${port}`)
})
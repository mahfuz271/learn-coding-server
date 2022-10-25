const express = require('express')
var cors = require('cors')
const app = express()
const port = 4000
app.use(cors())

const courses = require("./courses.json")

app.get('/courses', (req, res) => {
    res.json(courses)
})

app.get('/course/:id', function (req, res, next) {
    res.json(courses.find((el) => {el.id===req.params.id}))
})

app.listen(port, () => {
    console.log(`LearnCoding server app listening on port ${port}`)
})
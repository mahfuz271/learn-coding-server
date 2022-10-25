const express = require('express')
var cors = require('cors')
const app = express()
const port = 4000
app.use(cors())

const courses = require("./courses.json")

app.get('/', (req, res) => {
    res.send('Server created for assignment 10 by Mahfuz.')
})

app.get('/courses', (req, res) => {
    res.json(courses)
})

app.get('/course/:id', function ({ params }, res, next) {
    const data = courses.find(({ id }) => id == params.id);
    res.json(data)
})

app.use('/images', express.static('images'))

app.listen(port, () => {
    console.log(`LearnCoding server app listening on port ${port}`)
})
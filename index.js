const express = require('express')
var cors = require('cors')
const app = express()
const port = 4000
app.use(cors())

app.get('/courses', (req, res) => {
    res.send('Hello World!')
})

app.get('/course/:id', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})

app.listen(port, () => {
    console.log(`LearnCoding server app listening on port ${port}`)
})
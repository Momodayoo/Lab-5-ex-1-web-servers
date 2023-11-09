const express = require('express')
const app = express()
const port = 3000
const app1 = express()
const port1 = 3001

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.send('This is a test')
    })

app1.get('/', (req, res) => {
    res.send('yarr!')
})


app.listen(port, () => {
    console.log(`Example app listening
at http://localhost:${port}`)
})

app1.listen(port1, () => {
    console.log(`Example app listening
at http://localhost:${port}`)
})
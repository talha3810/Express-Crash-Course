const express = require('express')
const path = require('path')
const app = express()
const port = 3000


// Create your own middleware 
const talhaMiddleware = (req, res, next) => {
    console.log(req)
    next()
}

// middle ware i think
app.use(express.static(path.join(__dirname, "public")))
// app.use(talhaMiddleware)

app.get('/hello/name:', (req, res) => {
    res.send('Hello World!' + req.params.name)
})

app.get('/about', (req, res) => {
    // res.send('about!')
    // res.sendFile(path.join(__dirname, 'index.html'))
    // res.status(500)
    res.json({ "talha": 34 })
})


app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`)
})










const { response } = require('express')
const express = require('express')
const app = express()

app.get('/' , (req , res) => {
    res.send("I am home Page")
})

app.get('/about' , (req , res) => {
    res.send("I am about us Page")
})

app.listen(process.env.PORT || 3000);
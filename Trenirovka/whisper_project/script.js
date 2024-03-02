// const imgBox = document.querySelector('.img-box')
import express from 'express'
const app = express()

app.get('/contact', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)
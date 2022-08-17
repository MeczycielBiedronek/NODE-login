const express = require('express')
const app = express()
const ejs = require('ejs')

const PORT = 5000;

app.set('view-engine', 'ejs')

app.get('/', (req, res)=> {
    res.render('index.ejs', {name: 'Filip', })
})

app.listen(PORT, console.log(`Server running on port ${PORT}`))
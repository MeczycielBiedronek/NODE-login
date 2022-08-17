const express = require('express')
const app = express()
const ejs = require('ejs')
const bcrypt = require('bcrypt')


const users = []

const PORT = 5000;

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

// Routes

app.get('/', (req, res)=> {
    res.render('index.ejs', {name: 'Filip', })
})

app.get('/login', (req, res)=> {
    res.render('login.ejs')
})

app.post('/login', (req, res)=> {
    res.render('register.ejs')
})

app.get('/register', (req, res)=> {
    res.render('register.ejs')
})

app.post('/register', async (req, res)=> {
    try {
        const hashedpassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedpassword
        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
    console.log(users)
})

app.listen(PORT, console.log(`Server running on port ${PORT}`))
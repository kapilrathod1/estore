const express = require('express')
require('dotenv').config()
const app = express()
const colors = require('colors')
const { connectDB } = require('./config/db')


const PORT = process.env.PORT || 5000
connectDB()

// Body Parse 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to E-store' });
})


app.use('/estore', require('./routes/router'))

app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`);
})
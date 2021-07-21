const express = require('express');
const app = express();
const authRoutes = require('./routes/auth')
const analiticsRoutes = require('./routes/analitics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
const bodyParser = require('body-parser')
const cors = require('cors'); // мог обрабатывать корс 
const morgan = require('morgan') // красиво логировать процесыы
const mongoose = require('mongoose');
const config = require('./config/keys')

/*Подключение БД Монго */
mongoose.connect(config.db)
mongoose.connection.on('connected', () => {
    console.log('conected BD')
})
mongoose.connection.on('error', (err) => {
    console.log('error not connected', err)
})



app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/analitics', analiticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)


module.exports = app;
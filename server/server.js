const express = require('express')
const cors = require('cors')
const Sequelize = require('sequelize')
const houseRouter = require('./routes/HouseRoutes')

const app = express()
const port = 3002

const db = require('./models')

const sequelize = new Sequelize(
    'sql7624764',
    'sql7624764',
    '3jZf37u6wy',
    {
        host:'sql7.freemysqlhosting.net',
        dialect: 'mysql'
    }
)
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.')
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error)
 })

 db.sequelize.sync().then(() => {
    console.log('`Houses` table created successfully!')
 }).catch((error) => {
    console.error('Unable to create table : ', error)
 })

app.use(cors())
app.use(express.json())
app.use('/api/houses',houseRouter)
app.listen(port, () => {
    console.log("Server is running on Port:" + port)
})

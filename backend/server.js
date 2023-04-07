require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./routes/user.js')
const { connectDB } = require('./db/connect.js')
app.use(express.json())
app.use(cors())
app.use(router)

connectDB()

app.listen(process.env.PORT, () => console.log('Server is running on port 5000'))
const mongoose = require('mongoose')
require('dotenv').config()

exports.connectDB = async () => {
  mongoose  
    .connect(
      process.env.DB_URL,
      {
        useNewUrlParser: true
      }
    )
    .then(() => {
      console.log('Successfully connected to Mongodb')
    })
}
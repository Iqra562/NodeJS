// iqra44938
// 0h70s8xmdVd6G2J4

const express = require('express')
const connectDB  = require('./db/db_connection')
const app = express()

connectDB();

const user = require('./models/userModel')

const addUser = async()=>{
    await user.create({
        name:"JAWD",
        email:"JWD@gmail.com"
    })
}

addUser()
app.listen(2000,()=>{
    console.log("server is running on Port no 2000")
})
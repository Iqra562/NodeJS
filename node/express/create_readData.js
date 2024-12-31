const express = require('express')
const connectDB = require('./db/db_connection')
const Employee = require('./models/employeeModel')
const app = express()

connectDB()

const addEmployee = async()=>{
    await Employee.create({
        name:"JWD",
        email:"jwd@gmail.com",
        position:"SOftware Engineer", 
        department :"IT"
    })
}

addEmployee();

const getEmployee =  async()=>{
    const employee = await Employee.find();
    console.log(employee)
}
getEmployee()

app.listen(2000)
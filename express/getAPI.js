const express = require('express')
const connectDB = require('./db/db_connection')
const Employee = require('./models/employeeModel')
const app =express()
connectDB()
app.get('/employees',async  (req,res)=>{
try{
 const employees = await Employee.find();
 res.json(employees)
}catch(err){
console.log(err)
res.status(500).send("SErver Error")
}
})

app.listen(2000)
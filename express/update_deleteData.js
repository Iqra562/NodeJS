const express = require('express')
const connectDB = require('./db/db_connection')
const Employee  = require('./models/employeeModel')

const app = express()
connectDB();

const getEmployees = async ()=>{
    const employees = await  Employee.find();
    console.log("Employees Data " + employees)
}
const updateEmployee = async (id,updateData)=>{
    const result = await Employee.updateOne({_id:id},{$set:updateData})
    console.log(
        result.nModified === 0 ? `No updates for employee : ${id}`: `Update employee data `,result
    )
}

const deleteEmployee  =async (id)=>{
await Employee.findByIdAndDelete(id);
console.log(`Employee ${id} deleted`)
}

const main = async()=>{
    await getEmployees();
    const employeeID = '674ae0b5cc5568fff6aba95f';
    const updatedData={
        position : "unpaid intern",
        department:"IT"
    }

    await updateEmployee(employeeID,updatedData)
    await getEmployees();
    await deleteEmployee(employeeID);
    await getEmployees();
}

main();
app.listen();
const express = require('express')
const users = require('./MOCK_DATA.json')
const fs = require('fs')
const app = express()

const PORT = 8000

app.get('/users',(req,res)=>{
    res.json(users)
})

app.use(express.urlencoded({extended:false}))

// app.get('/users',(req,res)=>{
//       const html=`
//       <ul>${users.map((user)=> `<li>${user.first_name}</li>`).join("")}
//       </ul>
//       `
//       res.send(html)
//     })

// app.get("/api/users/:id",(req,res)=>{
//     const id =Number(req.params.id);
//     const user  = users.find((user)=> user.id=== id)
//     return res.json(user)
// })

app.post("/users",(req,res)=>{

    const body = req.body
    // console.log(body)
    users.push({id:users.length +1 ,...body});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
    
        return res.json({status:"success",id: users.length})
    })
})

app.listen(8000,()=>console.log('Server started at port 800'))
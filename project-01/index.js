const express = require('express');
const users= require('./MOCK_DATA.json')
const app = express();
const PORT = 800 

// routes 
app.get('/api/users',(req,res)=>{  //it will throw data in json format 
   return res.json(users)     
})

app.get('/users',(req,res)=>{
  const html  = `
  <ul>
  ${
    users.map((singleUser)=>  `<li>${singleUser.first_name}</li>` ).join("")
  }

  </ul>`
  res.send(html)
})


app.listen(PORT, ()=>console.log('server started at port 800')) 
const express =  require('express');
const User = require('../models/userModel');
const router = express.Router();
const {handleGetAllUsers,handleGetUserById} = require('../controller/user')

router.get('/',handleGetAllUsers)

router
.route('/:id')
.get(handleGetUserById)
router.get("/users",async(req,res) =>{
    const allDbUsers = await User.find({});
    const html =`
            <ul>${allDbUsers.map((user)=>`<li>${user.firstName}-${user.email}</li>`).join('')}</ul>   
    
    `
    res.send(html)
})

router.get("/api/users",async(req,res) =>{
    const allDbUsers = await User.find({});
    
    res.send(allDbUsers)
})


app.post('/api/users',async(req,res)=>{
    const body = req.body 
  const result =   await User.create({
      firstName:body.firstName,
      lastName:body.lastName,

    })
    console.log(result)
  })

  module.exports  = router
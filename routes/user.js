const   express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/users',async(req,res)=>{
    const  allDbUsers= await User.find({});
    const html = `
    <ul>
    ${
        allDbUsers.map((user)=>`<li>${user.firstName} - ${user.email}</li>`).join("")    }

    </ul>`
   res.send(html);

})


router.get("/api/users",async(req,res)=>{
    const allDbUsers = await User.find
})
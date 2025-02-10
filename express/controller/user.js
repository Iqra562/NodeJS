const User = require('../models/userModel')
async function handleGetAllUsers(req,res){
     const allDbUsers = await User.find({})
     return res.json(allDbUsers)

}

async function handleGetUserById(req,res){
     const user = await User.findById(req.params.id);
     if(!user) return res.status(404).json({error :"user not found"})
        return res.json(user)
}

async function handleUpdateUserById(req,res ){

}
module.exports = {
    handleGetAllUsers,
    handleGetUserById
}
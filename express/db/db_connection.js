const mongoose = require('module')

const connectDB  =async()=>{
    try{
        await mongoose.connect('mongodb+srv://iqra44938:0h70s8xmdVd6G2J4@cluster0.yarkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("mpngodb connected")
    }
}
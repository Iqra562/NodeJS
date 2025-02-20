const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://iqra44938:vWAOuchONXPhdaHT@cluster0.mxfbz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('mongo db connected')
    }
    catch(err){
  console.log('eorr',err)
    }
}
module.exports = connectDB
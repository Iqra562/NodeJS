const mongoose = require('mongoose');
async function connectMongoDb(url){
    return mongoose.connect(url)
    //   .then(() => console.log('Connectejhjkwehd!'))
    //   .catch((err)=>console.log('error',err))
}

module.exports ={
    connectMongoDb
}
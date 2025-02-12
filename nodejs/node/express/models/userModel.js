const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true, // Removes extra spaces
    },
    email: {
        type: String,
      
    },
})

module.exports = mongoose.model('User', userSchema);

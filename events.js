const fs = require('fs')
const myRead = fs.createReadStream('./show.txt')
myRead.on('open',()=>{
    console.log("input.txt is opened")
})
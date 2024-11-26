const express  =require('express')
const app = express();
const path = require('path');
const public = path.join(__dirname,'public')
// console.log(public)
app.use(express.static(public))
app.listen(2000)
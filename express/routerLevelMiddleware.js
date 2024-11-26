const express = require('express');
const app = express();
const reqFilter= require('./middleware');
const route = express.Router();
route.use(reqFilter)
app.get('/',(req,res)=>{
     res.send("This is Router level middleware Home Page")       
}) 

route.get('/about',reqFilter,(req,res)=>{
    res.send("This is about page")
})

route.get('/contact',(req,res)=>{
res.send("this is contact page")
})
app.use('/',route)
app.listen(2000)
const express  = require('express')

const app= express();

const reqFilter = (req,res,next)=>{
    const salary = req.query.salary;
    if(!salary){
 res.send("NO salary provided")
    }else if(salary < 5000){
        res.send("Your salary is below 5000")
    }
    else{
        next()
    }
}
app.use(reqFilter)
app.get('/',(req,res)=>{
res.send("this is Middle ware page")
})

app.get('/about',(req,res)=>{
res.send("This is about page")
})

app.listen(2000)
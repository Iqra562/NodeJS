// ejs template engine ---- for routing of dynamic pages

const express = require('express');

const app = express();


// ejs is template enginr 
app.set('view engine', 'ejs')


app.get('/welcome',(req,res)=>{

    const empInfo={
        name:"JAWAD",
        id:"111"
    }
res.render('Welcome',{empInfo})
})

app.listen(2000)

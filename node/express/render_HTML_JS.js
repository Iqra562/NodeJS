const express = require('express');

const app  =express();


app.get('',(req,res )=>{
   res.send(`
    <input  type='text' placeholder="Your name "/>
    <a href="/contact" >Contact us page</a>
    `)
})

app.get('/contact',(req,res )=>{
   res.send(`
   <h1>It is contact page</h1>
     <a href="/about" >ABOUT us page</a>
    `)
})
app.get('/about',(req,res )=>{
   res.send([
    {name:'jawad',address :"ABC"},
    {name:'IQra',address :"ABC"},
    {name:'Pari',address :"ABC"},
   ])
})

app.listen(3000)
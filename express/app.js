const  express = require('express')

const app = express();

app.get('',(req,res)=>{
    res.send('Express js codeee..e.')
})
app.get('/contact',(req,res)=>{
    res.send('Contact us')
})

app.listen(1000)
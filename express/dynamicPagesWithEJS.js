const express= require('express');

const app = express();

app.set('view engine','ejs')


app.get('/about/:name/:id',(req,res)=>{
 const userInfo = {
    name: req.params.name,
    id : req.params.id,
    fav : ['coding','tea','peace']
 }
 res.render('About',{userInfo})
})

app.listen(200)
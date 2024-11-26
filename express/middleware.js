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

module.exports = reqFilter;
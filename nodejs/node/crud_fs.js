// crud with file system modules 

const fs = require('fs');
const path = require('path');

const myCrud = path.join(__dirname,"Crud_fs")
const myPath  = `${myCrud}/crud.txt`

// create 

// fs.writeFileSync(myPath,"Created file")


// read  

// fs.readFile(myPath,'utf8',(err,file)=>{
// console.log(file.toString())
// })

// update 
// fs.appendFile(myPath, "in node js",(err)=>{
//  if(!err){
// console.log("your file is updted successfulyy")
//  }
// })

// delete 
// fs.unlinkSync(myPath)

// rename 
fs.rename(myPath,`${myCrud}/renameCrud.txt`,(err)=>{
if(!err){
console.log("Your file is renamed successfully")
}
})
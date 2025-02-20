const fs = require("fs")

// Synchronous.. 
// fs.writeFileSync("./text.txt","Hey there")

// this module will create file in current directory "text.txt" and add text 

// Async.. 
// fs.writeFile("./text.txt","Hey there Async",()=>{})

 
//  const result =  fs.readFileSync("./contacts.txt","utf-8")
// console.log(result)
//  it returns something 


// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//        if(err){
//                   console.log("Error",err)
//        }else{
//                    console.log(result)
//        }
// })
// it expects a callback function


fs.appendFileSync('./text.txt',`${Date.now()} Hey there \n`) 
//it will append data in same file not overwrite
// it is used to store ip address and other data of user in log file  when user interact with your server 

fs.cpSync('./text.txt',"./copy.txt")
// it will create copy of text.txt 

fs.unlinkSync('./copy.txt')
// it will delete the copyFile.txt 

console.log(fs.statSync("./text.txt"))
// check state of file 
const fs = require('fs')
const os = require('os');
console.log(os.cpus().length)




// ------- it is used to write  in file, it works synchronously -----------

// fs.writeFileSync('./test.txt','hello')


// it works asynchronously
// fs.writeFile('./test.txt','hi',(err)=>{})


// the synchronous function returns something 
// const result = fs.readFileSync('./contacts.txt',"utf-8")
// console.log(result)


//   it is asynchronous and it expect a callback function
// fs.readFile('./contacts.txt',"utf-8",(err,result)=>{
// if(err){
// console.log(err)
// }else{ 
//     console.log(result)
// }
// })

// it will append the text in file '

// fs.appendFileSync('./test.txt',`Hey there \n`)


// it will copy the test file 

// fs.cpSync('./test.txt','./copy.txt')
const fs = require('fs')



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

fs.appendFileSync('./test.txt',`Hey there \n`)
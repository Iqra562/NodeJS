
// create file in root directory 

const fs = require('fs');
fs.writeFileSync("show.txt","NNNNNOOOODDDDEEE")



// create file in folder 

const path = require('path');

const myFolder = path.join(__dirname,'myfolder');

// for(let i = 0 ; i<3 ; i++){
// fs,fs.writeFileSync(`${myFolder}/dynamic${i}.txt`,"THIS IS FILE NO :" +i)
// }

// fs.readdir(myFolder,(err,items)=>{
//     // console.log(items)
// items.forEach((file)=>{
// console.log(file)
// })
// })


// delete
fs.unlinkSync(myFolder)



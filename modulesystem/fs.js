// // files

const fs = require('fs')


// // read a file

// let fileContent = fs.readFileSync('f1.txt');

// console.log('File text is : '+ fileContent)

// // write in a file

// fs.writeFileSync('f2.txt','file 2 ')

 // fs.appendFileSync('f3.txt',' Append data')

// fs.unlinkSync('f2.txt')


//Directories---------

// fs.mkdirSync('Dir1')

// let dirContent = fs.readdirSync('D:\\Node code\\Dir1')

// console.log('DirContent' + dirContent )

let b = fs.existsSync('Dir1')

console.log(b)
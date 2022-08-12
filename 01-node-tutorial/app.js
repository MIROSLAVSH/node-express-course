// check lodash
// console.log('Welcome to Node Tutorial')

// const _ = require('lodash');

// const items = [1, [2, [3, [4]]]]

// const newItems = _.flattenDeep(items);
// console.log(newItems)
// console.log("hello world")



// 1-read-file
// const { readFile, writeFile } = require('fs')

// console.log('started a first task')
// CHECK FILE PATH!!!!
// readFile('./01-node-tutorial/content/first.txt', 'utf8', (err, result) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(result)
//   console.log('completed first task')
// })
// console.log('starting next task')



// 2-setTimeout.js
// started operating system process
// console.log('first')
// setTimeout(() => {
//   console.log('second')
// }, 0)
// console.log('third')
// completed and exited operating system process



// 3-setInterval
// setInterval(() => {
//     console.log('hello world')
//   }, 2000)
//   console.log(`I will run first`)
  // process stays alive unless
  // Kill Process CONTROL + C
  // unexpected error



// 4-server 
// const http = require('http')

// const server = http.createServer((req, res) => {
//   console.log('request event')
//   res.end('Hello World')
// })

// server.listen(5000, () => {
//   console.log('Server listening on port : 5000....')
// })



// 11-fs-async
// const {readFile, writeFile} = require('fs')


// console.log('start')
// readFile('./01-node-tutorial/content/first.txt','utf8', (err,result)=>{
//   if(err){
//     console.log(err)
//     return 
//   }
//   const first = result
//   readFile('./01-node-tutorial/content/second.txt', 'utf8',(err,result)=>{
//     if(err){
//       console.log(err)
//       return 
//     }
//     const second = result
//     writeFile('./01-node-tutorial/content/result-async.txt', 
//     `here is the result: ${first}, ${second}`
//   ,(err,result)=>{
//     if(err){
//       console.log(err)
//       return
//     }
//     console.log('done with this task')
//   })
//   })
// })
// console.log('starting next task')


// 12-http
// const http = require('http');


// const server = http.createServer((req, res)=>{
//     if(req.url === '/'){
//         res.end('Home page')
//     }
//     if(req.url === '/about'){
//         // blocking code
//         for(let i = 0; i < 1000; i++){
//             for(let j = 0; j < 1000; j++){
//                 console.log(`${i} ${j}`)
//             }
//         }
//         res.end('About page')
//     }
//     res.end('Error page')
// })

// server.listen(5000,()=>{
//     console.log('server listening on port 5000...')
// })

const {readFile} = require('fs');

const getText = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',(err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

getText('./01-node-tutorial/content/first.txt')
    .then(result => console.log(result))
    .catch(err => console.log(err))
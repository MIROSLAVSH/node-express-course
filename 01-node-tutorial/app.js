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


// //read write file with async
// const {readFile, writeFile} = require('fs').promises;
// //const util = require('util');
// //const readFilePromise = util.promisify(readFile)
// //const writeFilePromise = util.promisify(writeFile)



// const start = async () =>{
//     try{
//         const first = await readFile('./01-node-tutorial/content/first.txt', 'utf8')
//         const second = await readFile('./01-node-tutorial/content/second.txt', 'utf8')
//         await writeFile('./01-node-tutorial/content/result-mind-grenade.txt', 
//         `THIS IS AWESOME: ${first} ${second}`, {flag: 'a'}
//         )
//         console.log(first, second)
//     }catch(error){
//         console.log(error)
//     }
    
// }


// start()

// //const getText = (path) =>{
//  //   return new Promise((resolve,reject)=>{
//  //       readFile(path,'utf-8',(err,data)=>{
//  //           if(err){
//  //               reject(err);
//  //           }
//  //           else{
//   //              resolve(data);
//   //          }
//   //      })
//   //  })
// //}
// //getText('./01-node-tutorial/content/first.txt')
//  //   .then(result => console.log(result))
// //    .catch(err => console.log(err))



// 13-event-emitter
// const EventEmitter = require('events');

// const customEmitter = new EventEmitter();

// customEmitter.on('response', (name, id)=>{
//     console.log(`data recieved user ${name} with id: ${id}`);
// })
// customEmitter.on('response', ()=>{
//     console.log(`some other logic here `)
// })
// customEmitter.emit('response', 'john', 34)



// 14-request-event
// const http = require('http')

// // //const server = http.createServer((req, res) => {
// // //  res.end('Welcome')
// // //})

// // //Using Event Emitter API
// const server = http.createServer()
// // //emits request event
// // //subcribe to it / listen for it / respond to it
// server.on('request', (req, res) => {
//   res.end('Welcome')
// })

// server.listen(5000)


// 16-streams

// const {createReadStream, createWriteStream} = require('fs');

// const stream = createReadStream('./01-node-tutorial/content/big.txt');

// stream.on('data', (result) =>{
//     console.log(result)
// })



// const { createReadStream } = require('fs')

// // default 64kb
// // last buffer - remainder
// // highWaterMark - control size
// // const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// // const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
// const stream = createReadStream('../01-node-tutorial/content/big.txt', {
//     highWaterMark: 90000, 
// })

// stream.on('data', (result) => {
//   console.log(result)
// })
// stream.on('error', (err) => console.log(err))



// 17-http-stream
// var http = require('http')
// var fs = require('fs')

// http
//   .createServer(function (req, res) {
//     // const text = fs.readFileSync('./01-node-tutorial/content/big.txt', 'utf8')
//     // res.end(text)
//     const fileStream = fs.createReadStream('./01-node-tutorial/content/big.txt', 'utf8')
//     fileStream.on('open', () => {
//         fileStream.pipe(res)
//     })
//     fileStream.on('error', (err) => {
//         res.end(err)
//     })
//   })
//   .listen(5000)
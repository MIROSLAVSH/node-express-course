// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
// const EventEmitter = require('events')

// const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

// customEmitter.on('response', (name, id) => {
//   console.log(`data recieved user ${name} with id:${id}`)
// })

// customEmitter.on('response', () => {
//   console.log('some other logic here')
// })

// customEmitter.emit('response', 'john', 34)

// const http = require('http');
// if(req.url === '/'){
//   res.end('Home page')
// }
// if(req.url === '/about'){
//   res.end('About page')
// }
// res.end('Error page')
// const server = http.createServer((req, res)=>{

// })

// server.listen(5000,()=>{
//   console.log('server listening on port 5000...')
// })
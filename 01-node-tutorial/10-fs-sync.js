// const { readFileSync, writeFileSync } = require('fs')
// console.log('start')
// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// writeFileSync(
//   './content/result-sync.txt',
//   `Here is the result : ${first}, ${second}`,
//   { flag: 'a' }
// )
// console.log('done with this task')
// console.log('starting the next one')


const { readFileSync, writeFileSync } = require('fs');
console.log('start')
const first = readFileSync('./01-node-tutorial/content/first.txt', 'utf8');
const second = readFileSync('./01-node-tutorial/content/second.txt', 'utf8');

writeFileSync('./01-node-tutorial/content/result-sync.txt', 
`here is the result: ${first}, ${second}`
)

console.log('done with this task');
console.log('starting the next one');

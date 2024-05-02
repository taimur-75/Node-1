const cp = require('child_process')


// cp.execSync('calc')

//cp.execSync('start chrome https://nodejs.org/docs/latest/api/')

console.log('Word1 ' + cp.execSync('node word2.js'))
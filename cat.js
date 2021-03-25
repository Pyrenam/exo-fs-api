//const fs = require('fs')

let txt = fs.readFileSync('./file.txt', 'utf-8')
console.log(txt)

// check: command line  wellness
if (process.argv.length !== 3) {
  console.log('Error: node is not defined')
  process.exit(1)
}

// check : the path exist
if (!fs.existsSync(process.argv[2])) {
  console.log('Sorry: ${process.argv[2]} do not exist')
  process.exit(1)
}

const txt = fs.readFileSync(process.argv[2])

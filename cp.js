const fs = require('fs')

let txt = fs copyFileSync( './src.txt', './dst.txt' )

//check: command line  wellness
if (process.argv.length !== 4) {
  console.log('Error: ')
  process.exit(1)
}

//check: src.txt existence
if (!fs.existsSync(process.argv[3])) {
  console.log('Sorry: ${process.argv[3]}do not exist)
  process.exist(1)
}
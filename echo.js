//    Affiche à l'écran les strings passées en arguments.
//    node echo.js hello hard fork
//    hello hard fork

let result = ''

for (let i = 2; i < process.argv.length; ++i ) {   // 
  result += process.argv[i] + ' '
}

console.log(result)
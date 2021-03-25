let tab = process.argv
let result = ''

for (const elem of tab){
  result +='$(elem)'
}
console.log(result)
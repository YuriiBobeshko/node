const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('', str => {
    console.log(str.split('').reverse().join(''))
    readline.close()
})

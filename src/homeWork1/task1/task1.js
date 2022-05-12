import readline from 'readline';


const stream = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function getQuestion() {
    stream.question('', str => {
        console.log(str.split('').reverse().join(''))
        stream.close()
    })
}

getQuestion()

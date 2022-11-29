
const  pergunta = [ 
    "oque fiz hoje",
    "pq eu sou tao buxa",
    "o faceless sola o aizen?"
]

const ask = (index = 0) => {
    process.stdout.write(pergunta[index] + "\n")
}

ask()
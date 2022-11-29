
const  pergunta = [ 
    "oque fiz hoje",
    "pq eu sou tao buxa",
    "o faceless sola o aizen?"
]

const ask = (index = 0) => {
    process.stdout.write( "\n\n" + pergunta[index] + ">")
}

ask()

const answers = [];
process.stdin.on("data", data=>{ //o on executa a função data
   answers.push(data.toString().trim())//o sdn out recebe o data e tira os espaços com o trim
    if(answers.length < pergunta.length){
        ask(answers.length)
    } else{
        console.log(answers)
        process.exit()//termina o processo assim que ele chegar ao fim, evitando loops
    }
 
})


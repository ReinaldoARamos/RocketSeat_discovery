let familia = {
    receita: 1000,
    despesas: 500
}

function calculaReceita() {
    let Balance = familia.receita - familia.despesas

    if (Balance < 0 ) {
        console.log("faltou grana")
    }else{
        console.log("sobrou " + Balance + " reais")
    }
}

calculaReceita(familia);
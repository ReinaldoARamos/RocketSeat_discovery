let bookByCategory = [
    {
        category: "Riqueza",
        books: [
            { 
            title: "buxa",
            author: "Dario"
            },
            {
                title: "saifoda",
                author: "Reinaldo"
            },
            {
                
            }
        ]
    },
    {
        category: "Parede Buster",
        books: [
            { 
            title: "feioso",
            author: "Esquisito"
            },
            {
                title: "Dante",
                author: "Força infinita"
            },
           
        ]
    }
]

const totalCategories = bookByCategory.length

console.log(totalCategories);
for(let category of bookByCategory) {
    console.log("O total de categorias é " + category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];
    for(let category of bookByCategory){ //entra  dentro do objeto
        for ( let book of category.books){ //dentro do objeto ele pega a categoria
            if(authors.indexOf(book.author) == -1){ //entra dento, procura o index of e se retornar o(encotnrou itens) 
                //ele da push no array
                authors.push(book.title)
            }
        }
    }
    console.log("tem " + authors.length + " autores")
}

countAuthors();

function booksofDario() {
    let books = [];
    for(let category of bookByCategory){ //entra  dentro do objeto
        for ( let book of category.books){ //dentro do objeto ele pega a categoria
            if(book.author === "Dario"){
                books.push(book.title)
            }
        }
    }
    console.log("Livros do Autor Dario: " + books)
}


booksoAuthor();

function booksoAuthor(author) {
    let books = [];
    for(let category of bookByCategory){ //entra  dentro do objeto
        for ( let book of category.books){ //dentro do objeto ele pega a categoria
            if(book.author === author){
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do Autor ${author}:  ${books.join(", ")}` )
}


booksoAuthor("Dario");


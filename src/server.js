const express = require("express")
const server = express()

// pegar o banco de dados
const db = require("./database/db.js")

// configurar pasta public 
server.use(express.static("public"))

//habilitar o uso do req.body
server.use(express.urlencoded({ extended: true }))


// utilizando template enginem
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


// configurar caminhos da minha aplicação
// pagina inicial
// req: requisição
// res: resposta
server.get("/", (req, res) => {
   
    return res.render("home.html", { title: "Seu marketplace de coleta de resíduos."})
})


server.get("/create-point", (req, res) => {
    
    // req.query = query strings da URL
    // console.log(req.query)

    return res.render("create-point.html")
})
server.post("/savepoint", (req, res) =>{
    // req.body = o corpo do formulário
    // console.log(req.body)


    // inserir dados na tabela
    const query = `
        INSERT INTO places (
            image,
            name,
            adress,
            adress2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?, ?);
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.adress,
        req.body.adress2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    // verificação de erro
    function afterInsertData(err) {
        if(err) {
            console.log(err)
            return res.send("Erro no cadastro.")
        }

        console.log("Cadastro com sucesso")
        console.log(this)
        return res.render("create-point.html", { saved: true })

    }

    db.run(query, values, afterInsertData)
    

})


server.get("/results", (req, res) => {
    // consultar os dados da tabela
    function consult (err, rows) {
        if(err) {
             return console.log(err)
        }

        const total = rows.length

        console.log("Aqui estão seus registros: ")
        console.log(rows)
        return res.render("results.html", { places: rows, total: total })
    }

    db.all(`SELECT * FROM places`, consult)

 
})


// ligar o servidor
server.listen(3000)
<<<<<<< HEAD
// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db

// utilizar o objeto de banco de dados para nossas operações
db.serialize(() => {
//     // com comandos SQL:

//     // 1 - criar uma tabela
//     const table = `
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             adress TEXT,
//             adress2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );`

//     db.run(table)



//     // 2 - inserir dados na tabela
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             adress,
//             adress2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `
//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Nº 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Papéis e papelão"
//     ]

//     // verificação de erro
//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Cadastro com sucesso")
//         console.log(this)
//     }

// db.run(query, values, afterInsertData)


    // 3 - consultar os dados da tabela
    function consult (err, rows) {
        if(err) {
            return console.log(err)
        }

        console.log("Aqui est�o seus registros: ")
        console.log(rows)


        const total = rows.length
    }

    // db.all(`SELECT * FROM places`, consult)


//     // 4 - deletar um dado da tabela
    function delet (err){
        if (err) {
            return console.log(err)
        }

        console.log("Registro deletado com sucesso!")
    }

    db.run(`DELETE FROM places WHERE id = ?`, [6], delet)

=======
// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db

// utilizar o objeto de banco de dados para nossas operações
db.serialize(() => {
//     // com comandos SQL:

//     // 1 - criar uma tabela
//     const table = `
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             adress TEXT,
//             adress2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );`

//     db.run(table)



//     // 2 - inserir dados na tabela
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             adress,
//             adress2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `
//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Nº 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Papéis e papelão"
//     ]

//     // verificação de erro
//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Cadastro com sucesso")
//         console.log(this)
//     }

// db.run(query, values, afterInsertData)


    // 3 - consultar os dados da tabela
    function consult (err, rows) {
        if(err) {
            return console.log(err)
        }

        console.log("Aqui estão seus registros: ")
        console.log(rows)


        const total = rows.length
    }

    // db.all(`SELECT * FROM places`, consult)


//     // 4 - deletar um dado da tabela
    function delet (err){
        if (err) {
            return console.log(err)
        }

        console.log("Registro deletado com sucesso!")
    }

    db.run(`DELETE FROM places WHERE id = ?`, [6], delet)

>>>>>>> 8543901dac5d4b59742754627e66afdd6f9e5213
})
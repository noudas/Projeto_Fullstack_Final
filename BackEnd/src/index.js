// index.js

// Imports
const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const multer = require("multer");

// MongoDB
const Sobrevivente = require('./mongodb/models/pessoa');
const Descricao = require('./mongodb/models/descricao');
const Video = require('./mongodb/models/video');

const {isEmpty} = require('./utils/objUtils');

const mongodbConnect = require('./mongodb/mongodb-client')
mongodbConnect();

// Multer middleware para imagens
var upload = multer();


// Initializador
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use("/healthcheck", async (req,res) =>{
    console.log("It just works")
    res.status(200).json({ message: "ok"})
})

//Crud
// Tabela Sobrevivente
app.post('/v2/api/pessoa', upload.single("imagem") , async (req,res) => {
    console.log("Trying to store sobrevivente...");

    const body = req.body;
    if (isEmpty(body)) {
        res.status(400).json({ message: "Request body cannot be empty." });
        return;
    }

    const imagem = req.file;
    const {codigo, nome } = body;

    console.log(nome);
    if (!nome || nome.trim().length === 0) {
        res.status(422).json({ message: "Name field cannot be empty" });
        return;
    }
    console.log(imagem);
    if (!file) {
        res.status(422).json({ message: "File field cannot be empty" });
        return;
    }


    const newPessoa = new Sobrevivente({ codigo, nome, imagem })
    try {
        await newPessoa.save();
        res.status(201).json({
            message: "User saved",
            newPessoa,
        });
        console.log("Stored new user");
    } catch (error) {
        console.error("Error storing user");
        console.error(error.message);
        res.status(500).json({ message: "Failed to save user" });
        return;
    }

});

app.get('/v2/api/pessoa', async (req,res) => {

    try {
        const id = req.body.id;
        const pessoa = await Sobrevivente.findById(id);
        res.send({pessoa})
    } catch (error) {
        console.error(error.message);
    }
});


app.patch('/v2/api/pessoa', async (req,res) => {
    try {
        const atualizar = await Sobrevivente.findOneAndUpdate({_id:req.body.id}, {nome:req.body.nome});
        res.send({atualizar});
    } catch (error) {
        console.error(error.message);
    }
});

app.delete('/v2/api/pessoa', async (req,res) => {
    try {
        const exterminate = await Sobrevivente.deleteOne({_id:req.body.id})
        res.send({exterminate});
    } catch (error) {
        console.error(error.message);
    }
});




//Tabela DescricaoPessoa
app.post('/v2/api/descricao', async (req,res) => {

    const body = req.body;
    if (isEmpty(body)) {
        res.status(400).json({ message: "Request body cannot be empty." });
        return;
    }
    const codigo = body.codigo;
    const descricao = body.descricao;

    const newDescricao = new Descricao({ codigo, descricao })
    try {
        await newDescricao.save();
        res.status(201).json({
            message: "Descricao saved",
            newDescricao,
        });
        console.log("Stored new user");
    } catch (error) {
        console.error(error.message);
    }
});

app.get('/v2/api/descricao', async (req,res) => {

    try {
        const id = req.body.id;
        const descricao = await Descricao.findById(id);
        res.send({descricao})
    } catch (error) {
        console.error(error.message);
    }
});


app.patch('/v2/api/descricao', async (req,res) => {
    try {
        const atualizar = await Descricao.findOneAndUpdate({_id:req.body.id}, {nome:req.body.nome});
        res.send({atualizar});
    } catch (error) {
        console.error(error.message);
    }
});

app.delete('/v2/api/descricao', async (req,res) => {
    try {
        const exterminate = await Descricao.deleteOne({_id:req.body.id})
        res.send({exterminate});
    } catch (error) {
        console.error(error.message);
    }
});



// Tabela Video
app.post('/v2/api/video', async (req,res) => {

    const body = req.body;
    if (isEmpty(body)) {
        res.status(400).json({ message: "Request body cannot be empty." });
        return;
    }
    const codigo = body.codigo;
    const url = body.url;
    const transcricao = body.transcricao;

    const newVideo = new Video ({ codigo, url, transcricao })
    try {
        await newVideo.save();
        res.status(201).json({
            message: "Descricao saved",
            newVideo,
        });
        console.log("Stored new user");
    } catch (error) {
        console.error(error.message);
    }
});

app.get('/v2/api/video', async (req,res) => {

    try {
        const id = req.body.id;
        const video = await Video.findById(id);
        res.send({video})
    } catch (error) {
        console.error(error.message);
    }
});


app.patch('/v2/api/video', async (req,res) => {
    try {
        const atualizar = await Video.findOneAndUpdate({_id:req.body.id}, {nome:req.body.nome});
        res.send({atualizar});
    } catch (error) {
        console.error(error.message);
    }
});

app.delete('/v2/api/video', async (req,res) => {
    try {
        const exterminate = await Video.deleteOne({_id:req.body.id})
        res.send({exterminate});
    } catch (error) {
        console.error(error.message);
    }
});


app.listen(5000,() => {
    console.log("App Listening on Port 5000")
});



/*Crud v1 
const db = require("./db");


// db.js

const sqlite3 = require('sqlite3').verbose();
const dbPath = './banco.db'; 
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS DescricaoPessoa (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            Codigo INT,
            Texto TEXT
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS Pessoa (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            Codigo INT,
            Nome TEXT NOT NULL,
            Imagem BLOB,
            FOREIGN KEY (Codigo) REFERENCES DescricaoPessoa(Codigo)
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS Video (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            Codigo INT,
            URL TEXT NOT NULL,
            Transcricao TEXT,
            FOREIGN KEY (Codigo) REFERENCES DescricaoPessoa(Codigo)
        )
    `);
});

module.exports = db;

// Tabela DescricaoPessoa
app.post('/v1/api/descricao', (req, res) => {
    console.log('Request para registrar DescricaoPessoa ok!');
    const { Codigo, Texto } = req.body;
    db.run('INSERT INTO DescricaoPessoa (Codigo, Texto) VALUES (?,?) ON CONFLICT(Codigo) DO UPDATE SET Texto=? WHERE Codigo=?', [Codigo, Texto, Texto, Codigo], function(err) {
        if (err) {
            console.error(err.message);
            return res.status(500).send(err.message);
        }
        res.status(201).send({ Codigo });
    });
});

app.get('/v1/api/descricao', (req, res) => {
    db.all('SELECT * FROM DescricaoPessoa', [], (err, rows) => {
        if (err) return res.status(500).send(err.message);
        res.status(200).json(rows);
    });
});


// Tabela Pessoa
app.post('/v1/api/pessoa', (req, res) => {
    console.log('Request para registrar Pessoa ok');

    const { Codigo, Nome, Imagem } = req.body;
    console.log(`Registering Pessoa with Codigo: ${Codigo}, Nome: ${Nome}`);

    db.run('INSERT INTO Pessoa (Codigo, Nome, Imagem) VALUES (?,?,?)', [Codigo, Nome, Imagem], function(err) {
        if (err) {
            console.error('Database error:', err.message);
            return res.status(500).send(err.message);
        }
        console.log('Pessoa registered successfully');
        res.status(201).send({ Codigo });
    });
});

app.get('/v1/api/pessoa', (req, res) => {
    db.all('SELECT * FROM Pessoa', [], (err, rows) => {
        if (err) return res.status(500).send(err.message);
        res.status(200).json(rows);
    });
});


// Tabela Video
app.post('/v1/api/video', (req, res) => {
    console.log('Request para registrar Video ok');

    const { Codigo, URL, Transcricao } = req.body;
    db.run('INSERT INTO Video (Codigo, URL, Transcricao) VALUES (?, ?, ?)', [Codigo, URL, Transcricao], function(err) {
        if (err) return res.status(500).send(err.message);
        res.status(201).send({ Codigo });
    });
});

app.get('/v1/api/video', (req, res) => {
    db.all('SELECT * FROM Video', [], (err, rows) => {
        if (err) return res.status(500).send(err.message);
        res.status(200).json(rows);
    });
});



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/images/:filename', (req, res) => {
    const filePath = path.join(__dirname, 'uploads/', req.params.filename);
    res.sendFile(filePath);
});

*/
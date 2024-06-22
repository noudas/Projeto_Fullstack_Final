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


// CRUD - Create
// Formdata - Rest
app.post('/v2/api/formdata', upload.single("imagem"), async (req,res) => {
    console.log('Uploading formdata')
    console.log(req.body);
    console.log(req.file);

    const imagem = req.file.buffer;
    const { codigo, nome, descricao, url, transcricao } = req.body;

    console.log(codigo, nome, descricao, url, transcricao);
    
    
    const newPessoa = new Sobrevivente({ codigo, nome, imagem })
    const newDescricao = new Descricao({ codigo, descricao })
    const newVideo = new Video({ codigo, url, transcricao })
    try {
        await newPessoa.save();
        await newDescricao.save();
        await newVideo.save()
        console.log("Stored all");
    } catch (error) {
        console.error("Error storing user");
        console.error(error.message);
        res.status(500).json({ message: "Failed to save something" });
        return;
    }
    
    res.status(201).json({
        message:"Created",
        newPessoa,
        newDescricao,
        newVideo
    });
})


// CRUD - Read / Update / Delete
// Tabela Sobrevivente
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
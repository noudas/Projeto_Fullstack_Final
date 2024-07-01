// index.js

// Imports
const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const multer = require("multer");

const cors = require("cors");

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
//Get por ID
app.get('/v2/api/pessoa/:codigo', async (req, res) => {
    try {
        const codigo = req.params.codigo;
        if (!codigo) {
            return res.status(400).json({ message: "Codigo is required" });
        }
        const pessoa = await Sobrevivente.findOne({ codigo: codigo });
        if (!pessoa) {
            return res.status(404).json({ message: "Pessoa not found." });
        }
        const base64Image = pessoa.imagem.toString('base64');

        res.status(200).json({
           ...pessoa.toObject(),
            imagem: `data:image/png;base64,${base64Image}`
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server error" });
    }
});

//Get todos
app.get('/v2/api/lista', async (req, res) => {
    try {
        const people = await Sobrevivente.find(); // Fetch all documents
        
        // Map over each person to convert their image to Base64
        const peopleWithBase64Images = await Promise.all(people.map(async (pessoa) => {
            const base64Image = pessoa.imagem.toString('base64');
            return {
               ...pessoa.toObject(),
                imagem: `data:image/png;base64,${base64Image}`
            };
        }));
        
        res.status(200).json(peopleWithBase64Images); // Send the array of people with Base64 images as JSON
    } catch (error) {
        console.error("Error fetching people:", error.message);
        res.status(500).json({ message: "Server error" });
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
app.get('/v2/api/descricao/:codigo', async (req,res) => {
    try {
        const codigo = req.params.codigo;
        if (!codigo) {
            return res.status(400).json({ message: "Codigo is required" });
        }
        const descricao = await Descricao.findOne({ codigo: codigo });
        if (!descricao) {
            return res.status(404).json({ message: "Descricao not found" });
        }
        res.status(200).json({ descricao });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server error" });
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
app.get('/v2/api/video/:codigo', async (req,res) => {
    try {
        const codigo = req.params.codigo;
        if (!codigo) {
            return res.status(400).json({ message: "Codigo is required" });
        }
        const video = await Video.findOne({ codigo: codigo });
        if (!video) {
            return res.status(404).json({ message: "Video not found" });
        }
        res.status(200).json({ video });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server error" });
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
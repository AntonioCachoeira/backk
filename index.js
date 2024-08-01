const express = require('express')
const app = express()
const cors = require('cors')
const conn = require('./db/conn')
const Fabricante = require('./model/Fabricante')
const Produto =require('./model/Produto')

const PORT = 3000
const hostname =  'localhost'

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
/*-------------------------POST------------------------------------------- */
app.post('/produto/', async(req,res)=>{
    const dados = req.body
    try{
        const pesq =await Produto.create(dados,{raw:true})
        res.status(200).json(pesq)
    }catch{
        res.status(200).json('n rodou')
    }
})
app.post('/fabricante', async(req,res)=>{
    const dados = req.body
    try{
        const pesq =await Fabricante.create(dados,{raw:true})
        res.status(200).json(pesq)
    }catch{
        res.status(200).json('n rodou')
    }
})
/*-------------------------GET-------------------------------------------- */
app.get('/produtos/:nome', async(req,res)=>{
    const dados = req.params
    try{
        const pesq = await Produto.findOne({raw:true, where:{nome: dados.nome}})
        res.status(200).json(pesq)
    }catch{
        res.status(500).json('n rodou')
    }
})
app.get('/fabricantes/:marca', async(req,res)=>{
    const dados = req.params
    try{
        const pesq =await Fabricante.findOne({raw:true, where:{marca: dados.marca}})
        res.status(200).json(pesq)
    }catch{
        res.status(500).json('n rodou')
    }
})

app.get('/', (req,res)=>{
    
})

conn.sync().then(()=>{
    app.listen(PORT,hostname,()=>{
        console.log('coon.sync foi');
    })
}).catch(()=>{
    console.error('n foi o conn.sync');
})


const Casa = require('../models/casaSchema');


exports.adicionar = async (req,res) => {
    try{
        if(!req.body.tipo){
            res.status(400).json({message: "Tipo esta vazio"});
            return;
        } else if (!req.body.localizacao){
            res.status(400).json({message: "Localização esta vazia"});
            return;
        } else if (!req.body.valor){
            res.status(400).json({message: "Valor esta vazio"});
            return;
        } else if(!req.body.imagemUrl){
            res.status(400).json({message: "URL da imagem esta vazio"});
            return;
        };
        const result = await Casa.create(req.body)
        return res.status(201).json(result)
    } catch(err){
        console.error(err.message)
        return res.status(400).json({message:"ERRO"})
    }
}

exports.listarTudo = async (req,res) => {
    try{
        const result = await Casa.find({})
        return res.status(201).json(result)
    } catch(err){
        console.error(err.message)
        return res.status(400).json({message:"ERRO"})
    }
}

exports.buscaPorId = async (req,res) => {
    try{
        if(req.params.id.length != 24){
            res.status(400).json({message: "Par"});
            return
        }
        const result = await Casa.findById({_id:id})
        return res.status(201).json(result)
    } catch(err){
        console.error(err.message)
        return res.status(400).json({message:"ERRO"})
    }
}
const express = require('express')
const Joi = require('joi')
const mongoose = require('mongoose')
const router = express.Router();
const {Category, validate} = require('../Models/categoriesModel')


router.get('/api/categories', async (req,res)=>{
    let categories = await Category.find()
    res.send(categories);
});

router.post('/api/categories', async (req,res)=>{

    //const{error} = validate(req.body)
    //if(error) res.status(400).send(error.details[0].message)

    const category = new Category ({
        name : req.body.name
    });
    await category.save();
    res.send(category);
});

router.put('/api/categories/:id', async (req,res)=>{

    //const {error} = validate(req.body)
    //if(error) res.status(400).send(error.details[0].message)

    const category = await Category.findByIdAndUpdate(req.params.id, { name : req.body.name}, {new : true})

    //const category = categories.find(c => c.id === parseInt(req.params.id));

    if(!category) return res.status(404).send('The category with the given Id was not found !');
    //if(error) return res.status(404).send(error.details[0].message);

    res.send(category);
});


router.delete('/api/categories/:id', async (req,res)=>{
    const category = await Category.findByIdAndDelete(req.params.id)
    if(!category) return res.status(404).send('The category with the given Id was not found !');
    res.send(category);
})

router.get('/api/categories/:id', async (req,res)=>{
    const category = await Category.findById(req.params.id)
    if(!category) return res.status(404).send('The category with the given Id was not found !');
    res.send(category);
})




module.exports = router




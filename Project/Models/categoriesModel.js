const Joi = require('joi')
const mongoose = require('mongoose')



const categorySchema = new mongoose.Schema({
    name : {type : String, required : true, minlength : 3, maxlenght : 30}
}) 

const Category = mongoose.model('Category', categorySchema)


function validateData(category){
    const schema = Joi.object({
        name : Joi.string()
        .min(3)
        .required()
        
    })

    return Joi.validate(category, schema)
}



exports.Category = Category
exports.validate = validateData
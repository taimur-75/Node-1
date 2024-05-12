const Joi = require('joi')
const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name : {type : String, required : true, minlength : 3, maxlenght : 30},

    isEnrolled : {
        type : Boolean,
        default : false
    },

    Phone : {
        type : String,
        required : true,
        minlength : 10,
        maxlength : 25
    }

}) 

const Student = mongoose.model('Students', studentSchema)



function validateData(student){
    const schema = Joi.object({
        name : Joi.string().min(3).max(50).required(),
        Phone : Joi.string().min(10).max(50).required(),
        isEnrolled : Joi.boolean()
        
    })

    return Joi.validate(student, schema)
}

exports.Student = Student
exports.validate = validateData
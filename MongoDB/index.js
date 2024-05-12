const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then(()=>console.log('Connection is successful.'))
.catch(err=>console.error('Could not connect to mongodb !', err))

const courseSchema = new mongoose.Schema({
    name : {type: String, required : true, minlength : 5, maxlength : 10},
    tags : {
        type : Array,
        validate : {
            validator : function(tags){
                return tags.length > 1 
            }
        }
    },
    category : {
        type : String,
        required : true,
        enum : ['A','B','C','D']
    },
    Tutor : {type: String, required : true},
    publishedDate : {type:Date, default: Date.now},
    isPublished : {type: Boolean, required : true},
    rating : {type : Number, required : function(){return this.isPublished}}
})


const Course = mongoose.model('Course', courseSchema)

async function createCourse(){
    const course = new Course({
        name : 'Course7',
        Tutor : 'T7',
        tags : ['tag3', 'tag4'],
        category : 'C',
        isPublished : true,
        rating : 4.4
    });

    try {
        //await course.validate()
        const result = await course.save()
        console.log(result)
    } catch (error) {
        for(field in error.errors){
            console.log(error.errors[field])
        }
    }

    
}

createCourse()

// comparison operator : eq,gt,gte,lt,lte , in,not in.


// logical operator : and, or

async function getCourses(){
    const courses = await Course.find({rating : {$in : [3, 4.2, 4.3, 4.5]}}).select({Tutor : 1, isPublished : 1})
    .or([{Tutor : 'T1'}, {rating : 4.3}])
    console.log(courses)
}

// getCourses()


async function updateCourse(id){
    let course = await Course.findById(id)
    if (!course) return; 
    course.isPublished = true
    let updatedCourse = await course.save()
    console.log(updatedCourse)

}

//updateCourse('663f6bf9a2926a7af8538d3a')

async function deleteCourse(id){
    let course = await Course.findByIdAndDelete(id)
    console.log(course)
}

//deleteCourse('663f6c256fc5cb9a897e6835')



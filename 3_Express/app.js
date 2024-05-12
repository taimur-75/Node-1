const express = require('express')

const mid = require('./middlewares/middle')

const mid2 = require('./middlewares/mid2')

const morgan = require('morgan')

const app = express()

app.use(express.json())
// get, post, put, delete

app.use(mid)

app.use(mid2)

app.use(morgan('tiny'))

const courses = [
    {id : 1 , name : 'Javascript'},
    { id:2, name : 'Java'},
    { id:3 ,name :'Python'}
]

app.get('/',(req,res)=>{
    res.send('This is home page')
})

app.get('/about', (req,res)=>{
    res.send('This is about page')
})

app.get('/contact', (req,res)=>{
    res.send('This is contact page')
})

app.get('/courses',(req,res)=>{
    res.send(courses)
})


app.post('/courses',(req,res)=>{
    const course ={
        id : courses.length + 1,
        name : req.body.name
    }

    courses.push(course)
    res.send(course)
})//write data

app.put('/courses/:coursename' , (req,res)=>{
    const course = courses.find(course => course.name === req.params.coursename)
    if(!course) res.status(404).send('The course you are looking for does not exist')

    course.name = req.body.name
    res.send(course)
})//update data




//route parameters

app.get('/names/:name', (req,res)=>{
    res.send(req.params.name)
})

app.get('/course/:coursename', (req,res)=>{

    let course = courses.find(course => course.name === req.params.coursename)
    if(!course) res.status(404).send('The course you are looking for does not exist')
    res.send(course)
})

// app.delete('/course/:coursename', (req,res)=>{
//     let UpdatedCourses = courses.filter(course => course.name !== req.params.coursename)

//     courses = UpdatedCourses

//     res.send(courses)
// })

app.delete('/course/:id' , (req,res)=>{
    let course = courses.find(course => course.id === perseInt(req.params.id))
    if(!course) res.status(404).send('The course you are looking for does not exist')

    const index = courses.indexOf(course)

    courses.splice(index, 1)

    res.send(course)

})

  


const port = process.env.PORT || 3000

app.listen(port, ()=> console.log(`Port is running on ${port}`))




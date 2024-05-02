const express = require('express')

const app = express()

// get, post, put, delete

app.get('/',(req,res)=>{
    res.send('This is home page')
})

app.get('/about', (req,res)=>{
    res.send('This is about page')
})

app.get('/contact', (req,res)=>{
    res.send('This is contact page')
})

//route parameters

app.get('/names/:name', (req,res)=>{
    res.send(req.params.name)
})

const port = process.env.PORT || 3000

app.listen(port, ()=> console.log(`Port is running on ${port}`))




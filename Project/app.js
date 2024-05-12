const express = require('express')
const categories = require("./routes/categories")
const students = require('./routes/students')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/learningPlatform')
.then(()=>console.log('Connection is successful to database.'))
.catch(err=>console.error('Could not connect to mongodb !', err))

const app = express()

app.use(express.json());
app.use('/api/categories',categories);
app.use('/api/students',students)



const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`Listening on port ${port}...`));




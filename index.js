const express = require('express');
const app = express();
const studentRoutes = require('./src/student/routes');

app.use(express.json())

app.use('/student', studentRoutes)

app.get('/', (req, res)=>{
    res.send("hello World")
})

app.listen(3000,()=>{
    console.log("server listen port is 3000")
})
let express = require('express');
let mongoose = require('mongoose');

mongoose
.connect('mongodb://127.0.0.1:27017/test')
.then((x)=>{
    console.log('Connected to DB');
})
.catch((err)=>{
    console.error('Error connecting to DB');
});

const app = express();

const server = app.listen(4000,()=>{
    console.log('Connected to port 4000');
})
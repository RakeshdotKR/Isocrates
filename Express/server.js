const express = require('express');

const app = express();

app.listen(3000);

app.get('/',(req,res)=>{
    //res.send('<p>Hi Home Page</p>');
    res.sendFile('./assets/index.html',{root:__dirname});
    console.log(__dirname);
});
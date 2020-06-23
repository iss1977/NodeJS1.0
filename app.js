const express = require('express');
const app = express();

app.listen(3000, ()=> {
    console.log("Wazapppppp");
});

app.get('/', (req,res)=> {
    res.send("<h1>Welcome to the homepage</h1>");
});
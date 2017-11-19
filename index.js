const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('basic skeleton for express app')
})


app.listen(3000, function(){
    console.log('app is running on port 3000')
})
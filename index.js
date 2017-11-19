const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.get('/', function(req, res){
    res.send('basic skeleton for express app')
})


app.listen(port, function(){
    console.log('app is running on port ' + port)
})
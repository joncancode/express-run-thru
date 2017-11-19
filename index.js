const express = require('express');
const app = express();
const port = process.env.PORT || 3000

const todoRoutes = require('./routes/todos')

app.get('/', function(req, res){
    res.send('basic skeleton for express app')
})

app.use('/api/todos', todoRoutes)


app.listen(port, function(){
    console.log('app is running on port ' + port)
})